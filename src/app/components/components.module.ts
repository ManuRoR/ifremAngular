import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AngularCommonsModule } from '../layouts/angular-commons.module';



@NgModule({
  declarations: [
    FooterComponent,
    MenuComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    AngularCommonsModule
  ],
  exports: [
    FooterComponent,
    MenuComponent,
    ToolbarComponent
  ]
})

export class ComponentsModule { }
