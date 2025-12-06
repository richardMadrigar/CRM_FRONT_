type IHandleCalcAverage = { valueTotal: number; percent: number };

// expected = 1000, 15 = 150

export const handleCalcAverage = ({
	valueTotal,
	percent,
}: IHandleCalcAverage) => {
	const result = (valueTotal * percent) / 100;
	return result;
};

// function calcularPorcentagem(total: number, filtrados: number): number {
export const calcularPorcentagem = (
	total: number,
	filtrados: number,
): number => {
	if (total === 0) return 0; // Evita divisão por zero
	return (filtrados / total) * 100;
};
