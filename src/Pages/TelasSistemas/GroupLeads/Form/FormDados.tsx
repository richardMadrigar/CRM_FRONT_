import { ChangeEvent } from "react";
import { Grid } from "@mui/material";
import { AppTextField } from "src/Pages/components";
import { useContextCampaign } from "src/Contexts/Campaign/ContextCampaign";
import { ICreateGroupLeads } from "src/Contexts/Campaign/CampaignContextTypes";

interface IFormDados {
	inputRef: React.RefObject<HTMLInputElement>;
}

export const FormDados = ({ inputRef }: IFormDados) => {
	const { valuesInputsGroupLeads, setValuesInputsGroupLeads } =
		useContextCampaign();

	const handleChange =
		(prop: keyof ICreateGroupLeads) =>
		(event: ChangeEvent<HTMLInputElement>) => {
			setValuesInputsGroupLeads((eventPrev) => ({
				...eventPrev,
				[prop]: event.target.value,
			}));
		};

	return (
		<Grid container spacing={2} sx={{ marginBottom: "16px" }}>
			<Grid item xs={12} md={4}>
				<AppTextField
					label="Nome do Grupo *"
					fullWidth
					placeholder="Leads frios"
					inputRef={inputRef}
					value={valuesInputsGroupLeads.name}
					onChange={handleChange("name")}
				/>
			</Grid>
			<Grid item xs={12} md={8}>
				<AppTextField
					label="Descrição *"
					fullWidth
					placeholder="Grupo de Leads frios do Instagram"
					value={valuesInputsGroupLeads.description}
					onChange={handleChange("description")}
				/>
			</Grid>
		</Grid>
	);
};
