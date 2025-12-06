import { createContext, useContext, ReactNode, useState, FC } from "react";
import { UrlConfig } from "src/shared/Utils/paths";

import { IViews } from "../types/ProdutoresContext.Types";

import { INavigationContext } from "./ViewsTypes";

import { ProfilePage } from "src/Pages/TelasSistemas/Profile/Index";
import { HomePage } from "src/Pages/TelasSistemas/Home/HomePage";
import { WhatsappConfigPage } from "src/Pages/TelasSistemas/WhatsappPage/Index";
import { ContactsPage } from "src/Pages/TelasSistemas/Contacts/ContactsPage";
import { ContactInternal } from "src/Pages/TelasSistemas/Contacts/ContactInternal/ContactInternal";
import { PageGroupLeads } from "src/Pages/TelasSistemas/GroupLeads";
import { PageCampaign } from "src/Pages/TelasSistemas/Campaign/Index";
import { PageEmailTemplates } from "src/Pages/TelasSistemas/EmailTemplates";
import { CampaignInternal } from "src/Pages/TelasSistemas/Campaign/CampaignInternal/CampaignInternal";

const ViewsProvider = createContext({} as INavigationContext);

export const ViewsContext: FC<{ children: ReactNode }> = ({ children }) => {
	const [NavigatioPerfil] = useState<IViews[]>([
		{
			element: <ProfilePage />,
			route: UrlConfig.profile,
			isView: true,
		},
		{
			element: <WhatsappConfigPage />,
			route: UrlConfig.whatsappConfig,
			isView: true,
		},
		{
			element: <CampaignInternal />,
			isView: true,
			route: UrlConfig.campaignInternal,
		},
		{
			element: <ContactInternal />,
			isView: true,
			route: UrlConfig.contactInternal,
		},
	]);

	const [NavigationHeader] = useState<IViews[]>([
		{
			element: <HomePage />,
			route: UrlConfig.dashboard,
			isView: true,
		},
		{
			element: <ContactsPage />,
			route: UrlConfig.contacts,
			isView: true,
		},
		{
			element: <PageGroupLeads />,
			route: UrlConfig.groupLeads,
			isView: true,
		},
		{
			element: <PageCampaign />,
			route: UrlConfig.campaign,
			isView: true,
		},
		{
			element: <PageEmailTemplates />,
			route: UrlConfig.emailTemplates,
			isView: true,
		},
	]);

	return (
		<ViewsProvider.Provider
			value={{
				NavigatioPerfil,
				NavigationHeader,
			}}
		>
			{children}
		</ViewsProvider.Provider>
	);
};

export const useContextViews = (): INavigationContext =>
	useContext(ViewsProvider);
