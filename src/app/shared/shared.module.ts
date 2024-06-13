import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
  SearchBoxComponent,
} from './components/search-box/search-box.component';
import { SideBarComponent } from './components/sideBar/sideBar.component';
import { AboutPageComponent } from './pages/aboutPage/aboutPage.component';
import {
  ContactPageComponent,
} from './pages/contactPage/contactPage.component';
import { HomePageComponent } from './pages/homePage/homePage.component';

@NgModule({
  declarations: [
    HomePageComponent,
    AboutPageComponent,
    ContactPageComponent,
    SideBarComponent,
    SearchBoxComponent

  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HomePageComponent,
    AboutPageComponent,
    SideBarComponent,
    ContactPageComponent,
    SearchBoxComponent
  ]
})
export class SharedModule { }
