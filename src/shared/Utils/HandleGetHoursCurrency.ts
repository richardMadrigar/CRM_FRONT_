export const HandleGetHoursCurrency = () => {
	const formatDate = new Intl.DateTimeFormat("pt-BR", {
		hour: "2-digit",
		minute: "2-digit",
	});
	const hoursAtual = formatDate.format(Date.now());

	return hoursAtual;
};
