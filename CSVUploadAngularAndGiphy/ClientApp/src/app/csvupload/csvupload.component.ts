import { Component, OnInit } from '@angular/core';
import {HttpResponse} from '@angular/common/http';
import {FileService} from '../services/file.service';

@Component({
  selector: 'app-csvupload',
  templateUrl: './csvupload.component.html',
  styleUrls: ['./csvupload.component.css']
})
export class CsvuploadComponent implements OnInit {

  public msg = '';
  selectedFiles: FileList;
  currentFile: File;
  constructor(private fileService: FileService) { }

  ngOnInit() {
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  upload() {
    this.currentFile = this.selectedFiles.item(0);
    this.fileService.uploadFile(this.currentFile).subscribe(response => {
      this.msg = 'File Uploaded.';
    });

  }
}
