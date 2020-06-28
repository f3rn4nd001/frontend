import { Injectable } from '@angular/core';
import{ HttpClient,HttpInterceptor }from '@angular/common/http';
import{ Usuario }from '../Model/usuario';
import {UsuarioComponent} from '../Components/usuario/usuario.component'
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService implements HttpInterceptor{
  readonly URL_API='http://localhost:3000/api/Usuarios';

  selecteUsuario:Usuario;
  usuarios:Usuario[];
  
  
  constructor( private http:HttpClient ) {
    this.selecteUsuario=new Usuario();
   }

   intercept(req,next){
    const tokenReq= req.clone({
    setHeaders:{
      token: 'Bearer '+this.getToken()
      }
    })
    return next.handle(tokenReq);
  }

    getUsuario(){
      return this.http.get(this.URL_API);
    }
    postUsuario(Usuairo:Usuario){
      return this.http.post(this.URL_API,Usuairo);
    }
    postUsuarioLogin(Usuairo:Usuario ){    
      return this.http.post<any>(this.URL_API+'/login',Usuairo);
      
      
    }
    putUsuario(usuarios:Usuario){
     
      return this.http.put(this.URL_API+'/${usuarios._id}',usuarios);
    }
    deleteUsuario(_id:string){
      
      return this.http.delete(this.URL_API+'/'+_id);
    }
    loggedIn(){
      return !! localStorage.getItem('token');
    }
    getToken(){
      return localStorage.getItem('token');
    }
    logout(){
      localStorage.removeItem('token');
    }
}
