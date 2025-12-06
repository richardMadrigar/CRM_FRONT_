import { useState } from "react";

import { useConfigPageContext } from "src/Contexts/configPagesContext/configPagesContext";
import { useLayoutMainContext } from "src/Contexts/MainLayoutContext";
import { api } from "src/shared/setup/API/api";
import { useContextConnectionWhats } from "src/Contexts/ConnectionWhats/ContextConnectionWhats";

export const UseFormUpdateSettings = () => {
	const { setAttTable, id } = useConfigPageContext();
	const { handleGetAlert } = useLayoutMainContext();
	const { valuesSettingsWhats } = useContextConnectionWhats();

	const [loading, setLoading] = useState(false);

	const handleCreate = async () => {
		setLoading(true);

		const objUpdate = {
			text: valuesSettingsWhats.message,
			isSaveContact: valuesSettingsWhats.isSaveContact,
			delayDays: Number(valuesSettingsWhats.delayDays),

			status: valuesSettingsWhats.isAutoResponse ? "ACTIVE" : "INACTIVE",
			type: valuesSettingsWhats.typeResponse,
			// image: valuesSettingsWhats.image,
			// audio: valuesSettingsWhats.audio,
		};

		return api
			.put(`/messages/${id}`, objUpdate)
			.then((res) => {
				handleGetAlert({ message: res.data.message });
			})
			.catch((error) =>
				handleGetAlert({ message: error.response.data.message }),
			)
			.finally(() => setLoading(false));
	};

	return {
		handleSubmit: handleCreate,
		loading,
	};
};
