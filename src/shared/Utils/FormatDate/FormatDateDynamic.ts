import moment from "moment";

interface IFormatDateDynamic {
	amount: number;
	unit: moment.unitOfTime.DurationConstructor;
	dateCurrency?: string;
	type: "SUB" | "ADD";
}

/**
 * @expected amount: 5
 * @expected unit: 'days'
 * @expected dateCurrency: '2024-01-01'
 * @Output '2024-01-06'
 * ----
 * @expected amount: 3
 * @expected unit: 'month'
 * @expected dateCurrency: '2024-01-01'
 * @Output '2024-04-01'
 */

export const FormatDateDynamic = ({
	type,
	amount,
	unit,
	dateCurrency,
}: IFormatDateDynamic) => {
	const date = dateCurrency ? moment(dateCurrency) : moment();

	const dateLast =
		type === "ADD" ? date.add(amount, unit) : date.subtract(amount, unit);

	return dateLast.format("YYYY-MM-DD");
};
