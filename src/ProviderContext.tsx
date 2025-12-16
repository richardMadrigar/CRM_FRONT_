import type { FC } from "react";

import { AuthContextProvider } from "./Contexts/AuthContext/authContext";
import { CampaignContextProvider } from "./Contexts/Campaign/ContextCampaign";
import { ConnectionWhatsContextProvider } from "./Contexts/ConnectionWhats/ContextConnectionWhats";
import { ContextContactsProvider } from "./Contexts/Contacts/ContextContacts";
import { ContextProfileProviderContext } from "./Contexts/ContextProfile/ContextProfile";
import { ConfigPageProviderContext } from "./Contexts/configPagesContext/configPagesContext";
import { ContextDashboardBrokerProviderContext } from "./Contexts/Dashboard/ContextDashboardBroker";
import { ProviderEmailTemplates } from "./Contexts/EmailTemplates/ContextEmailTemplates";
import { AutoCompletedAllContextProvider } from "./Contexts/Utils/UseAutoCompletedAll";
import { ViewsContext } from "./Contexts/Views/contextViews";
import { combineComponents } from "./shared/Utils/ProviderContext/ProviderContext";

const providers = [
  AuthContextProvider,
  ViewsContext,
  AutoCompletedAllContextProvider,
  ConfigPageProviderContext,
  ConnectionWhatsContextProvider,
  ContextProfileProviderContext,
  ContextDashboardBrokerProviderContext,
  ContextContactsProvider,
  CampaignContextProvider,
  ProviderEmailTemplates,
];

export const AppContextProvider = combineComponents(providers as FC[]);
