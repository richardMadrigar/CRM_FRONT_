import { ChangeEvent, useEffect, createRef } from "react";
import { Box } from "@mui/material";
import { AppTextField } from "src/Pages/components";
import { useStylesInput } from "src/Pages/TelasLogin/Login/components/FormLogin";
import { useAuthContext } from "src/Contexts/AuthContext/authContext";
import { IRecoverPassword } from "src/Contexts/AuthContext/AuthContextTypes";

export const FormSendLinkRecoverPassword = () => {
	const { setValuesRecoverPassword, valuesRecoverPassword } = useAuthContext();
	const classes = useStylesInput();

	const InputEmailRef = createRef<HTMLInputElement>();

	useEffect(() => {
		InputEmailRef.current?.focus();
	}, []);

	const handleChange =
		(prop: keyof IRecoverPassword) =>
		(event: ChangeEvent<HTMLInputElement>) => {
			setValuesRecoverPassword((eventPrev) => ({
				...eventPrev,
				[prop]: event.target.value,
			}));
		};

	return (
		<Box sx={{ marginBottom: "24px" }}>
			<AppTextField
				fullWidth
				InputProps={{ className: classes.input }}
				inputRef={InputEmailRef}
				label="Email"
				name="email"
				value={valuesRecoverPassword.email}
				onChange={handleChange("email")}
			/>
		</Box>
	);
};
