import moment from "moment";

export const FormatDateFirstDayYear = (): string => {
	const yearCurrency = moment().year();

	const firstDayYear = moment(`${yearCurrency}-01-01`).format("YYYY-MM-DD");

	return firstDayYear;
};
