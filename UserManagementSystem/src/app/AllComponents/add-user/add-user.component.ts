import { Component, OnInit } from '@angular/core';
import { UserService } from "../../AllServices/user-service.service";
import { FormsModule } from "@angular/forms";
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common'; 

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private myuser:UserService ) { }
  email = "";
  fist_name = "";
  last_name = "";
  pwd = "";
  username = "";
  message = "Created the new user successfully.";
  SelectedUser = {
    email: "",
    fist_name: "",
    last_name: "",
    pwd: "",
    username: ""
  };
  ngOnInit(): void {
  }
  AddUserAPI(){
    this.SelectedUser.email = this.email;
    this.SelectedUser.fist_name = this.fist_name;
    this.SelectedUser.last_name = this.last_name;
    this.SelectedUser.username = this.username;
    this.SelectedUser.pwd = this.pwd;
    var AllUsers = new Array();
    this.myuser.getAll().subscribe(
      d=>{
        AllUsers = d;
      }
    );
    let x = true;
    for(let u of AllUsers){
      if(u["email"].toString() == this.email.toString()){
        x = false;
      }
    }
    if(x){
      this.myuser.create(this.SelectedUser).subscribe(
        d=>{
          window.alert("Created the new user successfully.");
          //console.log(this.SelectedUser);
          //console.log(this.message);
        },
        e=>{
          window.alert("User with provided email or username is already exist.");
          //console.warn("Error while adding user");
        }
      );
    }
    else{
      window.alert("User with provided email or username is already exist.");
    }
  }
}
