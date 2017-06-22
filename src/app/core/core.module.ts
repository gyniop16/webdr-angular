import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

//import { NavComponent } from './nav/nav.component';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { ControlSidebarComponent } from './control-sidebar/control-sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainSideComponent } from './main-side/main-side.component';
import { ContentComponent } from './content/content.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  	ControlSidebarComponent, 
  	FooterComponent, 
  	MainHeaderComponent, 
  	MainSideComponent, 
  	ContentComponent
  ]
})
export class CoreModule { 

	constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
	    throwIfAlreadyLoaded(parentModule, 'CoreModule');
	  }

}
