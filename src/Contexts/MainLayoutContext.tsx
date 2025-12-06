import {
	SetStateAction as Action,
	createContext,
	useContext,
	useState,
	Dispatch,
	FC,
	ReactNode,
} from "react";

type IHandleError = { message: string; status?: string };

type AuthContextType = {
	setOPenAlert: Dispatch<Action<boolean>>;
	openAlert: boolean;
	setMessageAlert: Dispatch<Action<string>>;
	messageAlert: string;
	setStatusAlert: Dispatch<Action<string | undefined>>;
	statusAlert: string | undefined;
	setChangePassword: Dispatch<Action<string>>;
	changePassword: string;

	setValueWhatsUpdate: Dispatch<Action<string>>;
	valueWhatsUpdate: string;

	handleGetAlert({ message, status }: IHandleError): void;

	setOpenModalSubscriptions: Dispatch<Action<boolean>>;
	openModalSubscriptions: boolean;
	handleOpenModalSubscriptions: () => void;
	handleCloseModalSubscriptions: () => void;
};

const LayoutMainProvider = createContext({} as AuthContextType);

export const LayoutMainProviderContext: FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [valueWhatsUpdate, setValueWhatsUpdate] = useState("");
	const [changePassword, setChangePassword] = useState("password");
	const [messageAlert, setMessageAlert] = useState("");
	const [statusAlert, setStatusAlert] = useState<string | undefined>("");
	const [openAlert, setOPenAlert] = useState(false);

	const [openModalSubscriptions, setOpenModalSubscriptions] = useState(false);

	const handleGetAlert = ({ message, status }: IHandleError) => {
		setMessageAlert(message);
		setOPenAlert(true);
		setStatusAlert(status);
	};

	const handleOpenModalSubscriptions = () => {
		setOpenModalSubscriptions(true);
	};

	const handleCloseModalSubscriptions = () => {
		setOpenModalSubscriptions(false);
	};

	return (
		<LayoutMainProvider.Provider
			value={{
				setOpenModalSubscriptions,
				openModalSubscriptions,
				setValueWhatsUpdate,
				setChangePassword,
				valueWhatsUpdate,
				setMessageAlert,
				setStatusAlert,
				handleGetAlert,
				changePassword,
				setOPenAlert,
				messageAlert,
				statusAlert,
				openAlert,
				handleOpenModalSubscriptions,
				handleCloseModalSubscriptions,
			}}
		>
			{children}
		</LayoutMainProvider.Provider>
	);
};

export const useLayoutMainContext = (): AuthContextType =>
	useContext(LayoutMainProvider);
