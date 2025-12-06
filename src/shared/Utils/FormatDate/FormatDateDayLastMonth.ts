import moment from "moment";

interface IFormatDateDayLastMonth {
	lastDayMonth: string;
	firstDayMonth: string;
}

export const FormatDateDayLastMonth = (): IFormatDateDayLastMonth => {
	const firstDayMonth = moment().startOf("month").format("YYYY-MM-DD");
	const lastDayMonth = moment().endOf("month").format("YYYY-MM-DD");

	return {
		lastDayMonth,
		firstDayMonth,
	};
};
