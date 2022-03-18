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

  constructor(private mstbankService: MstbankService,
    private router: Router) {
    }

  ngOnInit(): void {
  }

  // saveEmployee(){
  //   this.mstbankService.createEmployee(this.employee).subscribe( data =>{
  //     console.log(data);
  //     this.goToEmployeeList();
  //   },
  //   error => console.log(error));
  // }

  // goToEmployeeList(){
  //   this.router.navigate(['/employees']);
  // }

  // onSubmit(){
  //   console.log(this.employee);
  //   this.saveEmployee();
  // }

}
