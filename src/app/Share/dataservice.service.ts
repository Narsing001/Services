import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
 
  constructor(private http:HttpClient) { 
   }
   public url:string="http://localhost:3000/Depts";

   getdata(){
    return  this.http.get<any>(this.url)
   }
 
   adddata(dobj:any){
        return this.http.post<any>(this.url,dobj)
   }
 getdatabyid(did:any){
      return this.http.get<any>(`${this.url}/${did}`)
 }
 updatedata(dobj:any):Observable<any>{
       return this.http.put<any>(this.url+'/'+dobj.id,dobj)
 }

   removedata(did:any){
     return this.http.delete<any>(`${this.url}/${did}`)
   }
  
}
