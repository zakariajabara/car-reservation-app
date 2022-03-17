import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CarsComponent } from './cars/cars.component';
import { CustomersComponent } from './customers/customers.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { ReservationDetailComponent } from './reservation-detail/reservation-detail.component';

const routes: Routes = [
  { path: '', redirectTo:'/cars', pathMatch:'full'},
  { path: 'cars', component: CarsComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'reservations', component: ReservationsComponent },
  { path: 'car/detail/:id', component: CarDetailComponent },
  { path: 'customer/detail/:id', component: CustomerDetailComponent },
  { path: 'reservierung/detail/:id', component: CustomerDetailComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
