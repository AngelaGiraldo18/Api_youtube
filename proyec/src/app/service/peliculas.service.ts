import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private apiKey = 'AIzaSyDUG1_4I9E4kUJidiUp-YlST62yrUbbp0s';
  private apiUrl = 'https://www.googleapis.com/youtube/v3/';

  constructor(private http: HttpClient) { }

  // Método para obtener videos de YouTube por término de búsqueda
  getVideosByKeyword(keyword: string, maxResults: number): Observable<any> {
    const url = `${this.apiUrl}search?key=${this.apiKey}&type=video&part=snippet&q=${keyword}&maxResults=${maxResults}`;
    return this.http.get(url);
  }
}

