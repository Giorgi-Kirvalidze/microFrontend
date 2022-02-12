import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Page1Routes } from './page1-routing';
import { Page1Component } from './page1.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(Page1Routes)],
  declarations: [Page1Component],
})
export class Page1Module {}
