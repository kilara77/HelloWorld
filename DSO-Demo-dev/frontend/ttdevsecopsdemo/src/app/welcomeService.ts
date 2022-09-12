import {HttpHeaders,HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class welcomeService{

constructor(private http:HttpClient){}

    getWelcomeDetails()
    {
        //return this.http.get("https://localhost:44334/api/Welcome/GetWelcomeDetails", {responseType: 'text'});
        return this.http.get("http://3.236.79.211:8080/api/Welcome/GetWelcomeDetails", {responseType: 'text'});
    }
   

}