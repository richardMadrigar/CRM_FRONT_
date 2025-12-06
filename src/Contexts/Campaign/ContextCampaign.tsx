import { createContext, useContext, useState, FC, ReactNode } from "react";

import {
	IDataGetCampaignDetails,
	ICreateGroupLeads,
	IContextCampaign,
	ICreateCampaign,
	IListGroupLeads,
	IListCampaign,
} from "./CampaignContextTypes";
import {
	valuesDefaultInputsGroupLeads,
	valuesDefaultInputsCampaign,
} from "./ValuesDefaultInputsCampaign/valuesDefaultInputsInstancesWhats";

const CampaignContext = createContext({} as IContextCampaign);

export const CampaignContextProvider: FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [listGroupLeads, setListGroupLeads] = useState([] as IListGroupLeads[]);
	const [listCampaign, setListCampaign] = useState([] as IListCampaign[]);

	const [dataGetCampaignDetails, setDataGetCampaignDetails] = useState(
		{} as IDataGetCampaignDetails,
	);

	const [valuesInputsCampaign, setValuesInputsCampaign] =
		useState<ICreateCampaign>(valuesDefaultInputsCampaign);

	const [valuesInputsGroupLeads, setValuesInputsGroupLeads] =
		useState<ICreateGroupLeads>(valuesDefaultInputsGroupLeads);

	return (
		<CampaignContext.Provider
			value={{
				listCampaign,
				listGroupLeads,
				setListCampaign,
				setListGroupLeads,
				valuesInputsCampaign,
				dataGetCampaignDetails,
				valuesInputsGroupLeads,
				setValuesInputsCampaign,
				setValuesInputsGroupLeads,
				setDataGetCampaignDetails,
			}}
		>
			{children}
		</CampaignContext.Provider>
	);
};

export const useContextCampaign = (): IContextCampaign =>
	useContext(CampaignContext);
