import { IMenu } from '../interfaces/menu.interface';

export const menuMapper = (response: any): IMenu[] => response.ResponseDetail.map(menu => {
	return {
		Name: menu.Name,
		Url: menu.Url,
		Id: menu.Id,
		ParentId: menu.ParentId,
		SubMenus: response.ResponseDetail.filter(x => x.ParentId === menu.Id)
	};
});
