import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SearchGiphyComponent } from '../search-giphy/search-giphy.component';
import { SearchResultsComponent } from '../search-results/search-results.component';

const routes: Routes = [
  { path: 'home', component: SearchGiphyComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'results/:qq', component: SearchResultsComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
