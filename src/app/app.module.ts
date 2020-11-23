import { ProductDetailComponent } from './views/product-detail/product-detail.component';
import { AppChartPolarComponent } from './components/app-chart-polar/app-chart-polar.component';
import { AppHeaderPageComponent } from './components/app-header-page/app-header-page.component';
import { StatsComponent } from './views/stats/stats.component';
import { AppPaginatorComponent } from './components/app-paginator/app-paginator.component';
import { AppProductReviewsComponent } from './components/app-product-reviews/app-product-reviews.component';
import { ProductAddComponent } from './views/product-add/product-add.component';
import { ProductsComponent } from './views/products/products.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { LoginComponent } from './pages/login/login.component';
import { HeaderComponent } from './pages/main/header/header.component';
import { FooterComponent } from './pages/main/footer/footer.component';
import { MenuSidebarComponent } from './pages/main/menu-sidebar/menu-sidebar.component';
import { BlankComponent } from './views/blank/blank.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ToastrModule } from 'ngx-toastr';
import { MessagesDropdownMenuComponent } from './pages/main/header/messages-dropdown-menu/messages-dropdown-menu.component';
import { NotificationsDropdownMenuComponent } from './pages/main/header/notifications-dropdown-menu/notifications-dropdown-menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppButtonComponent } from './components/app-button/app-button.component';

import { registerLocaleData } from '@angular/common';
import localeEn from '@angular/common/locales/en';
import { UserDropdownMenuComponent } from './pages/main/header/user-dropdown-menu/user-dropdown-menu.component';
import { HttpClientModule } from '@angular/common/http';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { ChartsModule } from 'ng2-charts';

registerLocaleData(localeEn, 'en-EN');

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    MenuSidebarComponent,
    BlankComponent,
    ProductsComponent,
    ProductAddComponent,
    ProductDetailComponent,
    StatsComponent,
    RegisterComponent,
    DashboardComponent,
    MessagesDropdownMenuComponent,
    NotificationsDropdownMenuComponent,
    AppButtonComponent,
    UserDropdownMenuComponent,
    AppProductReviewsComponent,
    AppPaginatorComponent,
    AppHeaderPageComponent,
    AppChartPolarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    NgbModule,
    HttpClientModule,
    FormsModule,
    NgHttpLoaderModule.forRoot(),
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
