import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from '../components/header/header.component';
import { MenuComponent } from './../components/menu/menu.component';
import {
  NavbarModule,
  ModalModule,
  IconsModule,
  WavesModule,
  InputsModule,
  ButtonsModule,
  CardsModule,
  TableModule} from 'angular-bootstrap-md';
import { FooterComponent } from './../components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MenuComponent,
  ],
  imports: [
        CommonModule,
        IconsModule,
        NavbarModule,
        WavesModule,
        ButtonsModule,
        ModalModule,
        InputsModule,
        CardsModule,
        TableModule,
        FormsModule , ReactiveFormsModule
  ],
  exports: [
       IconsModule,
        NavbarModule,
        WavesModule,
        ButtonsModule,
        ModalModule,
        InputsModule,
        CardsModule,
        TableModule,
        FormsModule , ReactiveFormsModule,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
  ]
})
export class SharedModule { }
