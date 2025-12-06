import { createContext, useContext, useState, FC, ReactNode } from "react";

import {
	IUpdatePasswordProfile,
	IContextProfileContext,
	IUpdateEmailProfile,
	IUpdateProfile,
	IEditPerfil,
} from "./ContextProfileTypes";
import { valuesDefaultUpdatePasswordProfile } from "./ValuesDefaultContextProfile/ValuesDefaultContextProfile";

const ContextProfileProvider = createContext({} as IContextProfileContext);

const ContextProfileProviderContext: FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [valuesEditPerfil, setValuesEditPerfil] = useState<IEditPerfil>({
		nome: "",
		telefone_1: "",
	});

	const [valuesUpdateEmailProfile, setValuesUpdateEmailProfile] =
		useState<IUpdateEmailProfile>({ email: "" });

	const [valuesUpdatePasswordProfile, setValuesUpdatePasswordProfile] =
		useState<IUpdatePasswordProfile>(valuesDefaultUpdatePasswordProfile);

	const [valuesUpdateProfile, setValuesUpdateProfile] =
		useState<IUpdateProfile>({
			email: "",
			name: "",
			phone1: "",
		});

	return (
		<ContextProfileProvider.Provider
			value={{
				setValuesUpdatePasswordProfile,
				valuesUpdatePasswordProfile,
				setValuesUpdateEmailProfile,
				valuesUpdateEmailProfile,
				setValuesUpdateProfile,
				setValuesEditPerfil,
				valuesUpdateProfile,
				valuesEditPerfil,
			}}
		>
			{children}
		</ContextProfileProvider.Provider>
	);
};

const useContextProfileContext = (): IContextProfileContext =>
	useContext(ContextProfileProvider);

export { useContextProfileContext, ContextProfileProviderContext };
