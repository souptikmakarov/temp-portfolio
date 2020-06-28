import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PoiHomepageComponent } from './poi-homepage/poi-homepage.component';
import { BlogPostComponent } from './blog-post/blog-post.component';


const routes: Routes = [
  { path : 'homepage', component: PoiHomepageComponent },
  { path : 'blog-post', component: BlogPostComponent },
  { path : '', redirectTo:'homepage', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
