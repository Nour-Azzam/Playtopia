import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { GamesListComponent } from './games-list/games-list.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'games-list', component: GamesListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
