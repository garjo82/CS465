import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Trip } from '../models/trip';

@Injectable({
  providedIn: 'root'
})

export class TripDataService {

  constructor(private http: HttpClient) { }
  url = 'http://localhost:3000/api/trips';

  public getTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.url);
  }

  public addTrip(formData: Trip): Observable<Trip> {
    return this.http.post<Trip>(this.url, formData);
  }

  public getTrip(tripCode: string): Observable<Trip> {
    return this.http.get<Trip>(this.url + tripCode);
  }

  public updateTrip(formData: Trip): Observable<Trip> {
    return this.http.put<Trip>(this.url, formData);
  }

}
