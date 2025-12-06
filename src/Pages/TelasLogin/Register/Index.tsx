import { ButtonCore } from "src/Pages/components/ButtonCore/ButtonCore";
import { BasePageLogin } from "../components/BasePageLogin";

import { FooterRegister } from "./components/Footer";
import { FormLoginRegister } from "./components/Form/FormRegister";
import { UseFormRegister } from "./components/Form/Hooks/UseFormRegister";
import { HeaderRegister } from "./components/Header";
import { CircularProgress } from "@mui/material";
import { useConfigPageContext } from "src/Contexts/configPagesContext/configPagesContext";

export const PageLoginRegister = () => {
	const { handleSubmit } = UseFormRegister();
	const { loadingGravar } = useConfigPageContext();

	return (
		<BasePageLogin>
			<HeaderRegister />

			<FormLoginRegister />

			<ButtonCore
				fullWidth
				disabled={loadingGravar}
				title="Cadastre-se"
				type="submit"
				onClick={handleSubmit}
			>
				{loadingGravar && (
					<CircularProgress size={20} sx={{ color: "white", ml: 4 }} />
				)}
			</ButtonCore>

			<FooterRegister />
		</BasePageLogin>
	);
};
