import { Component, OnInit } from '@angular/core';
import {UsuarioService} from '../../Serves/usuario.service';
import { NgForm } from '@angular/forms';
import {Usuario} from '../../Model/usuario';
import { ToastrService } from 'ngx-toastr';
  import { from } from 'rxjs';
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
  providers:[UsuarioService]
})
export class UsuarioComponent implements OnInit {

  constructor( public UsuarioService:UsuarioService,private toastr: ToastrService ) { }

  ngOnInit(): void {
    this.getusuarios();
  }
  getusuarios(){
    this.UsuarioService.getUsuario().subscribe(res=>{
      this.UsuarioService.usuarios=res as Usuario[];
      console.log(res);
    });
  }
  
  addUser(form: NgForm){
 
    this.UsuarioService.postUsuario(form.value).subscribe(res=>{console.log(res);});
    if(!form.value.nombre){this.toastr.error('no puede estar vacio el campo nombre',"Nombre");} 
    if(!form.value.apellido){this.toastr.error('no puede estar vacio el campo apellido',"Apellido");} 
    if(!form.value.password || form.value.password.length<4 ){this.toastr.error('La contraseña tiene que ser minimo a 4 digitos',"Contraseña" );} 
    if(!form.value.password_conf || form.value.password_conf.length<4 ){this.toastr.error('La contraseña tiene que ser minimo a 4 digitos',"Contrasea de verificacion");} 
    if(!form.value.telefono){this.toastr.error('no puede estar vacio el campo telefono',"Telefono");}
    if(!form.value.email){this.toastr.error('no puede estar vacio el campo email',"Email");}
    if(form.value.password != form.value.password_conf){this.toastr.error('La contraseña no coincide',"Contraseña");}  
    if( form.value.nombre && form.value.apellido && form.value.password.length>3 && form.value.password_conf.length>3 && form.value.telefono && form.value.email && form.value.password === form.value.password_conf
      ){
        this.toastr.success('Se guardaron los datos','Usuario');
        form.reset();this.UsuarioService.selecteUsuario=new Usuario();
        this.getusuarios();
    }
  } 

  loginUser(form:NgForm){
   
    this.UsuarioService.postUsuarioLogin(form.value).subscribe(res=>{localStorage.setItem('token',res.token);console.log(res);},err=>console.log(err));
    if(!form.value.email){this.toastr.error('no puede estar vacio el campo email',"Email");}
    if(!form.value.password || form.value.password.length<4 ){this.toastr.error('La contraseña tiene que ser minimo a 4 digitos',"Contraseña" );} 
    if( form.value.email && form.value.password.length>3){
    this.toastr.success('Verificando','Usuario');
    form.reset();this.UsuarioService.selecteUsuario=new Usuario();}
  }

}
