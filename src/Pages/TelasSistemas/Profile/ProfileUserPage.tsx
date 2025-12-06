import { Box, Chip, Grid, Typography } from "@mui/material";
import { CardCore } from "src/Pages/components/CardCore/CardCore";

import { AppTextField } from "src/Pages/components";
import { ButtonCore } from "src/Pages/components/ButtonCore/ButtonCore";
import GppGoodIcon from "@mui/icons-material/GppGood";
import { FormDataUser } from "./Components/FormDataUser";
import { CardHeaderAvatar } from "./Components/CardHeaderAvatar";

export const ProfileUserPage = () => {
	return (
		<Grid container spacing={3}>
			<Grid item xs={12}>
				<CardHeaderAvatar />
			</Grid>

			<Grid item container spacing={3}>
				<Grid item xs={12} sm={7}>
					<FormDataUser />
				</Grid>

				<Grid item xs={12} sm={5}>
					<CardCore sxStyle={{ margin: 0 }}>
						<Box sx={{ display: "flex", alignItems: "center", mb: 5 }}>
							<GppGoodIcon sx={{ mr: 2.3 }} color="warning" />

							<Box sx={{ textAlign: "left" }}>
								<Typography sx={{ fontSize: { xs: "14px", sm: "16px" } }}>
									Senha
								</Typography>
								<Typography sx={{ fontSize: { xs: "12px", sm: "14px" } }}>
									Credenciais do usuário
								</Typography>

								<Chip label="Em manutenção" sx={{ mt: 1 }} />
							</Box>
						</Box>

						<Grid container item spacing={4} sx={{ mb: 4 }}>
							<Grid item xs={12}>
								<AppTextField
									label="Senha Atual"
									placeholder="Senha Atual"
									fullWidth
									disabled
								/>
							</Grid>
							<Grid item xs={12}>
								<AppTextField
									label="Nova senha"
									placeholder="Nova senha"
									fullWidth
									disabled
								/>
							</Grid>
							<Grid item xs={12}>
								<AppTextField
									label="Confirmar senha"
									placeholder="Confirmar senha"
									fullWidth
									disabled
								/>
							</Grid>
						</Grid>

						<Box
							sx={{
								display: "flex",
								justifyContent: "end",
								alignItems: "center",
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

							<ButtonCore title="Salvar" disabled />
						</Box>
					</CardCore>
				</Grid>
			</Grid>
		</Grid>
	);
};
