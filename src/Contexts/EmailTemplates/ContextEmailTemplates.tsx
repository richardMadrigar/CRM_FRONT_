import { createContext, ReactNode, useState, useContext } from "react";
import {
	IContextEmailTemplates,
	ICreateEmailTemplate,
	IListEmailTemplate,
} from "./EmailTemplatesContextTypes";
import { valuesDefaultInputsEmailTemplate } from "./ValuesDefaultInputsEmailTemplate/valuesDefaultInputsEmailTemplate";

const valuesDefaultContextEmailTemplates: IContextEmailTemplates = {
	setListEmailTemplates: () => {},
	listEmailTemplates: [],

	setValuesInputsEmailTemplate: () => {},
	valuesInputsEmailTemplate: valuesDefaultInputsEmailTemplate,
};

export const ContextEmailTemplates = createContext<IContextEmailTemplates>(
	valuesDefaultContextEmailTemplates,
);

interface IProviderEmailTemplates {
	children: ReactNode;
}

export const ProviderEmailTemplates = ({
	children,
}: IProviderEmailTemplates) => {
	const [listEmailTemplates, setListEmailTemplates] = useState<
		IListEmailTemplate[]
	>([]);
	const [valuesInputsEmailTemplate, setValuesInputsEmailTemplate] =
		useState<ICreateEmailTemplate>(valuesDefaultInputsEmailTemplate);

	return (
		<ContextEmailTemplates.Provider
			value={{
				setListEmailTemplates,
				listEmailTemplates,

				setValuesInputsEmailTemplate,
				valuesInputsEmailTemplate,
			}}
		>
			{children}
		</ContextEmailTemplates.Provider>
	);
};

export const useContextEmailTemplates = () => {
	const context = useContext(ContextEmailTemplates);
	if (!context) {
		throw new Error(
			"useContextEmailTemplates must be used within a ProviderEmailTemplates",
		);
	}
	return context;
};
