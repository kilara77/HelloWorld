import { Component,OnInit } from '@angular/core';
import {welcomeService} from './welcomeService';
import {HttpHeaders,HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public message:string;
  public displayindexpage = true;
  public displayVideoPage = false;
  public displaytrainingPage = false;
  public displayticketPage = false;
  constructor(private http:HttpClient,private _welcomeService: welcomeService, private router: Router ){}//
  ngOnInit()
  {
    this.getWelcomeDetails();
  }
  moveToVideo(page:string)
  {
    event.preventDefault();
    this.displayindexpage = page== "index" ? true : false;
    this.displayVideoPage = page== "video" ? true : false;

    this.displaytrainingPage = page== "training" ? true : false;
    this.displayticketPage = page== "ticket" ? true : false;
  }
  getWelcomeDetails()
  {
    this._welcomeService.getWelcomeDetails().subscribe(
      data => {
        if(data !="")
        {
          this.message = data;
        }

      });
  }
 


}
