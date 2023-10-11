import { Component, OnInit } from '@angular/core';
import { dept } from 'src/app/Modal/Depts';
import { DataserviceService } from 'src/app/Share/dataservice.service';

@Component({
  selector: 'app-crud-app',
  templateUrl: './crud-app.component.html',
  styleUrls: ['./crud-app.component.css']
})
export class CrudAppComponent implements OnInit {
 public Deptno!:number;
 public Deptname!:string;
 public Deptcity!:string;
 public id!:number;
 public isdisabled:boolean=false;


  constructor(private dtserve:DataserviceService) { }
  public Deptarray:any[]=[]
  ngOnInit():void {
    this.getdata_click()
  }
  getdata_click(){
       this.dtserve.getdata().subscribe((res)=>{
        //  console.log(res);
         this.Deptarray=res;
       })
  }
  adddata_click(){
   let dobj:dept=new dept()
   dobj.Deptno=this.Deptno;
   dobj.Deptname=this.Deptname;
   dobj.Deptcity=this.Deptcity;
   dobj.id=this.id;

  this.dtserve.adddata(dobj).subscribe((res)=>{
    alert("Data Store Successfully..");
    console.log(res)
    this.emptydata()
    this.getdata_click();
  })
  
  }
  selectDept_click(did:number){
    this.dtserve.getdatabyid(did).subscribe((res)=>{
      let dataobj=res;
      this.Deptno=dataobj.Deptno;
      this.Deptname=dataobj.Deptname;
      this.Deptcity=dataobj.Deptcity;
      this.id=dataobj.id;
      this.isdisabled=true;
    })
  }
  updateDept_click(){
    
    let dobj:dept=new dept()
   dobj.Deptno=this.Deptno;
   dobj.Deptname=this.Deptname;
   dobj.Deptcity=this.Deptcity;
   dobj.id=this.id;
   this.dtserve.updatedata(dobj).subscribe((res)=>{
     alert("record updated suceesfully")
     this.getdata_click();
     this.emptydata();
   })

  }

  Remove_dataclick(did:any){
     this.dtserve.removedata(did).subscribe((res)=>{
       alert("data is deleted")
       this.getdata_click();
     })
     
     
  }
  emptydata() {
    this.Deptno=0;
    this.Deptname="",
    this.Deptcity="",
    this.id=0;
  }

}
