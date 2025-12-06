export const FormatNumber = (value: string | undefined) =>
	value?.replace(/\./g, "").replace(/,/g, "");
