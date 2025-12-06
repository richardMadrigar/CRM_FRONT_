import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";

import { GeneralSettings } from "./components/Connection/GeneralSettings";
import { useGetByIdConnection } from "./components/hooks/useGetByIdConnection";
import { FormSettingsResponse } from "./components/SettingsResponse/FormSettingsResponse";
import { Box, IconButton, Typography } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { useConfigPageContext } from "src/Contexts/configPagesContext/configPagesContext";
import { useContextConnectionWhats } from "src/Contexts/ConnectionWhats/ContextConnectionWhats";

export const WhatsappConfigPage = () => {
	const { handleGet } = useGetByIdConnection();
	const { openQrCodeModal, dataGetConnectionWhats } =
		useContextConnectionWhats();

	const { setId } = useConfigPageContext();
	const { id } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		if (id && !openQrCodeModal) {
			setId(id);
			handleGet(id);
		}
	}, [openQrCodeModal]);

	return (
		<>
			<Box display="flex" alignItems="center" mb={2}>
				<IconButton onClick={() => navigate(-1)} sx={{ mr: 1 }}>
					<ArrowBack />
				</IconButton>
				<Typography variant="h6">Voltar</Typography>
			</Box>

			<GeneralSettings id={id || undefined} />

			<FormSettingsResponse id={id || undefined} />
		</>
	);
};
