import { FC, createContext, useContext, useState, ReactNode } from "react";

import { IAutoCompleted } from "../types/ProdutoresContext.Types";

import { IAutoCompletedAllContextProvider } from "./types";

const UtilsContext = createContext({} as IAutoCompletedAllContextProvider);

const valueDefaultInput = { label: "", id: "" };

export const AutoCompletedAllContextProvider: FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [valueAutoCompInstancesWhats, setValueAutoCompInstancesWhats] =
		useState<IAutoCompleted>(valueDefaultInput);

	return (
		<UtilsContext.Provider
			value={{
				valueAutoCompInstancesWhats,
				setValueAutoCompInstancesWhats,
			}}
		>
			{children}
		</UtilsContext.Provider>
	);
};

export const UseAutoCompletedAll = (): IAutoCompletedAllContextProvider =>
	useContext(UtilsContext);
