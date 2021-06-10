import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { GetapiService } from '../getapi.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  total: number;
  stds: any;
  avatar: any;
  imgurl: string;
  id: any;
  grade: string;
  result: string;
  percentage: number;
  English: number;
  Phy: number;
  Maths: number;
  chem: number;
  history: number;
  single: any;

  constructor(
    private student: GetapiService,
    private storeage: AngularFireStorage
  ) {}

  ngOnInit(): void {
    this.student.getstudent().subscribe((data) => {
      this.stds = data;
    });
    console.log(this.stds);
  }

  async gotfile(event: any) {
    if (event.target.files && event.target.files[0]) {
      this.avatar = event.target.files[0];
      console.log(this.avatar);
      var filepath = `${this.avatar.name}_${new Date().getTime()}`;
      var fileref = this.storeage.ref(filepath);
      await this.storeage.upload(filepath, this.avatar).then(() => {
        fileref.getDownloadURL().subscribe((url) => {
          this.imgurl = url;
          console.log(url);
          alert('uploaded');
        });
      });
    }
  }
  async onSubmit(data: any) {
    this.total =
      this.English + this.Phy + this.Maths + this.chem + this.history;

    this.percentage = (this.total / 500) * 100;
    if (this.percentage > 35) {
      this.result = 'PASS';
      this.grade = 'A';
    } else {
      this.result = 'FAILED';
      this.grade = 'C';
    }

    await this.student
      .poststudent({
        ...data,
        avatar: this.imgurl,
        total: this.total,
        percentage: this.percentage.toFixed(2),
        result: this.result,
        grade: this.grade,
      })
      .subscribe((done) => {
        console.log('done');
      });
    // console.log({
    //   ...data,
    //   total: this.total,
    //   percentage: this.percentage,
    //   result: this.result,
    //   grade: this.grade,
    //   avatar: this.imgurl,
    // });
  }
  onSearch() {
    this.student.findstudent(this.id).subscribe((result) => {
      this.single = result;
    });
  }
}
