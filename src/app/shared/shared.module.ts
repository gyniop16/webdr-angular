import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { ControlSidebarComponent } from './control-sidebar/control-sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainSideComponent } from './main-side/main-side.component';
import { ContentComponent } from './content/content.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule    
  ],
  declarations: [
  	ControlSidebarComponent, 
  	FooterComponent, 
  	MainHeaderComponent, 
  	MainSideComponent, 
  	ContentComponent
  ],
  exports: [
  	CommonModule,
  	FormsModule,
  	ContentComponent
  ]
})
export class SharedModule { }
