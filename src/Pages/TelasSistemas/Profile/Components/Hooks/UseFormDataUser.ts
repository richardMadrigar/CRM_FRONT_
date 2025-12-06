import { useState } from "react";
import { useAuthContext } from "src/Contexts/AuthContext/authContext";
import { useContextProfileContext } from "src/Contexts/ContextProfile/ContextProfile";
import { useLayoutMainContext } from "src/Contexts/MainLayoutContext";
import { api } from "src/shared/setup/API/api";
import { apenasNumeros } from "src/shared/Utils/FormatMoney";

export const UseFormDataUser = () => {
	const { handleGetAlert } = useLayoutMainContext();
	const { valuesUpdateProfile } = useContextProfileContext();
	const { userPerfil, setUserPerfil } = useAuthContext();

	const [loading, setLoading] = useState(false);

	const resultData = {
		name: valuesUpdateProfile.name,
		email: valuesUpdateProfile.email,
		phone1: apenasNumeros(valuesUpdateProfile.phone1) || "",
	};

	const handleEdit = () => {
		if (!resultData.name?.trim())
			return handleGetAlert({ message: `Digite um nome` });

		setLoading(true);

		return api
			.patch(`/registers`, resultData)
			.then((res) => {
				handleGetAlert({ message: res.data.message });
				if (userPerfil) {
					setUserPerfil(() => ({
						...userPerfil,
						name: resultData.name,
						email: resultData.email,
						phone1: resultData.phone1,
					}));
				}
			})
			.catch((error) =>
				handleGetAlert({ message: error.response.data.message }),
			)
			.finally(() => setLoading(false));
	};

	return { handleSubmit: handleEdit, loading };
};
