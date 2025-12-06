import { Avatar, Box, Chip, Typography } from "@mui/material";
import { CardCore } from "src/Pages/components/CardCore/CardCore";
import { ButtonCore } from "src/Pages/components/ButtonCore/ButtonCore";
import { InfoOutlined, QrCode2 } from "@mui/icons-material";
import { CardAlerts } from "src/Pages/components/CardAlerts/CardAlerts";

import { useContextConnectionWhats } from "src/Contexts/ConnectionWhats/ContextConnectionWhats";
import { formatString } from "@format-string/core";
import { WhatsAppIcon } from "src/Pages/components/Icons/Icons";
import { objStatusConnection } from "src/Pages/components/CardWhatsApp/CardWhatsApp";
interface IGeneralSettingsProps {
	id?: string;
}

export const GeneralSettings = ({ id }: IGeneralSettingsProps) => {
	const { dataGetConnectionWhats, setOpenQrCodeModal } =
		useContextConnectionWhats();

	return (
		<>
			{/* <ModalInstancesWhatsQrCode id={id || ""} /> */}
			<CardCore sxStyle={{ m: 0, mb: 2 }}>
				<Box display="flex" alignItems="center">
					<WhatsAppIcon sx={{ mr: 1 }} fontSize="small" />
					<Typography variant="h6" sx={{ mr: 2 }}>
						Conta WhatsApp
					</Typography>
					<Chip
						label={objStatusConnection[dataGetConnectionWhats.status]}
						color={
							objStatusConnection[dataGetConnectionWhats.status] === "Conectado"
								? "success"
								: "error"
						}
						size="small"
						sx={{ fontWeight: 500 }}
					/>
				</Box>

				{dataGetConnectionWhats.status !== "open" && (
					<CardAlerts
						title="Seu whatsApp ainda não está conectado. Gere um QR Code para começar."
						icon={<InfoOutlined color="info" />}
						sxStyle={{ p: 3 }}
						action={
							<ButtonCore
								title="Gerar QR Code"
								startIcon={<QrCode2 />}
								onClick={() => {
									setOpenQrCodeModal(true);
								}}
							/>
						}
					/>
				)}
				<Box sx={{ display: "flex", alignItems: "center", gap: 2, p: 2 }}>
					<Avatar
						src={dataGetConnectionWhats.urlImage || ""}
						alt="Foto do perfil"
						sx={{ width: 64, height: 64 }}
					/>
					<Box>
						<Typography variant="h6">{dataGetConnectionWhats.title}</Typography>
						<Typography variant="body2" color="text.secondary">
							{formatString({
								value: dataGetConnectionWhats.number || "",
								type: "phone",
							}) || "Número não disponível"}
						</Typography>
					</Box>
				</Box>
			</CardCore>
		</>
	);
};
