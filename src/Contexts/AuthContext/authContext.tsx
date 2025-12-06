import {
	createContext,
	useContext,
	useEffect,
	useState,
	FC,
	ReactNode,
} from "react";
import {
	IUsers,
	ILogins,
	TokenState,
	IHandleLogin,
	ICreateRegister,
	IRecoverPassword,
	IAuthContextType,
} from "src/Contexts/AuthContext/AuthContextTypes";
import { api, getToken } from "src/shared/setup/API/api";

import { useLayoutMainContext } from "../MainLayoutContext";
import { valuesDefaultInputsControlCompany } from "./ValuesDefaultControlCompany";

const AuthContext = createContext({} as IAuthContextType);

export const AuthContextProvider: FC<{ children: ReactNode }> = ({
	children,
}) => {
	const { handleGetAlert } = useLayoutMainContext();

	const [openModalFirst, setOpenModalFirst] = useState(false);
	const [loadingLogin, setLoadingLogin] = useState(false);
	const [authorization, setAuthorization] = useState(true);
	const [userPerfil, setUserPerfil] = useState<IUsers>();
	const [loading, setLoading] = useState(false);

	const [valuesInputsRegister, setValuesInputsRegister] =
		useState<ICreateRegister>(valuesDefaultInputsControlCompany);

	const [valuesInputsLogins, setValuesInputsLogins] = useState<ILogins>({
		senha: "",
		email: "",
	});

	const [valuesRecoverPassword, setValuesRecoverPassword] =
		useState<IRecoverPassword>({ email: "" });

	const [, setToken] = useState<TokenState>(() => {
		const token = localStorage.getItem(getToken);

		if (token) {
			api.defaults.headers.common.Authorization = `Bearer ${token}`;

			return { token };
		}

		return {} as TokenState;
	});

	const RefreshSession = async () => {
		const token = localStorage.getItem(getToken);

		setLoading(true);

		if (!token) {
			setLoading(false);

			return setAuthorization(false);
		}
		api.defaults.headers.common.Authorization = `Bearer ${token}`;

		return api
			.post("/auth/sessions")
			.then(({ data: { data } }) => {
				const { token } = data;

				setUserPerfil(data);
				setAuthorization(true);

				setToken(token);
				localStorage.setItem(getToken, token);
			})
			.catch((error) => {
				localStorage.removeItem(getToken);
				setAuthorization(false);

				return handleGetAlert({ message: error?.response?.data?.message });
			})
			.finally(() => setLoading(false));
	};

	useEffect(() => {
		RefreshSession();
	}, []);

	const handleLogin = async (data: IHandleLogin) => {
		setLoadingLogin(true);

		return api
			.post(`/auth/login`, {
				email: data.email.trim(),
				password: data.senha.trim(),
			})
			.then(({ data: { data } }) => {
				setLoading(true);
				const { token } = data;

				api.defaults.headers.common.Authorization = `Bearer ${token}`;
				setToken(token);

				setUserPerfil(data);

				localStorage.setItem(getToken, token);

				setValuesInputsLogins({ email: "", senha: "" });

				return setAuthorization(true);
			})
			.catch((error) =>
				handleGetAlert({ message: error.response.data.message }),
			)
			.finally(() => {
				setLoading(false);
				setLoadingLogin(false);
			});
	};

	return (
		<AuthContext.Provider
			value={{
				setValuesRecoverPassword,
				setValuesInputsRegister,
				valuesRecoverPassword,
				setValuesInputsLogins,
				valuesInputsRegister,
				valuesInputsLogins,
				setOpenModalFirst,
				setAuthorization,
				setLoadingLogin,
				RefreshSession,
				openModalFirst,
				setUserPerfil,
				authorization,
				loadingLogin,
				handleLogin,
				userPerfil,
				setToken,
				loading,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuthContext = (): IAuthContextType => useContext(AuthContext);
