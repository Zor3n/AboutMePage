import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatGridListModule} from '@angular/material/grid-list';
import { WelcomeSectionComponent } from './welcome-section/welcome-section.component';
import { MainSectionComponent } from './main-section/main-section.component';
import { SkillsSectionComponent } from './skills-section/skills-section.component';
import {MatCardModule} from '@angular/material/card';
import { FooterSectionComponent } from './footer-section/footer-section.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeSectionComponent,
    MainSectionComponent,
    SkillsSectionComponent,
    FooterSectionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatGridListModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
