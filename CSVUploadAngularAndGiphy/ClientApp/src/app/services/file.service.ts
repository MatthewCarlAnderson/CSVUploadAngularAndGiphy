import {Injectable} from '@angular/core';
import {HttpClient, HttpRequest, HttpEvent} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FileService {

  constructor(private http: HttpClient) {}

  uploadFile(file: File): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();
    formdata.append('files', file);
    const req = new HttpRequest('POST', 'https://localhost:44321/api/csvUpload/UploadFiles', formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }

}
