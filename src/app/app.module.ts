import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { MenuService } from './services/menu.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NewsService } from './services/news.service';
import { BannerService } from './services/banner.service';
import { BannerCarouselComponent } from './components/banner-carousel/banner-carousel.component';
import { NewsCardComponent } from './components/news-card/news-card.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContactService } from './services/contact.service';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		HomeComponent,
		BannerCarouselComponent,
		NewsCardComponent,
		ContactComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		BrowserAnimationsModule,
		NgbModule,
		ToastrModule.forRoot({
			positionClass: 'toast-bottom-center'
		})
	],
	providers: [MenuService, NewsService, BannerService, ContactService],
	bootstrap: [AppComponent]
})
export class AppModule { }
