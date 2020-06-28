import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './Components/nav/nav.component';
import {IndexComponent} from './Components/index/index.component';
import { UsuarioComponent} from './Components/usuario/usuario.component';
import { AuthGuard } from "./auth.guard";
import { ChatComponent } from "./Components/chat/chat.component";
import { from } from 'rxjs';

const routes: Routes = [
  {path:'',redirectTo:'/index',pathMatch:'full'},{path:'index',component:IndexComponent}, 
  {path:'login',redirectTo:'/login',},{path:'login',component:UsuarioComponent}, 
  {path:'nav',redirectTo:'/nav',},{path:'nav',component:NavComponent}, 
  {path:'chat',redirectTo:'/chat',},{path:'chat',component:ChatComponent}, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
