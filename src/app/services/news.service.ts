import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { newsMapper } from '../mappers/news.mapper';

@Injectable()
export class NewsService {

	constructor(private httpClient: HttpClient) {}

	public getNewsList(): Observable<any> {
		return this.httpClient.get('https://exam-api.veripark.com/api/news')
			.pipe(
				map(newsMapper)
			);
	}
}
