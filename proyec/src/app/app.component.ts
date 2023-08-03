import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { PeliculasService } from './service/peliculas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  videos: any[] = [];
  searchTerm: string = '';
  isLoggedIn: boolean = false;
  username: string = '';
  password: string = '';
  newPassword: string = '';
  newUsername: string = '';
  showLoginForm: boolean = false;
  showRegisterForm: boolean = false;


  constructor(private peliculasService: PeliculasService, private sanitizer: DomSanitizer) {}

  searchVideos() {
    const keyword = this.searchTerm.trim();
    const maxResults =  10;

    this.peliculasService.getVideosByKeyword(keyword, maxResults)
      .subscribe((response: any) => {
        this.videos = response.items;
      });
  }
  
  showLogin() {
    this.showLoginForm = true;
    this.showRegisterForm = false;
  }

  showRegister() {
    this.showLoginForm = false;
    this.showRegisterForm = true;
  }

  getVideoEmbedUrl(videoId: string): SafeResourceUrl {
    const url = `https://www.youtube.com/embed/${videoId}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  // Agregar métodos para el inicio de sesión, registro y cierre de sesión
  login(username: string, password: string) {
    // Lógica para el inicio de sesión
    this.isLoggedIn = true;
    this.username = username;
  }

  register(username: string, password: string) {
    // Lógica para el registro de usuarios
    this.isLoggedIn = true;
    this.username = username;
    this.newPassword =password;
  }

  logout() {
    // Lógica para cerrar sesión
    this.isLoggedIn = false;
    this.username = '';
  }
}
