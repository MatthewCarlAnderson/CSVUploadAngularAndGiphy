import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-giphy-search',
  templateUrl: './giphy-search.component.html',
  styleUrls: ['./giphy-search.component.css']
})
export class GiphySearchComponent implements OnInit {

  constructor(private http: HttpClient) { }

  public imageURL = '/assets/noimage.png';
  public searchText = '';

  ngOnInit() {
    // this.getGiphy('silly cat');
  }


  getGiphy()
  {
    const searchTerm = this.searchText.replace(' ', '+');
    this.http.get<any>(`https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=${searchTerm}}&limit=1`).subscribe(result  => {
      if (result.data.length === 0) {
        this.imageURL = '/assets/noimage.png';
      } else if (result.data[0].images.original.url) {
        this.imageURL = result.data[0].images.original.url;
      } else {
        this.imageURL = '/assets/noimage.png';
      }
      this.searchText = '';
    });
  }

  // The URL for searching Giphy is:
  //   https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=funny+cat
  // The ‘funny+cat’ at the end is the search term.


  onClick() {

  }
}
