import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
  @ViewChild('deg', { static: true })deg!: ElementRef;
  @ViewChild('grd', { static: true })grd!: ElementRef;
  @ViewChild('inst', { static: true })inst!: ElementRef;
  @ViewChild('fdate', { static: true })fdate!: ElementRef;
  @ViewChild('tdate', { static: true })tdate!: ElementRef;

  person:any=[];
  singleUser:any=[];
  singleEducation:any=[];
  selected='selected';
  education:any=[];
  
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
      educationalQualifications:[this.education]
      
      
    });
    this.addNewUser.reset();
    console.log(this.person);
    this.education=[];
  }




  // multiple degree
  addDegree(){
    
    this.education.push({
      degree:this.addNewUser.value.degree,
      institute:this.addNewUser.value.institute,
      grade:this.addNewUser.value.grade,
      fromDate:this.addNewUser.value.fromDate,
      toDate:this.addNewUser.value.toDate,
      })
      this.educationData();
      let ok = document.getElementById('edu');
      this.deg.nativeElement.value='';
      this.grd.nativeElement.value='';
      this.inst.nativeElement.value='';
      this.fdate.nativeElement.value='';
      this.tdate.nativeElement.value='';
      // console.log(this.education);
  }
  
  // get single user
  singleData(id:number){
    this.singleUser = this.person.filter((item: { id: number; })=>item.id === id)[0];
    this.singleEducation = this.person.filter((item: { id: number; })=>item.id === id)[0].educationalQualifications;
    console.log(this.singleEducation);
  }

  educationData(){
    console.log(this.education);
  }
  // view single user
  viewUser(id:number){
    this.singleData(id);
  }
  // user delete
  userDelete(id:number){
    this.person = this.person.filter((item: { id: number; })=>item.id !== id);
  }

  // edit user function
  updateUserModalShow(id:number){
    let data = this.singleData(id);
  }

  // update user
  userUpdate(data:any,id:number){
    // this.singleData(id);
    this.singleUser.name = data.updateName || this.singleUser.name;
    this.singleUser.email = data.updateEmail || this.singleUser.email;
    this.singleUser.phone = data.updatePhone || this.singleUser.phone;
    this.singleUser.address = data.updateAddress || this.singleUser.address;
    this.singleEducation.degree = data.updateDegree || this.singleEducation.degree;
    this.singleEducation.grade = data.updateGrade || this.singleEducation.grade;
    this.singleEducation.institute = data.updateInstitute || this.singleEducation.institute;
    this.singleEducation.fromDate = data.updateFromDate || this.singleEducation.fromDate;
    this.singleEducation.toDate = data.updateToDate || this.singleEducation.toDate;
    
    // console.log(this.singleEducation.fromDate);
  }


}
