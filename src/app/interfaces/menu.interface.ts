export interface IMenu {
	Id: number;
	ParentId: number;
	Url: string;
	Name: string;
	SubMenus?: IMenu[];
}
