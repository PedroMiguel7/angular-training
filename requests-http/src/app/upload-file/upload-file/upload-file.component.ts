import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UploadFileService } from './../upload-file.service';
import { filterResponse, uploadProgress } from './../../shared/rxjs.operators';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss'],
})
export class UploadFileComponent implements OnInit {
  files!: Set<any>;
  progress: number = 0;

  constructor(private service: UploadFileService) {}

  ngOnInit(): void {}

  onChange(event: any) {
    const selectedFile = <FileList>event.srcElement.files;
    this.files = new Set();
    this.files.add(selectedFile);

    this.progress = 0;
  }

  onUpload() {
    if (this.files && this.files.size > 0) {
      this.service
        .upload(this.files, 'http://localhost:8000/upload')
        .pipe(
          uploadProgress((progress: any) => (this.progress = progress)),
          filterResponse()
        )
        .subscribe();
      // .subscribe((response: HttpEvent<Object>) => {
      //   if (response.type === HttpEventType.Response) {
      //   } else if (response.type === HttpEventType.UploadProgress) {
      //     const percentDone = Math.round(
      //       (response.loaded * 100) / (response.total ? response.total : 0)
      //     );
      //     this.progress = percentDone;
      //   }
      // });
    }
  }
}
