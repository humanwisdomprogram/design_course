import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WebpageTermsConditionsPageRoutingModule } from './webpage-terms-conditions-routing.module';

import { WebpageTermsConditionsPage } from './webpage-terms-conditions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WebpageTermsConditionsPageRoutingModule
  ],
  declarations: [WebpageTermsConditionsPage]
})
export class WebpageTermsConditionsPageModule {}
