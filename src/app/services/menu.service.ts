import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { menuMapper } from '../mappers/menu.mapper';

@Injectable()
export class MenuService {

	constructor(private httpClient: HttpClient) {}

	public getMenuList(): Observable<any> {
		return this.httpClient.get('https://exam-api.veripark.com/api/menu')
			.pipe(
				map(menuMapper)
			);
	}

}
