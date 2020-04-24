import { Component, Input, OnInit } from '@angular/core';
import { IBanner } from '../../interfaces/banner.interface';

@Component({
	selector: 'app-banner-carousel',
	templateUrl: './banner-carousel.component.html',
	styleUrls: ['./banner-carousel.component.scss']
})
export class BannerCarouselComponent implements OnInit {

	@Input()
	banners: IBanner[];

	constructor() { }

	ngOnInit() {
	}

}
