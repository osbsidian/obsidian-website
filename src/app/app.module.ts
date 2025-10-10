import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index/index.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { TermsOfServiceComponent } from './pages/terms-of-service/terms-of-service.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    PrivacyPolicyComponent,
    TermsOfServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
