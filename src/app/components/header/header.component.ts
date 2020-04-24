import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { IMenu } from '../../interfaces/menu.interface';
import { NewsService } from '../../services/news.service';
import { BannerService } from '../../services/banner.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

	private menuList: IMenu[];

	constructor(private menuService: MenuService, private newsService: NewsService, private bannerService: BannerService) {}

	ngOnInit(): void {
		this.menuService.getMenuList().subscribe(res => {
			if (res) {
				this.menuList = res;
			}
		});
	}

}
