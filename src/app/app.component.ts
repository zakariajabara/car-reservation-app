import { Component,OnInit } from '@angular/core';
import { Car } from './car';
import { CarService } from './car.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'car-reservation-app';
  public cars: Car[]=[];

  constructor(private carService: CarService) {
  }
  ngOnInit(): void {
    this.getCars();
  }

  public getCars(): void {
    console.log("get cars");
    this.carService.getCars().subscribe(
      (response: Car[]) => {
        this.cars= response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
