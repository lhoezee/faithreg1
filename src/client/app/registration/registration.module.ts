import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration.component';
import { RegistrationRoutingModule } from './registration-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NameListService } from '../shared/name-list/index';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [CommonModule, RegistrationRoutingModule, SharedModule],
  declarations: [RegistrationComponent],
  exports: [RegistrationComponent],
  providers: [NameListService]
})
export class RegistrationModule { }
