import { ChangeEvent } from "react";
import { Grid } from "@mui/material";
import { AppTextField } from "src/Pages/components/AppFormComponents/AppTextField";
import { useContextConnectionWhats } from "src/Contexts/ConnectionWhats/ContextConnectionWhats";
import { ICreateConnectionWhats } from "src/Contexts/ConnectionWhats/ContextConnectionWhatsTypes";

export const FormCreateInstances = () => {
	const { valuesInputsInstancesWhats, setValuesInputsInstancesWhats } =
		useContextConnectionWhats();

	const handleChange =
		(prop: keyof ICreateConnectionWhats) =>
		(event: ChangeEvent<HTMLInputElement>) => {
			setValuesInputsInstancesWhats((prevValue) => ({
				...prevValue,
				[prop]: event.target.value,
			}));
		};

	return (
		<Grid container item spacing={3}>
			<Grid item xs={12}>
				<AppTextField
					label="Nome da conexão"
					fullWidth
					placeholder="Chip para campanha de leads quentes"
					value={valuesInputsInstancesWhats?.title}
					onChange={handleChange("title")}
				/>
			</Grid>

			{/* <Grid item xs={12}>
        <AppTextField
          label="Descrição"
          fullWidth
          placeholder="Obs: Chip para teste"
          value={valuesInputsInstancesWhats?.description}
          onChange={handleChange("description")}
        />
      </Grid> */}
		</Grid>
	);
};
