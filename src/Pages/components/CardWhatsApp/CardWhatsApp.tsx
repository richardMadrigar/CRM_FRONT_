import { Avatar, Chip, Box, Typography, Tooltip } from "@mui/material";
import { WhatsApp, Settings, People } from "@mui/icons-material";
import { CardCore } from "../CardCore/CardCore";
import { ButtonCore } from "../ButtonCore/ButtonCore";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import { RotatingCachedIcon } from "../Icons/RotatingCachedIcon";
import { formatString } from "@format-string/core";
import { Graphic } from "./Components/Graphic";
import { handleIfLimitCharacter } from "src/shared/Utils/LimitText";
import { SendIcon } from "../Icons/Icons";

interface ICardWhatsAppProps {
	title: string;
	number?: string | null;
	status: "created" | "connecting" | "close" | "open";
	messages: {
		status: "INACTIVE" | "ACTIVE";
		isSaveContact: boolean;
	};
	urlImage?: string | null;
	loadingTable: boolean;

	dataGraphic: {
		date: string;
		value: number;
	}[];

	handleGetQrCode: () => void;
	handleGetConnection: () => void;
	handleConfig: () => void;
}

export const objStatusConnection = {
	open: "Conectado",
	created: "Criado",
	connecting: "Desconectado",
	close: "Desconectado",
};

export const CardWhatsApp = ({
	title,
	number,
	status,
	urlImage,
	messages,
	dataGraphic,
	loadingTable,
	handleConfig,
	handleGetQrCode,
	handleGetConnection,
}: ICardWhatsAppProps) => {
	return (
		<CardCore
			sxStyle={{
				width: "100%",
				padding: 2,
				m: 0,
				mb: 2,
				display: "flex",
				justifyContent: "space-between",
				flexWrap: "wrap",
				"&:hover": {
					boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
				},
			}}
		>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					flexDirection: "column",

					width: { xs: "100%", md: "38%" },
					p: 2,
					border: (theme) =>
						`1px solid ${theme.palette.mode === "dark" ? "#333333" : "#eeeeee"}`,
					borderRadius: "12px",
					mb: { xs: 2, md: 0 },
				}}
			>
				<Box
					sx={{
						display: "flex",
						gap: 2,
						mb: 5,
						alignItems: "center",
						minWidth: "100%",
					}}
				>
					<Avatar
						sx={{
							bgcolor: "#25D366",
							width: 56,
							height: 56,
						}}
					>
						{urlImage ? (
							<img
								src={urlImage}
								alt="WhatsApp"
								style={{
									width: "100%",
									height: "100%",
									objectFit: "cover",
									borderRadius: "50%",
								}}
							/>
						) : (
							<WhatsApp sx={{ fontSize: 28 }} />
						)}
					</Avatar>

					<Box sx={{ width: "100%" }}>
						<Box
							sx={{
								display: "flex",
								gap: 1.5,
								alignItems: "center",
								justifyContent: "space-between",
								minWidth: "100%",
							}}
						>
							<Box
								sx={{
									display: "flex",
									gap: 1.5,
									alignItems: "center",
								}}
							>
								<Typography sx={{ fontWeight: 600, fontSize: 18 }}>
									{handleIfLimitCharacter({ value: title, LIMIT: 15 })}
								</Typography>

								<Chip
									label={objStatusConnection[status]}
									color={
										objStatusConnection[status] === "Conectado"
											? "success"
											: "error"
									}
									size="small"
									sx={{ fontWeight: 500, m: 0 }}
								/>
							</Box>

							<Box>
								<Tooltip title="Verificar Conexão">
									<RotatingCachedIcon
										onClick={() => handleGetConnection()}
										isLoading={loadingTable}
										tooltipTitle="Recarregar a página"
										iconButtonSx={{
											color: (theme) => theme.palette.primary.main,
										}}
									/>
								</Tooltip>
							</Box>
						</Box>

						<Box>
							<Typography
								variant="body2"
								color="text.secondary"
								sx={{ fontWeight: 500 }}
							>
								{number
									? formatString({ value: number, type: "phone" })
									: "Número não capturado"}
							</Typography>
						</Box>
					</Box>
				</Box>

				<Box
					sx={{
						display: "flex",
						gap: 1,
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					<Box sx={{ display: "flex", gap: 3 }}>
						<Box>
							<Box sx={{ display: "flex", gap: 0.5, alignItems: "center" }}>
								<Typography variant="caption" sx={{ color: "text.secondary" }}>
									Respostas
								</Typography>
								<SendIcon sx={{ fontSize: 13 }} />
							</Box>
							<Typography variant="body2" sx={{ fontWeight: 600 }}>
								{messages.status === "ACTIVE" ? "Sim" : "Não"}
							</Typography>
						</Box>
						<Box>
							<Box sx={{ display: "flex", gap: 0.5, alignItems: "center" }}>
								<Typography variant="caption" sx={{ color: "text.secondary" }}>
									Salvar
								</Typography>
								<People sx={{ fontSize: 13 }} />
							</Box>
							<Typography variant="body2" sx={{ fontWeight: 600 }}>
								{messages.isSaveContact ? "Sim" : "Não"}
							</Typography>
						</Box>
					</Box>
					<Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
						{status !== "open" && (
							<ButtonCore
								size="small"
								title="Gerar QRCode"
								onClick={() => handleGetQrCode()}
								endIcon={<QrCodeScannerIcon />}
							>
								Gerar QRCode
							</ButtonCore>
						)}

						<ButtonCore
							size="small"
							title="Configurar"
							variant="outlined"
							endIcon={<Settings />}
							onClick={() => handleConfig()}
						/>
					</Box>
				</Box>
			</Box>

			<Graphic data={dataGraphic} />
		</CardCore>
	);
};
