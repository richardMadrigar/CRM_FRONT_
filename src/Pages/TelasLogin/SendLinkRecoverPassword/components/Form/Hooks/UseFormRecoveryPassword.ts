import { useConfigPageContext } from "src/Contexts/configPagesContext/configPagesContext";
import { useLayoutMainContext } from "src/Contexts/MainLayoutContext";
import { api } from "src/shared/setup/API/api";
import { useAuthContext } from "src/Contexts/AuthContext/authContext";

export const UseFormRecoveryPassword = () => {
	const { setLoadingGravar } = useConfigPageContext();
	const { valuesRecoverPassword, setValuesRecoverPassword } = useAuthContext();
	const { handleGetAlert } = useLayoutMainContext();

	const handleCreateProdutores = async () => {
		const AllDatas = {
			email: valuesRecoverPassword.email,
		};

		if (!AllDatas.email) return handleGetAlert({ message: `Digite um email` });

		setLoadingGravar(true);

		return api
			.post("/registers/recoveryPassword", AllDatas)
			.then(async (res) => {
				handleGetAlert({ message: res.data.message });
				setValuesRecoverPassword({ email: "" });
			})
			.catch((error) =>
				handleGetAlert({ message: error.response.data.message }),
			)
			.finally(() => setLoadingGravar(false));
	};

	return { handleSubmit: handleCreateProdutores };
};
