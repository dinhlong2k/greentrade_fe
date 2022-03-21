import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MstBank } from '../mstbank';
import { MstbankService } from '../mstbank.service';

@Component({
  selector: 'app-create-mstbank',
  templateUrl: './create-mstbank.component.html',
  styleUrls: ['./create-mstbank.component.css']
})
export class CreateMstbankComponent implements OnInit {

  mstbank: any = {} as MstBank;

  constructor(private mstbankService: MstbankService,
    private router: Router) {
    }

  ngOnInit(): void {
  }

  saveMstBank(){
    this.mstbankService.createMstBank(this.mstbank).subscribe( data =>{
      console.log(data);
    },
    error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/mstbank']);
  }

  onSubmit(){
    console.log(this.mstbank);
    this.goToEmployeeList();
    this.saveMstBank();
  }

}
