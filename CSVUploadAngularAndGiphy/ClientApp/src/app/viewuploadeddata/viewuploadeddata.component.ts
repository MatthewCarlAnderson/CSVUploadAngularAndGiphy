import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Person} from '../models/person';

@Component({
  selector: 'app-viewuploadeddata',
  templateUrl: './viewuploadeddata.component.html',
  styleUrls: ['./viewuploadeddata.component.css']
})
export class ViewuploadeddataComponent implements OnInit {

  public people: Person[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getUploadedData();
  }

  getUploadedData() {
    const url = 'https://localhost:44321/api/people';
     this.http.get<Person[]>(url).subscribe(result  => {
       this.people = result;
     });
  }

}
