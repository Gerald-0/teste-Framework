import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostagensComponent} from './component/postagens/postagens.component';
import { AlbunsComponent} from './component/albuns/albuns.component';
import { ToDoComponent} from './component/to-do/to-do.component';

const routes: Routes = [
  {path: 'posts', component: PostagensComponent},
  {path: 'albums', component: AlbunsComponent},
  {path: 'todos', component: ToDoComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
