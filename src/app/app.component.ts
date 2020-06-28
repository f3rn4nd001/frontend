import { Component } from '@angular/core';
import { UsuarioService } from "./Serves/usuario.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private usuarioService:UsuarioService ){}
}
