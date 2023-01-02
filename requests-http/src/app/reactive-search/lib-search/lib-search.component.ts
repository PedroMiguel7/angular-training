import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { tap, map } from 'rxjs';

@Component({
  selector: 'app-lib-search',
  templateUrl: './lib-search.component.html',
  styleUrls: ['./lib-search.component.scss'],
})
export class LibSearchComponent implements OnInit {
  queryField = new FormControl();
  readonly SEARCH_URL = 'https://api.cdnjs.com/libraries';
  results$: any;
  total: number = 0;
  readonly FIELDS = 'name,description,version,homepage';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  onSearch() {
    let value = this.queryField.value;
    if (value && (value = value.trim()) !== '') {
      const params_ = { serach: value, fields: this.FIELDS };

      let params = new HttpParams();
      params = params.set('serach', value);
      params = params.set('fields', this.FIELDS);

      this.results$ = this.http
        .get(this.SEARCH_URL, { params })
        .pipe(
          tap((res: any) => {
            (this.total = res.total), console.log(res);
          }),
          map((res: any) => res.results)
        )
        .subscribe();
    }
  }
}
