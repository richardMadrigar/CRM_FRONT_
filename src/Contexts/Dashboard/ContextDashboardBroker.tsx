import { createContext, useContext, useState, FC, ReactNode } from "react";

import {
	IMetricsFilterDashboard,
	IContextDashboardBroker,
	IValueGraphicSendMessages,
} from "./ContextDashboardBrokerTypes";
import { valueDefaultFilterMetricsDashboard } from "./ValuesDefaultContextProfile/ValuesDefaultContextDashboardBroker";

const ContextDashboardProvider = createContext({} as IContextDashboardBroker);

const ContextDashboardBrokerProviderContext: FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [filterMetricsFilterDashboard, setFilterMetricsFilterDashboard] =
		useState<IMetricsFilterDashboard>(valueDefaultFilterMetricsDashboard);

	const [valueGraphicSendMessages, setValueGraphicSendMessages] =
		useState<IValueGraphicSendMessages>({
			data: [{ date: "", value: 0 }],
		});

	return (
		<ContextDashboardProvider.Provider
			value={{
				setFilterMetricsFilterDashboard,
				filterMetricsFilterDashboard,

				setValueGraphicSendMessages,
				valueGraphicSendMessages,
			}}
		>
			{children}
		</ContextDashboardProvider.Provider>
	);
};

const useContextDashboardContext = (): IContextDashboardBroker =>
	useContext(ContextDashboardProvider);

export { useContextDashboardContext, ContextDashboardBrokerProviderContext };
