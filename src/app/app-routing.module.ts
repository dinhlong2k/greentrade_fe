import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent } from './pages/home/home.component';
import { MstbankListComponent } from './pages/mstbank/mstbank-list/mstbank-list.component';
import { MstbankUpdateComponent } from './pages/mstbank/mstbank-update/mstbank-update.component';
const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'mstbank',component: MstbankListComponent},
  {path: 'mstupdate', component: MstbankUpdateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
