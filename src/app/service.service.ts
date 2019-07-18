import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private _http: HttpClient) { }
  _url ='http://localhost:3000/userData';
  _url1 ='http://localhost:3000/questionPaper';
  _url2 ='http://localhost:3000/savedQuestionPaper';


 register(userData){
  return this._http.post<any>(this._url,userData);
 }

 questionData(questionPaper){
  return this._http.post<any>(this._url1,questionPaper);
 }

 questionPaper(){
  return this._http.get<any>(this._url1);
 }

 savedQuestionPaper(userData1){
  return this._http.post<any>(this._url2,userData1);
 }
}
