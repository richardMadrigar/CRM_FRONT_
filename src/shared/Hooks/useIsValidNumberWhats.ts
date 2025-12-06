import { apenasNumeros } from "../Utils/FormatMoney";
import { useState } from "react";
import axios from "axios";

export const AxiosEvolutionClientHttpTestExistsWhats = () =>
	axios.create({
		baseURL:
			"https://pessoal-evolution-api.2ovlnw.easypanel.host/chat/whatsappNumbers/instance_validation_numbers",
		headers: {
			"Content-Type": "application/json",
			apikey: "0E947C5BB608-48A9-96D1-D13F572F6A7E",
		},
	});

export const useIsValidNumberWhats = () => {
	const [isWhatsValid, setIsWhatsValid] = useState(false);

	const [isLoading, setIsLoading] = useState(false);

	const handle = async (number: string) => {
		const whats = apenasNumeros(number);

		if (whats && whats.length === 11) {
			setIsLoading(true);
			const { data } = await AxiosEvolutionClientHttpTestExistsWhats()
				.post("", { numbers: [`55${whats}`] })
				.finally(() => setIsLoading(false));

			if (data[0]?.exists) {
				setIsWhatsValid(true);
			} else {
				setIsWhatsValid(false);
			}
		}
	};

	return { handle, isWhatsValid, isLoading };
};
