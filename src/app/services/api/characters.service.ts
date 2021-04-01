import { map } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class CharactersService {
  PUBLIC_KEY = "7c0a0dac1162c66fecaeade1aa83fc7f";
  HASH = "3c42f4627c3c99f8607f009e59a45369";
  URL_API = `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`;

  constructor(private http: HttpClient) {}

  getAllCharacters(): Observable<any> {
    return this.http
      .get(this.URL_API)
      .pipe(map((data: any) => data.data.results));
  }

  getCharacterById(id: string): Observable<any> {
    const url = `http://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`;
    return this.http.get(url).pipe(map((data: any) => data.data.results));
  }
}
