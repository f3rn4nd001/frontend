import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HttpClient,HTTP_INTERCEPTORS}from'@angular/common/http';

import {FormsModule} from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { ToastrModule} from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './Components/usuario/usuario.component';
import { NavComponent } from './Components/nav/nav.component';
import { IndexComponent } from './Components/index/index.component';
import { AuthGuard } from "./auth.guard";
import { UsuarioService } from "./Serves/usuario.service";
import { ChatComponent } from './Components/chat/chat.component';
@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    NavComponent,
    IndexComponent,
    ChatComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut:1500,
      progressBar:true,
      progressAnimation:'increasing',preventDuplicates: false
    })
  ],
  providers: [HttpClientModule,
    AuthGuard,{
      provide: HTTP_INTERCEPTORS,
      useClass:UsuarioService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
