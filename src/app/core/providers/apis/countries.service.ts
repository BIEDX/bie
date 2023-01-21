import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class CountriesService {
    countries: any[];

    constructor(private http: HttpClient) { }

    allCountries(): Observable<any> {
        if (this.countries) {
            return of(this.countries);
        } else {
            return this.http.get('assets/data/Contries.json').pipe(
                tap((result) => {
                    this.countries = result;
                }),
            );
        }
    }
}