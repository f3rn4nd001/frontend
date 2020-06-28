import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../Serves/usuario.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor( public UsuarioService:UsuarioService,private toastr:ToastrService) {

   }

  ngOnInit(): void {
  }
  contactForm(form?: NgForm) {  }

}
