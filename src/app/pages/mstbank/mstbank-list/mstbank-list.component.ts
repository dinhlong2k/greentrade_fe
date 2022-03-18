import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MstBank } from '../mstbank';
import { MstbankService } from '../mstbank.service';

@Component({
  selector: 'app-mstbank-list',
  templateUrl: './mstbank-list.component.html',
  styleUrls: ['./mstbank-list.component.css']
})
export class MstbankListComponent implements OnInit, AfterViewInit {
  query = {};
  mstbanks: MstBank[] = [];
  title ="Ngân hàng";

  constructor(private mstbankService: MstbankService,
    private router: Router) {
    }
  ngAfterViewInit(): void {
    this.getListMstBank();
  }

  ngOnInit(): void {
    this.getListMstBank();
  }

  private getListMstBank(){
    this.mstbankService.getMstBankList(this.query).subscribe(data => {
      this.mstbanks = data.data;
      console.log(this.mstbanks);
    });
  }

  getMstBank(bankCode: string){
    this.router.navigate(['get-mstbank', bankCode]);
  }

  updateMstBank(bankCode: string){
    this.router.navigate(['update-mstbank', bankCode]);
  }

  deleteMstbank(mstbank: MstBank){
    this.mstbankService.deleteMstBank(mstbank).subscribe( data => {
      console.log(data);
      this.getListMstBank();
    })
  }
}
