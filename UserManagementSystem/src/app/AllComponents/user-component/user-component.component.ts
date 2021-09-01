import { Component, OnInit } from '@angular/core';
import { UserService } from "../../AllServices/user-service.service";
import { FormsModule } from "@angular/forms";
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common'; 


@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})
export class UserComponentComponent implements OnInit {
  SelectedUser = {
    email: "test@gmail.com",
    fist_name: "test",
    last_name: "user",
    pwd: "1234",
    username: "test user"
  };

  ArrayOfAllUsers = new Array();
  EditMode = false;
  refresh(){
    this.myuser.getAll().subscribe(
      data=>{
        //console.log(data);
        this.ArrayOfAllUsers = data;
      },
      error =>{
        //console.log("Invalid");
      }
    );
  }


  constructor(private myuser:UserService) {
    this.refresh();
    this.myuser.getAll().subscribe(
      data=>{
        //console.log(data);
        this.ArrayOfAllUsers = data;
      },
      error =>{
        //console.log("Invalid");
      }
    );
  }

  edituser(mail:string){
    console.warn("HI" + mail);
    this.EditMode = true;
    this.refresh();
    <HTMLInputElement><unknown>document.getElementById('editusers')?.scrollIntoView();
    for(let u of this.ArrayOfAllUsers){
      if(u["email"] == mail){
        this.SelectedUser.email = u.email;
        this.SelectedUser.fist_name = u.fist_name;
        this.SelectedUser.last_name = u.last_name;
        this.SelectedUser.pwd = u.pwd;
        this.SelectedUser.username = u.username;
      }
    }
  }
  editAPI(mail:string){
    let details = new Array();
    this.myuser.update(mail,this.SelectedUser).subscribe(
      d=>{

        //console.log("Updated");
      },
      e=>{
        //console.warn("Not Updated");
      }
    );
  }
  cancel(){
    this.EditMode = false;
  }
  
  DeleteUserAPI(mail:string){
    this.myuser.delete(mail).subscribe(
      d=>{
        window.alert("User deleted successfully.");
        //console.log("Deleted");
      },
      e=>{
        window.alert("Unable to delete the user or user may not exist.");
      }
    );
  }
  ngOnInit(): void {
  }

}