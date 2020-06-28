import { Injectable } from '@angular/core';
import{ HttpClient,HttpInterceptor }from '@angular/common/http';
import{ producto }from '../Model/';
import {UsuarioComponent} from '../Components/usuario/usuario.component'
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor() { }
}
