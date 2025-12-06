import { ChangeEvent, createRef, useEffect } from "react";
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useAuthContext } from "src/Contexts/AuthContext/authContext";
import { ILogins } from "src/Contexts/AuthContext/AuthContextTypes";
import { AppTextField } from "src/Pages/components";

export const useStylesInput = makeStyles({
	input: {
		background: "white",
		color: "black",
	},
});

export const FormLogin = () => {
	const { valuesInputsLogins, setValuesInputsLogins } = useAuthContext();

	const classes = useStylesInput();

	const InputEmailRef = createRef<HTMLInputElement>();

	useEffect(() => {
		InputEmailRef.current?.focus();
	}, []);

	const handleChange =
		(prop: keyof ILogins) => (event: ChangeEvent<HTMLInputElement>) => {
			setValuesInputsLogins({
				...valuesInputsLogins,
				[prop]: event.target.value,
			});
		};

	return (
		<Grid
			container
			spacing={2}
			sx={{ display: "flex", flexDirection: "column", mb: { xs: 1, xl: 1.5 } }}
		>
			<Grid item>
				<AppTextField
					fullWidth
					InputProps={{ className: classes.input }}
					inputRef={InputEmailRef}
					label="Email"
					name="email"
					value={valuesInputsLogins.email}
					onChange={handleChange("email")}
				/>
			</Grid>

			<Grid item>
				<AppTextField
					fullWidth
					label="Senha"
					type="password"
					value={valuesInputsLogins.senha}
					onChange={handleChange("senha")}
					InputProps={{ className: classes.input }}
				/>
			</Grid>
		</Grid>
	);
};
