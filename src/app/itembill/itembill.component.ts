import { GetapiService } from './../getapi.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';

@Component({
  selector: 'app-itembill',
  templateUrl: './itembill.component.html',
  styleUrls: ['./itembill.component.css'],
})
export class ItembillComponent implements OnInit {
  public item: any;
  public singleitem: any;
  public items: any;
  public item_name: string;
  public qty: number;
  public dis: number;
  public total: number;
  public netprice: number;
  public avatar: any;
  public imgurl: any;

  constructor(
    private storage: AngularFireStorage,
    private api: GetapiService
  ) {}
  //geting all items
  ngOnInit(): void {
    this.api.getitem().subscribe((data) => {
      this.items = data;
    });
  }
  // uploading img to db
  async gotfile(event: any) {
    this.avatar = event.target.files[0];
    var filepath = `${this.avatar.name}_${new Date().getTime()}`;
    var fileref = this.storage.ref(filepath);
    await this.storage.upload(filepath, this.avatar)
    .then(() => {
      fileref.getDownloadURL().subscribe((url) => {
        this.imgurl = url;
        alert('uploaded');
      });
    });
  }
  //posting data to db
  onSubmit(data: any) {
    this.api.postitem({ ...data, avatar: this.imgurl }).subscribe((data) => {
    });
  }
  oneitem() {
    this.api.fintitem(this.item).subscribe((data) => {
      this.singleitem = data;
      console.log(this.singleitem[0].price);
    });
  }
  //geting bill
  getbill(): void {
    this.total = this.singleitem[0].price * this.qty;
    this.dis = this.total * 0.05;
    this.netprice = this.total - this.dis;
  }
  //posting  bill to server
  postbill(data: any) {
    this.api
      .postbill({
        ...data,
        date: new Date(),
        ITEMinfo: this.singleitem,
        TOTAL: this.total,
        DISCOUNT: this.dis,
        NET_PRICE: this.netprice,
      })
      .subscribe((result) => {
        console.log(result);
      });
  }
}
