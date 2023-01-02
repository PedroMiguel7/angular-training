import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UploadFileService {
  constructor(private http: HttpClient, private service: UploadFileService) {}

  upload(files: Set<any>, url: string) {
    const formData = new FormData();
    files.forEach((file) => formData.append('file', file));

    // const request = new HttpRequest('POST', url, formData);
    // return this.http.request(request);

    return this.http.post(url, formData, {
      observe: 'events',
      reportProgress: true,
    });
  }

  download(url: string) {
    return this.http.get(url, { responseType: 'blob' as 'json' });
  }

  handleFiel(res: any, fileName: string) {
    this.service
      .download('http://localhost:8000/downloadExcel')
      .subscribe((response: any) => {
        const file = new Blob([response], { type: response.type });

        const blob = window.URL.createObjectURL(file);

        const link = document.createElement('a');
        link.href = blob;
        link.download = fileName;

        // link.click();
        link.dispatchEvent(
          new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window,
          })
        );

        setTimeout(() => {
          window.URL.revokeObjectURL(blob);
          link.remove();
        }, 100);
      });
  }
}
