import { createContext, useContext, useState, FC, ReactNode } from "react";

import {
	IGetContacts,
	IListContacts,
	ICreateContacts,
	IContextContacts,
} from "./ContextContactsTypes";
import { valuesDefaultInputsContacts } from "./ValuesDefaultInputsConnectionWhats/valuesDefaultInputsContextContacts";

const ContextContacts = createContext({} as IContextContacts);

export const ContextContactsProvider: FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [listContacts, setListContacts] = useState([] as IListContacts[]);

	const [dataGetContacts, setDataGetContacts] = useState({} as IGetContacts);

	const [valuesInputsContacts, setValuesInputsContacts] =
		useState<ICreateContacts>(valuesDefaultInputsContacts);

	return (
		<ContextContacts.Provider
			value={{
				listContacts,
				setListContacts,
				dataGetContacts,
				setDataGetContacts,
				valuesInputsContacts,
				setValuesInputsContacts,
			}}
		>
			{children}
		</ContextContacts.Provider>
	);
};

export const useContextContacts = (): IContextContacts =>
	useContext(ContextContacts);
