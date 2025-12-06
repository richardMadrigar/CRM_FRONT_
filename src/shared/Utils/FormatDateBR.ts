// 2022-07-15T03:00:00.000Z => expected => 14/01/2022
export const FormatDateBR = (value: string) => {
	const result = value
		? new Date(value).toLocaleDateString("pt-BR", {
				timeZone: "UTC",
			})
		: "";

	return result;
};

// 2022-07-15T03:00:00.000Z => expected => 	05/05/2022 - 03:00:00.000Z
export const FormatDateHoraBR = (value: string) => {
	const isValueNull = value !== "";
	const [data, hours] = value.split("T");

	const formatDate = FormatDateBR(data);

	const resultFormat = `${formatDate} - ${hours}`;

	const resultDate = isValueNull ? resultFormat : "";
	return resultDate;
};

// expected => '03/08/2022' => 2022-08-03
export const FormatDateUS = (value: string) => {
	const [dia, mes, ano] = value.split("/");

	const montDate = `${ano}-${mes}-${dia}`;

	return montDate;
};

// expected: => 2022-06-23
export const GetDateUSSemValue = () => {
	const date = new Date().toLocaleDateString("pt-BR");
	const result = FormatDateUS(date);
	return result;
};
