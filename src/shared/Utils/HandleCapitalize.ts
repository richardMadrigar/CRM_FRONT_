export const handleCapilize = (text: string) => {
	if (!text.trim()) {
		return "";
	}
	const result = text[0]?.toUpperCase() + text.slice(1);

	return result;
};
