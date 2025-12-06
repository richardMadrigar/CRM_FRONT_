import { ChangeEvent, useEffect } from "react";
import {
	Box,
	Grid,
	Alert,
	Radio,
	Switch,
	Button,
	TextField,
	FormLabel,
	Typography,
	RadioGroup,
	FormControl,
	InputAdornment,
	FormControlLabel,
	Divider,
} from "@mui/material";

import {
	Mic,
	Message,
	CloudUpload,
	Image as ImageIcon,
	Settings,
} from "@mui/icons-material";
import { CardCore } from "src/Pages/components/CardCore/CardCore";

import { IWhatsAppConfig } from "src/Contexts/ConnectionWhats/ContextConnectionWhatsTypes";
import { useContextConnectionWhats } from "src/Contexts/ConnectionWhats/ContextConnectionWhats";
import { ButtonCore } from "src/Pages/components/ButtonCore/ButtonCore";
import { UseFormUpdateSettings } from "./Hooks/UseFormUpdateSettings";

interface IFormSettingsResponse {
	id?: string;
}

export const FormSettingsResponse = ({ id }: IFormSettingsResponse) => {
	const {
		valuesSettingsWhats,
		setValuesSettingsWhats,
		dataGetConnectionWhats,
	} = useContextConnectionWhats();

	const { handleSubmit, loading } = UseFormUpdateSettings();

	useEffect(() => {
		if (dataGetConnectionWhats) {
			setValuesSettingsWhats({
				isAutoResponse:
					dataGetConnectionWhats.messages?.status === "ACTIVE" || false,
				isSaveContact: dataGetConnectionWhats.messages?.isSaveContact || false,
				message: dataGetConnectionWhats.messages?.text || "",
				image: dataGetConnectionWhats.messages?.file?.url || "",
				audio: dataGetConnectionWhats.messages?.file?.url || "",
				delayDays: String(dataGetConnectionWhats.messages?.delayDays) || "1",
				typeResponse: dataGetConnectionWhats.messages?.type || "TEXT",
			});
		}
	}, [dataGetConnectionWhats]);

	if (!id) return null;

	const handleChange =
		(prop: keyof IWhatsAppConfig) => (event: ChangeEvent<HTMLInputElement>) => {
			if (prop === "isAutoResponse") {
				return setValuesSettingsWhats((prevValue) => ({
					...prevValue,
					isAutoResponse: event.target.checked,
				}));
			}
			if (prop === "isSaveContact") {
				return setValuesSettingsWhats((prevValue) => ({
					...prevValue,
					isSaveContact: event.target.checked,
				}));
			}
			setValuesSettingsWhats((prevValue) => ({
				...prevValue,
				[prop]: event.target.value,
			}));
		};

	return (
		<CardCore sxStyle={{ m: 0 }}>
			<Box sx={{ display: "flex", justifyContent: "space-between" }}>
				<Box display="flex" alignItems="center">
					<Settings sx={{ mr: 1 }} fontSize="small" />
					<Typography variant="h6">Respostas Automáticas</Typography>
				</Box>

				<ButtonCore
					variant="contained"
					color="primary"
					title="Salvar Alterações"
					onClick={handleSubmit}
					disabled={loading}
				/>
			</Box>

			<Divider sx={{ my: 2 }} />

			<Grid container spacing={3}>
				<Grid item xs={12} md={6}>
					<FormControlLabel
						control={
							<Switch
								checked={valuesSettingsWhats.isSaveContact}
								onChange={handleChange("isSaveContact")}
							/>
						}
						label="Salvar Novos Contatos"
					/>
					<Typography variant="caption" color="text.secondary" display="block">
						Salva automaticamente novos contatos que enviarem mensagens
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<FormControlLabel
						control={
							<Switch
								checked={valuesSettingsWhats.isAutoResponse}
								onChange={handleChange("isAutoResponse")}
							/>
						}
						label="Ativar Resposta Automática"
					/>
					<Typography variant="caption" color="text.secondary" display="block">
						Envia automaticamente uma resposta para primeira mensagem recebida
					</Typography>
				</Grid>

				<Grid item xs={12}>
					<FormControl component="fieldset">
						<FormLabel component="legend">Tipo de Resposta</FormLabel>
						<RadioGroup
							row
							value={valuesSettingsWhats.typeResponse}
							onChange={handleChange("typeResponse")}
						>
							<FormControlLabel
								value="TEXT"
								control={<Radio />}
								label={
									<Box display="flex" alignItems="center">
										<Message sx={{ mr: 1 }} />
										Texto
									</Box>
								}
							/>
							<FormControlLabel
								value="IMAGE"
								control={<Radio />}
								label={
									<Box display="flex" alignItems="center">
										<ImageIcon sx={{ mr: 1 }} />
										Imagem com Texto
									</Box>
								}
							/>
							<FormControlLabel
								value="AUDIO"
								control={<Radio />}
								label={
									<Box display="flex" alignItems="center">
										<Mic sx={{ mr: 1 }} />
										Áudio
									</Box>
								}
							/>
						</RadioGroup>
					</FormControl>
				</Grid>

				<Grid item xs={12}>
					<TextField
						fullWidth
						multiline
						rows={2}
						label="Mensagem de Resposta"
						value={valuesSettingsWhats.message}
						onChange={handleChange("message")}
						placeholder="Digite a mensagem que será enviada automaticamente..."
						helperText="Esta mensagem será enviada automaticamente para novos contatos"
					/>
				</Grid>

				{valuesSettingsWhats.typeResponse === "IMAGE" && (
					<Grid item xs={12}>
						<Button
							variant="outlined"
							startIcon={<CloudUpload />}
							// onClick={() => handleFileUpload("image")}
							sx={{ mb: 2 }}
						>
							Selecionar Imagem
						</Button>
						{/* {formData.responseImage && (
                <Typography variant="body2" color="success.main">
                  ✓ Imagem selecionada: {formData.responseImage}
                </Typography>
              )} */}
					</Grid>
				)}

				{valuesSettingsWhats.typeResponse === "AUDIO" && (
					<Grid item xs={12}>
						<Button
							variant="outlined"
							startIcon={<CloudUpload />}
							// onClick={() => handleFileUpload("audio")}
							sx={{ mb: 2 }}
						>
							Selecionar Áudio
						</Button>
						{/* {formData.responseAudio && (
                <Typography variant="body2" color="success.main">
                  ✓ Áudio selecionado: {formData.responseAudio}
                </Typography>
              )} */}
					</Grid>
				)}

				<Grid item xs={12} md={5}>
					<TextField
						fullWidth
						label="Período para a próxima resposta"
						type="number"
						value={valuesSettingsWhats.delayDays}
						onChange={handleChange("delayDays")}
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">Dias:</InputAdornment>
							),
						}}
						helperText="Tempo de espera antes de enviar a proxima resposta automática, normalmente é 1 dia"
					/>
				</Grid>

				<Grid item xs={12}>
					<Alert severity="info">
						<Typography variant="body2">
							<strong>Como funciona:</strong> Quando uma primeira mensagem for
							recebida dentro do período configurado, a resposta automática será
							enviada após o delay especificado.
						</Typography>
					</Alert>
				</Grid>

				<Grid item xs={12}>
					<Alert severity="warning">
						<Typography variant="body2">
							<strong>Importante:</strong> Respostas automáticas são enviadas
							apenas para contatos que enviam a primeira mensagem.
						</Typography>
					</Alert>
				</Grid>
			</Grid>
		</CardCore>
	);
};
