import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { HeaderComponent } from './header/header.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { MyskillsComponent } from './myskills/myskills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FooterComponent } from './footer/footer.component';
import { MovingArrowComponent } from './moving-arrow/moving-arrow.component';
import { MovingArrowToRightComponent } from './moving-arrow-to-right/moving-arrow-to-right.component';
import { MovingArrow2Component } from './moving-arrow2/moving-arrow2.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { MainComponent } from './main/main.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    HeaderComponent,
    AboutmeComponent,
    MyskillsComponent,
    PortfolioComponent,
    ContactComponent,
    ContactFormComponent,
    FooterComponent,
    MovingArrowComponent,
    MovingArrowToRightComponent,
    MovingArrow2Component,
    LegalNoticeComponent,
    MainComponent,
    PrivacyPolicyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
