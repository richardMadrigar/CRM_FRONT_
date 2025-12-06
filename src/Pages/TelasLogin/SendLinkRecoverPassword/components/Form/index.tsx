import { ButtonCore } from "src/Pages/components/ButtonCore/ButtonCore";
import { FormSendLinkRecoverPassword } from "./FormSendLinkRecoverPassword";
import { CircularProgress } from "@mui/material";
import { useConfigPageContext } from "src/Contexts/configPagesContext/configPagesContext";
import { UseFormRecoveryPassword } from "./Hooks/UseFormRecoveryPassword";

export const PageFormSendLinkRecoverPassword = () => {
	const { loadingGravar } = useConfigPageContext();
	const { handleSubmit } = UseFormRecoveryPassword();
	return (
		<>
			<FormSendLinkRecoverPassword />

			<ButtonCore
				fullWidth
				endIcon={
					loadingGravar && (
						<CircularProgress size={20} sx={{ color: "black", ml: 4 }} />
					)
				}
				title="Recuperar senha"
				onClick={handleSubmit}
			/>
		</>
	);
};
