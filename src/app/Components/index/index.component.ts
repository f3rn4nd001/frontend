import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../Serves/usuario.service';
import { NgForm } from '@angular/forms';
import { Usuario } from '../../Model/usuario';
import { ToastrService } from 'ngx-toastr';
import { from } from 'rxjs';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  providers:[UsuarioService]
})
export class IndexComponent implements OnInit {

  constructor(public UsuarioService:UsuarioService,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.usuaioGet();
  }
  usuaioGet(){
    this.UsuarioService.getUsuario().subscribe(res=>{
      this.UsuarioService.usuarios=res as Usuario[];
      console.log(res);
    });
  }

  limpiar(form?: NgForm){
    if(form){form.reset();this.UsuarioService.selecteUsuario=new Usuario();}
    this.usuaioGet();
  }
  
  addUsuario(form: NgForm)
    {
      console.log(form.value.sexo)
      if(form.value._id){
        this.UsuarioService.putUsuario(form.value).subscribe(res=>{console.log(res);})
        if(!form.value.nombre){this.toastr.error('no puede estar vacio el campo nombre',"Nombre");} 
        if(!form.value.apellido){this.toastr.error('no puede estar vacio el campo apellido',"Apellido");} 
        if(!form.value.password || form.value.password.length<4 ){this.toastr.error('La contraseña tiene que ser minimo a 4 digitos',"Contraseña" );} 
        if(!form.value.telefono){this.toastr.error('no puede estar vacio el campo telefono',"Telefono");}
        if(!form.value.email){this.toastr.error('no puede estar vacio el campo email',"Email");}
        if(!form.value.role){this.toastr.error('no puede estar vacio el campo role',"Role");}
        if( form.value.nombre && form.value.apellido && form.value.password.length>3  && form.value.telefono && form.value.email && form.value.role
          ){
            if(form){form.reset();this.UsuarioService.selecteUsuario=new Usuario();}
            this.toastr.success('Se guardaron los datos','Usuario');      
        }
      }
      else{
        this.UsuarioService.postUsuario(form.value).subscribe(res=>{console.log(res);});
        if(!form.value.nombre){this.toastr.error('no puede estar vacio el campo nombre',"Nombre");} 
        if(!form.value.apellido){this.toastr.error('no puede estar vacio el campo apellido',"Apellido");} 
        if(!form.value.password || form.value.password.length<4 ){this.toastr.error('La contraseña tiene que ser minimo a 4 digitos',"Contraseña" );} 
        if(!form.value.telefono){this.toastr.error('no puede estar vacio el campo telefono',"Telefono");}
        if(!form.value.email){this.toastr.error('no puede estar vacio el campo email',"Email");}
        if( form.value.nombre && form.value.apellido && form.value.password.length>3 && form.value.telefono && form.value.email
          ){
          if(form){form.reset();this.UsuarioService.selecteUsuario=new Usuario();}
          this.toastr.success('Se guardaron los datos','Usuario');
          
          }
      }
      this.usuaioGet();
    }
  
    editUsuario(usuario:Usuario)
    {
      this.UsuarioService.selecteUsuario=usuario;
    }

    eliminarUsuario(_id: string){
      this.UsuarioService.deleteUsuario(_id).subscribe(res=>{console.log(res);
      });
      this.usuaioGet();
    }
  

}
