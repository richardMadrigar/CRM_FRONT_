import { IViews } from "src/Contexts/types/ProdutoresContext.Types";

export interface NavigationProps {
	navigationItems: IViews[];
}

export interface NavigationItemProps {
	item: IViews;
	isActive: boolean;
	index: number;
}
