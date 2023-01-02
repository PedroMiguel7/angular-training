import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss'],
})
export class UploadFileComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onChange(event: any) {
    const selectedFile = <FileList>event.srcElement.files;
    console.log(selectedFile);
  }
}
