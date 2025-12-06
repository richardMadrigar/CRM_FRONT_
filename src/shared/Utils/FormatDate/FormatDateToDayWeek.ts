import moment from "moment";

/**
 * Retornar o dia da semana
 * @param 2023-10-13
 * @returns sexta-feira
 */

export const handleFormatDateDayWeek = (date: string) => {
	const dayWeek = moment(date).format("dddd");

	return dayWeek;
};
