import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MstBank } from '../mstbank';
import { MstbankService } from '../mstbank.service';
@Component({
  selector: 'app-mstbank-update',
  templateUrl: './mstbank-update.component.html',
  styleUrls: ['./mstbank-update.component.css']
})
export class MstbankUpdateComponent implements OnInit , AfterViewInit {

  mstbank: MstBank = {} as MstBank;

  constructor(private mstbankService: MstbankService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.mstbankService.getMstBankByBankCode(this.mstbank).subscribe(data => {
      this.mstbank = data.data;
      console.log(this.mstbank);
    }, error => console.log(error));
  }

  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

  onSubmit(){
    this.mstbankService.updateMstBank(this.mstbank).subscribe( data =>{
      this.goToEmployeeList();
    }
    , error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/mstbank']);
  }



}
