import { Component, OnInit } from '@angular/core';
import { BannerService } from '../../services/banner.service';
import { IBanner } from '../../interfaces/banner.interface';
import { NewsService } from '../../services/news.service';
import { INews } from '../../interfaces/news.interface';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	public banners: IBanner[];
	public newsList: INews[];

	constructor(private bannerService: BannerService, private newsService: NewsService) {}

	ngOnInit(): void {
		this.bannerService.getBannerList().subscribe(res => {
			if (res) {
				this.banners = res;
			}
		});

		this.newsService.getNewsList().subscribe(res => {
			if (res) {
				this.newsList = res;
			}
		});
	}

}
