import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { bannerMapper } from '../mappers/banner.mapper';

@Injectable()
export class BannerService {

	constructor(private httpClient: HttpClient) {}

	public getBannerList(): Observable<any> {
		return this.httpClient.get('https://exam-api.veripark.com/api/banners')
			.pipe(
				map(bannerMapper)
			);
	}
}
