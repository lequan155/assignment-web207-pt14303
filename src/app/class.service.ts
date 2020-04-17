import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
  
const classApiUrl = 'https://5e786505491e9700162de036.mockapi.io/schools';
@Injectable()
export class ClassService {
  constructor(private http: HttpClient) { }
  getListClasses(id): Observable<any>{
    let url = `${classApiUrl}/${id}/classes`
    return this.http.get<any>(url);
  }
  getClassById(schoolId,classId): Observable<any>{
    let url = `${classApiUrl}/${schoolId}/classes/${classId}`;
    return this.http.get<any>(url);
  }
  removeClassById(schoolId,classId): Observable<any>{
    let url = `${classApiUrl}/${schoolId}/classes/${classId}`;
    return this.http.delete<any>(url);
  }
  addNewClass(schoolId,obj): Observable<any>{
    let url = `${classApiUrl}/${schoolId}/classes`;
    return this.http.post<any>(url, obj)
  }
  editClass(schoolId,obj): Observable<any>{
    let url = `${classApiUrl}/${schoolId}/classes/${obj.id}`;
    return this.http.put<any>(url, obj)
  }
}