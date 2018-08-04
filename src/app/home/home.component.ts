import { Component,Inject } from "@angular/core";
import { UsersService } from "../services/users.service";
import { ActivatedRoute, Router,NavigationExtras } from '@angular/router';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';


@Component({
  selector: "home",
  templateUrl: "home.component.html",
  styleUrls: ["home.component.scss"]
})
export class HomeComponent {
    
usersData:any=[];
selectedUser:any;
public data:any=[];


constructor(private _userService : UsersService, private router: Router
            ,@Inject(LOCAL_STORAGE) private storage: WebStorageService){}

  ngOnInit(){
    this.getFromLocal('results');
    if(this.data.results){
      this.usersData = this.data.results;
    }
    else{
        this._userService.getUsers().subscribe(response =>{
        this.usersData = response['results'];
        this.saveInLocal('results',this.usersData);
        console.log(response);
        console.log(this.usersData);
    });
  }
   for(let i = 0 ; i<this.usersData.length;i++){  
     this.usersData[i].counter = 0;
   }
  }
  
  saveInLocal(key, val): void {
    console.log('recieved= key:' + key + 'value:' + val);
    this.storage.set(key, val);
    this.data[key]= this.storage.get(key);
   }

   getFromLocal(key): void {
    console.log('recieved= key:' + key);
    this.data[key]= this.storage.get(key);
    console.log(this.data);
   }



  setSelectedUser(user){
    for(let i = 0 ; i<this.usersData.length;i++){  
      this.usersData[i].selected = false;
    }
    user.selected = true;
    this.selectedUser = user;
  }

  votingEmitter(user){
    console.log(user);
    // for(let i = 0 ; i<this.usersData.length;i++){
    //  if( this.usersData[i].counter) {
    //   this.usersData[i].counter++;
    //  }
    //  else{
    //   this.usersData[i].counter=1;
    //  } 
    // }
  }
}