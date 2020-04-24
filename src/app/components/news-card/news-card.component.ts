import { Component, Input, OnInit } from '@angular/core';
import { INews } from '../../interfaces/news.interface';

@Component({
	selector: 'app-news-card',
	templateUrl: './news-card.component.html',
	styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent implements OnInit {

	@Input()
	newsItem: INews;

	constructor() { }

	ngOnInit() {
	}

}
