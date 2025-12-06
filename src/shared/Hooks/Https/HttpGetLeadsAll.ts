import { useEffect, useState } from "react";
import { useLayoutMainContext } from "src/Contexts/MainLayoutContext";
import { api } from "src/shared/setup/API/api";

export type IStatusLeads =
	| "NEW"
	| "IN_CONTACT"
	| "NEGOTIATION"
	| "PROPOSAL_SENT"
	| "PROPOSAL_ACCEPTED"
	| "PROPOSAL_REJECTED"
	| "FUTURE_NEGOTIATION"
	| "DISQUALIFIED_CLOSED"
	| "LOST";

export interface IGetLeadsAll {
	id: string;
	status: IStatusLeads;
	interestLevel: "LOW" | "MEDIUM" | "HIGH";
	sourceCollection: string;
	name: string;
	cpf: string;
	email: string;
	whats: string;
	telefone1: string;
	createdAt: string;
	captureAt: string;
}

export const HttpGetLeadsAll = () => {
	const { handleGetAlert } = useLayoutMainContext();

	const [data, setData] = useState<IGetLeadsAll[]>([]);

	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const handleGet = () => {
			setLoading(true);

			api
				.get(`/leads/all`)
				.then(({ data }) => {
					setData(data.data);
				})
				.catch((error) =>
					handleGetAlert({ message: error.response.data.message }),
				)
				.finally(() => setLoading(false));
		};

		handleGet();
	}, []);

	return { loading, data };
};
