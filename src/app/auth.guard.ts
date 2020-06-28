import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import {UsuarioService  } from "./Serves/usuario.service";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
constructor(  private usuarioService:UsuarioService){

}
  canActivate():boolean{
    if (this.usuarioService.loggedIn()){return true;}
    else{return false;}
  }
  
}
