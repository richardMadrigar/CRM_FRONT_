interface IWithDot {
	value: string;
	LIMIT: number;
}
export const handleIfLimitCharacter = ({ value, LIMIT }: IWithDot) => {
	const resultWithDot = `${value.substring(0, LIMIT).trim()}...`;
	const result = value.length > LIMIT ? resultWithDot : value;

	return result;
};
