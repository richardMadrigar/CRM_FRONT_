import { createContext, useContext, useState, FC, ReactNode } from "react";

import {
	ICreateConnectionWhats,
	IListInstancesWhats,
	IContextConnectionWhats,
	IGetConnectionWhats,
	IWhatsAppConfig,
} from "./ContextConnectionWhatsTypes";
import { valuesDefaultInputsConnectionWhats } from "./ValuesDefaultInputsConnectionWhats/valuesDefaultInputsConnectionWhats";

const ConnectionWhatsContext = createContext({} as IContextConnectionWhats);

export const ConnectionWhatsContextProvider: FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [qrCode, setQrCode] = useState("");
	const [listInstancesWhats, setListInstancesWhats] = useState(
		[] as IListInstancesWhats[],
	);

	const [openQrCodeModal, setOpenQrCodeModal] = useState(false);

	const [dataGetConnectionWhats, setDataGetConnectionWhats] = useState(
		{} as IGetConnectionWhats,
	);

	const [valuesSettingsWhats, setValuesSettingsWhats] =
		useState<IWhatsAppConfig>({
			isSaveContact: true,
			isAutoResponse: false,
			typeResponse: "TEXT",
			message: "",
			delayDays: "",
			image: "",
			audio: "",
		});

	const [valuesInputsInstancesWhats, setValuesInputsInstancesWhats] =
		useState<ICreateConnectionWhats>(valuesDefaultInputsConnectionWhats);

	return (
		<ConnectionWhatsContext.Provider
			value={{
				setValuesInputsInstancesWhats,
				valuesInputsInstancesWhats,
				setDataGetConnectionWhats,
				setValuesSettingsWhats,
				dataGetConnectionWhats,
				setListInstancesWhats,
				valuesSettingsWhats,
				listInstancesWhats,
				setOpenQrCodeModal,
				openQrCodeModal,
				setQrCode,
				qrCode,
			}}
		>
			{children}
		</ConnectionWhatsContext.Provider>
	);
};

export const useContextConnectionWhats = (): IContextConnectionWhats =>
	useContext(ConnectionWhatsContext);
