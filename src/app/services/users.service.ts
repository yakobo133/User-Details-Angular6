import { Injectable} from '@angular/core';
import { HttpClient} from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private  httpClient:  HttpClient) { }

  getUsers(){
    return  this.httpClient.get(`https://randomuser.me/api/?results=10`);
  }
}
