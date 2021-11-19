import { Component, OnInit } from '@angular/core';
import {NewsapiserviceService} from '../service/newsapiservice.service'

@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.css']
})
export class TechnewsComponent implements OnInit {

  constructor(private _service:NewsapiserviceService) { }

  //display data
  technewsDisplay:any;

  ngOnInit(): void {
    this._service.technews().subscribe((result)=>
    {
      console.log(result);
      this.technewsDisplay= result.articles;
    })

  }

}
