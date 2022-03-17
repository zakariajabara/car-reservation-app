import { Injectable } from '@angular/core';
import { Car } from './car';
import {HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CARS } from './dummy-cars';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private apiServerUrl= environment.apiBaseUrl;

  constructor(private http:HttpClient) { }

  public getCar(id: number): Observable<Car> {
    const car = CARS.find(c => c.id= id)!;
    return of(car);
  }
  
  public getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(`${this.apiServerUrl}/car`)
  }
  

  getDummyCars(): Observable<Car[]> {
    const cars= of(CARS);
    return cars;
  }

  public addCar(car: Car): Observable<Car> {
    return this.http.post<Car>(`${this.apiServerUrl}/car`, car);
  }

  public updateCar(car: Car): Observable<Car> {
    return this.http.put<Car>(`${this.apiServerUrl}/car`, car);
  }

  public deleteCar(carId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/car/${carId}`);
  }
}
