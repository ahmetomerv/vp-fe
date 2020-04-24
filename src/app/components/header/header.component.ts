import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { IMenu } from '../../interfaces/menu.interface';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

	public menuList: IMenu[];

	constructor(private menuService: MenuService) {}

	ngOnInit(): void {
		this.menuService.getMenuList().subscribe(res => {
			if (res) {
				this.menuList = res;
			}
		});
	}

}
