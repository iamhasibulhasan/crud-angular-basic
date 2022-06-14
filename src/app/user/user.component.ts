import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


  person:any=[];

  constructor() { }

  ngOnInit(): void {
  }
  // validation check
  addNewUser=new FormGroup({
    name:new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z ]+$')]),
    address:new FormControl('',[Validators.required]),
    phone:new FormControl('',[Validators.required, Validators.maxLength(11), Validators.pattern('^[0-9]+$')]),
    email:new FormControl('',[Validators.required, Validators.email]),

    degree:new FormControl('',[Validators.pattern('[a-zA-Z ]+$')]),
    institute:new FormControl(''),
    grade:new FormControl(''),
    fromDate:new FormControl(''),
    toDate:new FormControl(''),
  })
// ======================================
  get name(){
    return this.addNewUser.get('name');
  }
  get address(){
    return this.addNewUser.get('address');
  }
  get phone(){
    return this.addNewUser.get('phone');
  }
  get email(){
    return this.addNewUser.get('email');
  }
  get degree(){
    return this.addNewUser.get('degree');
  }
  get institute(){
    return this.addNewUser.get('institute');
  }
  get grade(){
    return this.addNewUser.get('grade');
  }
  get fromDate(){
    return this.addNewUser.get('fromDate');
  }

// ======================================



  // Add new user function
  addUser(){
    // this.person.push(this.addNewUser.value.name)
    this.person.push({
      id:this.person.length,
      name:this.addNewUser.value.name,
      address:this.addNewUser.value.address,
      phone:this.addNewUser.value.phone,
      email:this.addNewUser.value.email,

      educationalQualifications:[{
      'degree':this.addNewUser.value.degree,
      'institute':this.addNewUser.value.institute,
      'grade':this.addNewUser.value.grade,
      'fromDate':this.addNewUser.value.fromDate,
      'toDate':this.addNewUser.value.toDate,
      }]
      
    });
    // console.log(this.person);
  }
  
  // view single user
  viewUser(id:number){
    console.log(id);
  }

  updateUserModalShow(){
    console.log(document.getElementById('updateUserModal'));
 
  }

}
