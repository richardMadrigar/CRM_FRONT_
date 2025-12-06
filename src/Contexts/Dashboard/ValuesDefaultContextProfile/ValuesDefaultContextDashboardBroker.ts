import { IMetricsFilterDashboard } from "../ContextDashboardBrokerTypes";
import { FormatDateDayLastMonth } from "src/shared/Utils/FormatDate/FormatDateDayLastMonth";

export const valueDefaultFilterMetricsDashboard: IMetricsFilterDashboard = {
	startDate: FormatDateDayLastMonth().firstDayMonth,
	endDate: FormatDateDayLastMonth().lastDayMonth,
	interval: "WEEK",
};
