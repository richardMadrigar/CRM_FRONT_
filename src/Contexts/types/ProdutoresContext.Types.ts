import { ReactNode } from "react";

export type IAutoCompleted = {
	label: string;
	id: string;
};

export type IViews = {
	element: ReactNode;
	isView: boolean;
	isDevelop?: boolean;
	route: {
		title: string;
		url: string;
		subsTitle?: string;
		video?: ReactNode;
		info?: JSX.Element;
	};
};
