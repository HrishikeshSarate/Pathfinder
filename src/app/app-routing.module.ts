import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './MyComponents/about/about.component';
import { FloorComponent } from './MyComponents/floor/floor.component';
import { SearchComponent } from './MyComponents/search/search.component';

const routes: Routes = [
  {path:'',component: SearchComponent},
  {path:'floor',component: FloorComponent},
  {path:'about',component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
