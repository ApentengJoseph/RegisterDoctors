import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DoctorsList } from '../app/doctors.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  // URL for getting list of doctors.
  URL = 'https://jsonplaceholder.typicode.com/users';

  //URL for getting registered doctors from JSON server
  URL1 = 'http://localhost:3000/doctors';
  constructor(private http: HttpClient) {}

  // Method for getting list of doctors.
  getDoctorsList(): Observable<DoctorsList[]> {
    return this.http.get<DoctorsList[]>(this.URL);
  }

  // Method for getting registered doctors.
  getRegisteredDoctors(): Observable<any> {
    return this.http.get(this.URL1);
  }

  //  Method for registering doctors.
  registerDoc(doctors: string): Observable<any> {
    return this.http.post(this.URL1, doctors);
  }
}
