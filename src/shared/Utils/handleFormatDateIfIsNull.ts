export const handleFormatDateIfIsNull = (value: string | null | undefined) => {
	const resultDate = value ? value.split("T")[0] : "";

	return resultDate;
};
