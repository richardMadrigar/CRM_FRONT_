import moment from "moment";

/**
 *
 * @param
 * @returns 2023-10-05_17-31
 */

export const handleFormatDateWithHours = (): string => {
	const dateCurrency = moment();

	return dateCurrency.format("YYYY-MM-DD_HH-mm");
};
