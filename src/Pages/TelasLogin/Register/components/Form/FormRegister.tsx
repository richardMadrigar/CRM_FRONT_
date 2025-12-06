import { ChangeEvent, createRef, useEffect } from "react";
import { formatString } from "@format-string/core";
import { Grid } from "@mui/material";
import { AppTextField } from "src/Pages/components";
import { useStylesInput } from "src/Pages/TelasLogin/Login/components/FormLogin";
import { useAuthContext } from "src/Contexts/AuthContext/authContext";
import { ICreateRegister } from "src/Contexts/AuthContext/AuthContextTypes";

export const FormLoginRegister = () => {
	const { valuesInputsRegister, setValuesInputsRegister } = useAuthContext();

	const classes = useStylesInput();

	const InputNomeRef = createRef<HTMLInputElement>();

	useEffect(() => {
		InputNomeRef.current?.focus();
	}, []);

	const handleChange =
		(prop: keyof ICreateRegister, option?: "phone") =>
		(event: ChangeEvent<HTMLInputElement>) => {
			if (option === "phone") {
				setValuesInputsRegister((prevValue) => ({
					...prevValue,
					[prop]: formatString({ value: event.target.value, type: "phone" }),
				}));
			} else {
				setValuesInputsRegister((eventPrev) => ({
					...eventPrev,
					[prop]: event.target.value,
				}));
			}
		};

	return (
		<Grid container spacing={2} sx={{ marginBottom: "1rem" }}>
			<Grid item xs={12}>
				<AppTextField
					fullWidth
					InputProps={{ className: classes.input }}
					inputRef={InputNomeRef}
					label="Nome completo *"
					name="Nome"
					value={valuesInputsRegister.name}
					onChange={handleChange("name")}
				/>
			</Grid>

			<Grid item xs={12}>
				<AppTextField
					fullWidth
					InputProps={{ className: classes.input }}
					label="Email *"
					name="email"
					value={valuesInputsRegister.email}
					onChange={handleChange("email")}
				/>
			</Grid>

			<Grid item xs={12}>
				<AppTextField
					fullWidth
					InputProps={{ className: classes.input }}
					label="Senha *"
					name="senha"
					value={valuesInputsRegister.password}
					onChange={handleChange("password")}
				/>
			</Grid>
		</Grid>
	);
};
