import { IAutoCompletedGeneric } from "src/shared/types/configPageContext/typesContext";

export type IPropsAutoCompletedGeneric = {
	url: string;
	label: string;
	width?: number | undefined;
	tamanho?: string | undefined;
	maxWidth?: string | undefined;
	isGroupBy?: boolean | undefined;
	doesNotViewId?: boolean | undefined;
	minWidth?: string | undefined;
	fullWidth?: boolean | undefined;
	variant?: "standard" | "filled" | "outlined" | undefined;
	valueAutoCompleted: IAutoCompletedGeneric;
	setValueAutoCompleted: React.Dispatch<
		React.SetStateAction<IAutoCompletedGeneric>
	>;
	disabled?: boolean | undefined;
	tooltip?: string | undefined;
};
export type IAutoCompletedGenericMultiple = {
	url: string;
	label: string;
	width?: number;
	tamanho?: string;
	maxWidth?: string;
	disabled?: boolean;
	minWidth?: string;
	fullWidth?: boolean;
	openInClick?: boolean;
	valueAutoCompleted: IAutoCompletedGeneric[];
	setValueAutoCompleted: React.Dispatch<
		React.SetStateAction<IAutoCompletedGeneric[]>
	>;
	variant?: "standard" | "filled" | "outlined";
};

export interface IPropsAutoCompleted {
	fullWidth?: boolean;
	maxWidth?: string;
	minWidth?: string;
	disabled?: boolean;
	tamanho?: string;
	tooltip?: string;
	width?: number;
	label: string;
	variant?: "standard" | "filled" | "outlined";
}
