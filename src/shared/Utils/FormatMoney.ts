export const apenasNumeros = (value: string | undefined) =>
	value?.replace(/[^0-9]/g, "");

export const FormatMoney = (value?: string | number) => {
	const replace1 = String(value)?.replace(/\D/g, "");
	const replace2 = replace1?.replace(/(\d)(\d{2})$/, "$1,$2");
	const replace3 = replace2?.replace(/(?=(\d{3})+(\D))\B/g, ".");

	return replace3 as string;
};

// expected 1000 => 1000 | 25,34 => 2534
export const handleFormatPercent = (value: string) => {
	const resultFormat = value.replace(/[^\d.]/g, "");

	return resultFormat;
};

export const handleFormatCreditCard = (value: string) => {
	// Remove tudo que não for número
	const onlyNumbers = value.replace(/\D/g, "");

	// Limita o valor a 16 dígitos (padrão de cartão)
	const limited = onlyNumbers.slice(0, 16);

	// Agrupa a cada 4 dígitos com espaço
	return limited.replace(/(\d{4})(?=\d)/g, "$1 ");
};
