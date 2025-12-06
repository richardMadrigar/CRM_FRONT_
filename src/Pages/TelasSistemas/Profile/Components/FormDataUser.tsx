import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import { ChangeEvent, useEffect } from "react";

import { AppTextField } from "src/Pages/components/AppFormComponents/AppTextField";
import { apenasNumeros } from "src/shared/Utils/FormatMoney";
import { cpfOurCnpj } from "src/shared/Utils/MaskCpfCnpj";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useAuthContext } from "src/Contexts/AuthContext/authContext";
import { IUsers } from "src/Contexts/AuthContext/AuthContextTypes";
import { useIsValidNumberWhats } from "src/shared/Hooks/useIsValidNumberWhats";
import { useContextProfileContext } from "src/Contexts/ContextProfile/ContextProfile";
import { UseFormDataUser } from "./Hooks/UseFormDataUser";
import { CardCore } from "src/Pages/components/CardCore/CardCore";
import { PersonIcon } from "src/Pages/components/Icons/Icons";
import { ButtonCore } from "src/Pages/components/ButtonCore/ButtonCore";
import { FormCore } from "src/Pages/components";

export const FormDataUser = () => {
	const { userPerfil } = useAuthContext();

	const { valuesUpdateProfile, setValuesUpdateProfile } =
		useContextProfileContext();

	const { handleSubmit, loading } = UseFormDataUser();

	useEffect(() => {
		setValuesUpdateProfile({
			email: userPerfil?.email || "",
			name: userPerfil?.name || "",
			phone1: userPerfil?.phone1 || "",
		});
	}, [userPerfil]);

	const {
		isWhatsValid,
		handle: handleIsValidWhats,
		isLoading: isLoadingValidationWhats,
	} = useIsValidNumberWhats();

	const isWhatsLength = apenasNumeros(userPerfil?.phone1)?.length === 11;
	const isNotWhatsValid = !isWhatsValid && isWhatsLength;

	useEffect(() => {
		if (isWhatsLength) {
			handleIsValidWhats(userPerfil?.phone1 as string);
		}
	}, [userPerfil?.phone1]);

	const handleChange =
		(prop: keyof IUsers, option?: "cpf" | "phone") =>
		(event: ChangeEvent<HTMLInputElement>) => {
			if (option === "phone") {
				setValuesUpdateProfile((eventPrev) => ({
					...eventPrev,
					[prop]: cpfOurCnpj({ text: event.target.value, type: "phone" }),
				}));
			} else {
				setValuesUpdateProfile((eventPrev) => ({
					...eventPrev,
					[prop]: event.target.value,
				}));
			}
		};

	return (
		<CardCore sxStyle={{ margin: 0 }}>
			<Box sx={{ display: "flex", alignItems: "center", mb: 5 }}>
				<PersonIcon sx={{ mr: 2.3 }} color="success" />

				<Box sx={{ textAlign: "left" }}>
					<Typography sx={{ fontSize: { xs: "14px", sm: "16px" } }}>
						Informações pessoais
					</Typography>
					<Typography sx={{ fontSize: { xs: "12px", sm: "14px" } }}>
						Dados do usuário
					</Typography>
				</Box>
			</Box>

			<FormCore sxStyle={{ m: 0 }}>
				<Grid container spacing={4} sx={{ mb: 4 }}>
					<Grid item xs={12}>
						<AppTextField
							label="Nome completo"
							placeholder="João da Silva"
							fullWidth
							value={valuesUpdateProfile?.name}
							onChange={handleChange("name")}
						/>
					</Grid>

					<Grid item xs={12}>
						<AppTextField
							label="CPF"
							placeholder="João da Silva"
							fullWidth
							value={cpfOurCnpj({ text: userPerfil?.cpf || "", type: "cpf" })}
							disabled
						/>
					</Grid>

					<Grid item xs={12}>
						<AppTextField
							label="E-mail"
							placeholder="joao_silva@hotmail.com"
							fullWidth
							value={valuesUpdateProfile?.email}
							onChange={handleChange("email")}
						/>
					</Grid>

					<Grid item xs={12}>
						<Box sx={{ display: "flex", alignItems: "center" }}>
							<AppTextField
								label="WhatsApp"
								placeholder="(DD) xxxxx-xxxx"
								fullWidth
								value={cpfOurCnpj({
									text: valuesUpdateProfile?.phone1,
									type: "phone",
								})}
								sxStyle={{ mr: "8px" }}
								onChange={handleChange("phone1", "phone")}
							/>
							{isLoadingValidationWhats ? (
								<CircularProgress color="inherit" size="1em" />
							) : (
								<WhatsAppIcon
									fontSize="small"
									color={isNotWhatsValid ? "error" : "success"}
								/>
							)}
						</Box>
					</Grid>
				</Grid>

				<Box
					sx={{
						display: "flex",
						justifyContent: "end",
						alignItems: "end",
					}}
				>
					{/* <Box sx={{ textAlign: "start" }}>
            <Typography
              color="text.secondary"
              sx={{ fontSize: { xs: "12px", sm: "14px" } }}
            >
              Ultima edição:
            </Typography>
            <Typography
              color="text.secondary"
              sx={{ fontSize: { xs: "12px", sm: "14px" } }}
            >
              02/02/2025 as 15:32
            </Typography>
          </Box> */}

					<ButtonCore
						title="Salvar"
						type="submit"
						onClick={handleSubmit}
						disabled={loading}
					/>
				</Box>
			</FormCore>
		</CardCore>
	);
};
