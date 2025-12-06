import { useNavigate } from "react-router-dom";

import { useAuthContext } from "src/Contexts/AuthContext/authContext";
import { useConfigPageContext } from "src/Contexts/configPagesContext/configPagesContext";
import { valuesDefaultInputsControlCompany } from "src/Contexts/AuthContext/ValuesDefaultControlCompany";
import { useLayoutMainContext } from "src/Contexts/MainLayoutContext";
import { api, getToken } from "src/shared/setup/API/api";
import { UrlConfig } from "src/shared/Utils/paths";

export const UseFormRegister = () => {
	const { setLoadingGravar } = useConfigPageContext();
	const { handleGetAlert } = useLayoutMainContext();

	const {
		setToken,
		RefreshSession,
		valuesInputsRegister,
		setValuesInputsRegister,
	} = useAuthContext();

	const navigate = useNavigate();

	const handleSubmit = async () => {
		const AllDatas = {
			name: valuesInputsRegister.name,
			email: valuesInputsRegister.email,
			password: valuesInputsRegister.password,
			password_repeat: valuesInputsRegister.password,
		};

		if (!AllDatas.name) return handleGetAlert({ message: `Digite um nome` });
		if (!AllDatas.email) return handleGetAlert({ message: `Digite um email` });
		if (!AllDatas.password)
			return handleGetAlert({ message: `Digite uma senha` });

		setLoadingGravar(true);

		return api
			.post("/registers", AllDatas)
			.then(async (res) => {
				setToken(res.data.token);
				localStorage.setItem(getToken, res.data.token);

				navigate(`${UrlConfig.dashboard.url}`);

				setValuesInputsRegister(valuesDefaultInputsControlCompany);
				await RefreshSession();
			})
			.catch((error) =>
				handleGetAlert({ message: error.response.data.message }),
			)
			.finally(() => setLoadingGravar(false));
	};

	return { handleSubmit };
};
