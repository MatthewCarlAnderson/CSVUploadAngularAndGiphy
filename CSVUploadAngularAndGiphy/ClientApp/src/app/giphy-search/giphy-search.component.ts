import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-giphy-search',
  templateUrl: './giphy-search.component.html',
  styleUrls: ['./giphy-search.component.css']
})
export class GiphySearchComponent {

  constructor(private http: HttpClient) { }

  public EMPTYIMAGE = '/assets/noimage.png';
  public imageURL = this.EMPTYIMAGE;
  public searchText = '';


  getGiphy()
  {
    const searchTerm = this.searchText.replace(' ', '+');
    this.http.get<any>(`https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=${searchTerm}}&limit=1`).subscribe(result  => {
      if (result.data.length === 0) {
        this.imageURL = this.EMPTYIMAGE;
      } else if (result.data[0].images.original.url) {
        this.imageURL = result.data[0].images.original.url;
      } else {
        this.imageURL = this.EMPTYIMAGE;
      }
      this.searchText = '';
    });
  }
}
