import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { ActivatedRoute,ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    // this.gender = route.snapshot.params['gender'];
    // alert(this.gender);
    // alert( route.snapshot.data);
   }
 
  
  @Input('user')
  set user(value: any) {
    if(value){
    this._user = value;
    this.value = value.name.first + value.name.last;
    this.imagePath = value.picture.large;
    this.nameSelected(value);
  }
}

  @Output() votingEmitter = new EventEmitter();

  title = "Hi, My name is";
  value ;
  imagePath; 
  isNameSelected = true;
  isEmailSelected = false;
  isPasswordSelected = false;
  isBirthDaySelected = false;
  isPhoneSelected = false;
  isAddressSelected = false;
  _user;

  ngOnInit() {
  

  }

  nameSelected(event){
  this.isNameSelected = true;
  this.isBirthDaySelected = false;
  this.isEmailSelected = false;
  this.isPasswordSelected = false;
  this.isAddressSelected = false;
  this.isPhoneSelected = false;
  this.value = this._user.name.first +" "+ this._user.name.last;
  this.title  =  "Hi, My name is";
  }
  birthDaySelected(event){
  this.isNameSelected = false;
  this.isBirthDaySelected = true;
  this.isEmailSelected = false;
  this.isPasswordSelected = false;
  this.isAddressSelected = false;
  this.isPhoneSelected = false;

  this.value = this._user.dob.date;
  this.title = "My BirthDay is"
  }
  emailSelected(event){
  this.isNameSelected = false;
  this.isBirthDaySelected = false;
  this.isEmailSelected = true;
  this.isPasswordSelected = false;
  this.isAddressSelected = false;
  this.isPhoneSelected = false;

  this.value = this._user.email;
  this.title = "My email is";

  }
  passwordSelected(event){
  this.isNameSelected = false;
  this.isBirthDaySelected = false;
  this.isEmailSelected = false;
  this.isPasswordSelected = true;
  this.isAddressSelected = false;
  this.isPhoneSelected = false;

  this.value = this._user.login.password;
  this.title = "My password is";

  }
  addressSelected(event){
  this.isNameSelected = false;
  this.isBirthDaySelected = false;
  this.isEmailSelected = false;
  this.isPasswordSelected = false;
  this.isAddressSelected = true;
  this.isPhoneSelected = false;

  this.value = this._user.location.street;
  this.title = "My address is";
  

  }
  phoneSelected(event){
  this.isNameSelected = false;
  this.isBirthDaySelected = false;
  this.isEmailSelected = false;
  this.isPasswordSelected = false;
  this.isAddressSelected = false;
  this.isPhoneSelected = true;

  this.value = this._user.phone;
  this.title = "My phone number is";
  }

 addVoteToUser(user){
   if(user.counter){
    user.counter++;
   }
   else{
    user.counter = 1;
   }
   this.votingEmitter.emit(user);
 }

  }
