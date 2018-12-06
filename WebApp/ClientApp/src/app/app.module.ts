import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { Repository } from './models/repository.model';
import { ProductServices } from './product.services';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module.module';
import { CategoryServices } from './category.services';
import { CategoryComponent } from './category/category.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    //CategoryComponent,
    RouterModule.forRoot([
     // { path: '', component: HomeComponent, pathMatch: 'full' },
      {
        path: 'home', component: HomeComponent,
        /*children: [
          { path: 'category/:id', component: HomeComponent, },
        ]*/
      },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'products', component: HomeComponent, },
      { path: 'category/:id', component: CategoryComponent, },
     // { path: 'category', component: CategoryComponent }
    ])
  ],
  providers: [Repository, ProductServices, CategoryServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
