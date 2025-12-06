import { SetStateAction as Action, Dispatch } from "react";

export interface IContextDashboardBroker {
	filterMetricsFilterDashboard: IMetricsFilterDashboard;
	setFilterMetricsFilterDashboard: Dispatch<Action<IMetricsFilterDashboard>>;

	valueGraphicSendMessages: IValueGraphicSendMessages;
	setValueGraphicSendMessages: Dispatch<Action<IValueGraphicSendMessages>>;
}

export type IDataProfitableValues = {
	data: {
		label: string;
		value: number;
	}[];
};

export type IDataConfirmationFiliais = {
	data: {
		position: number;
		lucroTotal: string;
		filial: {
			id: number;
			name: string;
		};
	}[];

	meta: {
		total: string;
	};
};
export type IDataConfirmationOperator = {
	data: {
		position: number;
		lucroTotal: string;
		operadoras: {
			id: number;
			name: string;
		};
	}[];

	meta: {
		total: string;
	};
};
export type IDataConfirmationAdministrators = {
	data: {
		position: number;
		lucroTotal: string;
		Administrators: {
			id: number;
			name: string;
		};
	}[];

	meta: {
		total: string;
	};
};

export interface IMetricsFilterDashboard {
	startDate: string;
	endDate: string;
	interval: "WEEK" | "MONTH" | "DAY";
}

export interface IValueGraphicSendMessages {
	data: {
		date: string;
		value: number;
	}[];
}
