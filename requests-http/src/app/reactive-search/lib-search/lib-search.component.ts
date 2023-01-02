import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import {
  tap,
  map,
  filter,
  distinctUntilChanged,
  debounceTime,
  switchMap,
} from 'rxjs';

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

  ngOnInit(): void {
    this.results$ = this.queryField.valueChanges.pipe(
      map((value: any) => value.trim()),
      filter((value: any) => value.length > 1),
      debounceTime(200),
      distinctUntilChanged(),
      switchMap((value: any) =>
        this.http.get(this.SEARCH_URL, {
          params: { search: value, fields: this.FIELDS },
        })
      ),
      tap((res: any) => (this.total = res.total)),
      map((res: any) => {
        return res.results;
      })
    );
  }

  onSearch() {
    let value = this.queryField.value;
    if (value && (value = value.trim()) !== '') {
      const params_ = { serach: value, fields: this.FIELDS };

      let params = new HttpParams();
      params = params.set('serach', value);
      params = params.set('fields', this.FIELDS);

      this.results$ = this.queryField.valueChanges.pipe(
        map((value: any) => value.trim()),
        filter((value: any) => value.length > 1),
        debounceTime(200),
        distinctUntilChanged(),
        switchMap((value: any) =>
          this.http.get(this.SEARCH_URL, {
            params: { search: value, fields: this.FIELDS },
          })
        ),
        tap((res: any) => (this.total = res.total)),
        map((res: any) => {
          return res.results;
        })
      );
    }
  }
}
