// COMPONENTS
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { FooterComponent } from './components/footer/footer.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { ProductComponent } from './components/product-page-module/product.component';
import { CartControlComponent } from './components/product-page-module/cart-control/cart-control.component';
import {
  ProductRecommendationsComponent
} from './components/product-page-module/product-recommendations/product-recommendations.component';
import { ProductUsersCommentsComponent } from './components/product-page-module/product-users-comments/product-users-comments.component';

// MODULES
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

// MATERIAL
import {
  MatButtonModule,
  MatFormFieldModule,
  MatToolbarModule,
  MatInputModule,
  MatSidenavModule,
  MatDividerModule,
  MatCheckboxModule,
  MatListModule,
  MatCardModule,
  MatExpansionModule
} from '@angular/material';

// DIRECTIVES

// ROUTES
const routes: Routes = [
  { path: '', component: WelcomeComponent},
  { path: 'product/id', component: ProductComponent},
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent, // HOME
    WelcomeComponent, // HOMEPAGE
    SideMenuComponent, // SIDE MENU
    FooterComponent, // FOOTER
    ProductComponent, // PRODUCT PAGE
    CartControlComponent,
    ProductRecommendationsComponent,
    ProductUsersCommentsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule, // MATERIAL
    MatFormFieldModule,
    MatToolbarModule,
    MatInputModule,
    MatSidenavModule,
    MatDividerModule,
    MatCheckboxModule,
    MatListModule,
    MatCardModule,
    MatExpansionModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
