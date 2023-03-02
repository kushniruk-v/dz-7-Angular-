import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminblogComponent } from './pages/adminblog/adminblog.component';
import { BlogComponent } from './pages/blog/blog.component';


const routes: Routes = [
  {path:'', pathMatch: 'full', redirectTo: 'admin/blogs'},
  {path:'admin/blogs',component:AdminblogComponent},
  {path:'blog',component:BlogComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
