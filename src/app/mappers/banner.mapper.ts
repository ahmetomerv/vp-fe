import { IBanner } from '../interfaces/banner.interface';

export const bannerMapper = (response: any): IBanner[] => response.ResponseDetail.map(banner => {
	return banner;
});
