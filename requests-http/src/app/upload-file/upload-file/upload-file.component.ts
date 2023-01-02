import { Component, OnInit } from '@angular/core';
import { UploadFileService } from './../upload-file.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss'],
})
export class UploadFileComponent implements OnInit {
  files!: Set<any>;

  constructor(private service: UploadFileService) {}

  ngOnInit(): void {}

  onChange(event: any) {
    const selectedFile = <FileList>event.srcElement.files;
    this.files = new Set();
    this.files.add(selectedFile);
  }

  onUpload() {
    if (this.files && this.files.size > 0) {
      this.service
        .upload(this.files, 'http://localhost:8000/upload')
        .subscribe((response: any) => console.log(response));
    }
  }
}
