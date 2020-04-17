import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const schoolApiUrl = 'https://5e786505491e9700162de036.mockapi.io/schools';
@Injectable()
export class SchoolService {

  constructor(private http: HttpClient) { }

  getListSchools(): Observable<any>{
    return this.http.get<any>(schoolApiUrl);
  }
  getSchoolById(schoolId): Observable<any>{
    let url = `${schoolApiUrl}/${schoolId}`;
    return this.http.get<any>(url);
  }
  removeSchoolById(schoollId): Observable<any>{
    let url = `${schoolApiUrl}/${schoollId}`;
    return this.http.delete<any>(url);
  }
  addNewSchool(obj): Observable<any>{
    return this.http.post<any>(schoolApiUrl, obj)
  }
  editSchool(obj): Observable<any>{
    let url = `${schoolApiUrl}/${obj.id}`;
    return this.http.put<any>(url, obj)
  }
}