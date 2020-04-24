import { INews } from '../interfaces/news.interface';

export const newsMapper = (response: any): INews[] => response.ResponseDetail.map(news => {
	return news;
});
