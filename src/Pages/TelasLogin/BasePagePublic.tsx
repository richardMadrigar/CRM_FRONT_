import { alpha, Box, Grid, Typography } from "@mui/material";
import { PublicRoutes } from "src/Routes/PublicRoutes";

// import backgroundImgDesktop from "./components/media/BackgroundLogin.png";
import { WhatsAppIcon } from "../components/Icons/Icons";

export const BasePagePublic = () => {
	return (
		<Box sx={{ p: 4, height: "100vh", boxSizing: "border-box" }}>
			<Box
				sx={{
					height: "100%",
					display: "flex",
					alignItems: "center",
				}}
			>
				<Grid container sx={{ height: "100%" }}>
					<Grid
						item
						xs={12}
						md={6}
						sx={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							borderRadius: { xs: "12px", md: 0 },
							boxShadow: {
								xs: "0px 0px 10px rgba(97, 97, 97, 0.384)",
								md: "none",
							},
							height: "100%", // ocupa o que sobrar, sem estourar
						}}
					>
						<PublicRoutes />
					</Grid>

					<Grid
						item
						xs={12}
						md={6}
						sx={{
							height: "100%", // ocupa toda a altura disponível
							overflow: "hidden",
							background: (theme) => alpha(theme.palette.primary.main, 0.1),
							borderRadius: "12px",
							display: "flex",
							flexDirection: "column",
						}}
					>
						<Box
							sx={{
								padding: "42px",
								flex: 1,
								display: "flex",
								flexDirection: "column",
							}}
						>
							<Box
								sx={{
									mb: "18px",
									backgroundColor: "#fff",
									border: "1px solid #989898ce",
									display: "inline-flex",
									alignItems: "center",
									borderRadius: "10px",
									padding: "4px 8px",
									gap: "6px",
									whiteSpace: "nowrap",
									width: "auto",
									maxWidth: "fit-content",
								}}
							>
								<Typography
									sx={{
										color: (theme) => theme.palette.grey[700],
										fontSize: "13px",
										fontWeight: 600,
									}}
								>
									CRM - Criar campanhas de email
								</Typography>
								<WhatsAppIcon color="primary" fontSize="small" />
							</Box>

							<Typography
								sx={{
									color: (theme) => theme.palette.grey[700],
									mb: "56px",
									width: "340px",
								}}
							>
								Responda automaticamente e esteja sempre presente{" "}
								<Box
									component="strong"
									sx={{ color: (theme) => theme.palette.primary.main }}
								>
									para seus clientes.
								</Box>
							</Typography>

							<Box
								sx={{
									flex: 1,
									display: "flex",
									alignItems: "flex-end",
									position: "relative",
									width: "100%",
									height: "100%",
									borderRadius: "12px",
									overflow: "hidden",
									// backgroundImage: `linear-gradient(to bottom, white, transparent), url(${backgroundImgDesktop})`,
									backgroundSize: "cover",
									backgroundPosition: "center",
								}}
							>
								<Box
									// component="img"
									// src={backgroundImgDesktop}
									sx={{
										width: "100%",
										height: "100%",
										objectFit: "cover",
										borderRadius: "12px",
										display: "block",
									}}
								/>

								{/* Gradiente */}
								{/* <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '30%', // altura do degradê
                    background: 'linear-gradient(to bottom, #a02c2cc5, #ff1515)',
                    borderRadius: '0 0 12px 12px', // segue o borderRadius da imagem
                    pointerEvents: 'none'
                  }}
                /> */}
							</Box>
						</Box>
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
};
