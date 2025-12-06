import { ChangeEvent, useEffect, useState } from "react";
import { Box, Divider, Grid, MenuItem, Typography } from "@mui/material";
import { AppTextField } from "src/Pages/components";

import { useContextCampaign } from "src/Contexts/Campaign/ContextCampaign";
import { ICreateCampaign } from "src/Contexts/Campaign/CampaignContextTypes";
import { cpfOurCnpj } from "src/shared/Utils/MaskCpfCnpj";
import { HttpGetGroupLeadsAll } from "src/shared/Hooks/Https/HttpGetGroupLeadsAll";
import { HttpGetTemplatesEmailAll } from "src/shared/Hooks/Https/HttpGetTemplatesEmailAll";

export const FormContrato = () => {
	const { valuesInputsCampaign, setValuesInputsCampaign } =
		useContextCampaign();

	const { data: resultListGroupsLeads } = HttpGetGroupLeadsAll();
	const { data: resultListTemplatesEmail } = HttpGetTemplatesEmailAll();

	const handleChange =
		(prop: keyof ICreateCampaign) => (event: ChangeEvent<HTMLInputElement>) => {
			setValuesInputsCampaign((eventPrev) => ({
				...eventPrev,
				[prop]: event.target.value,
			}));
		};

	return (
		<Grid container spacing={3}>
			<Grid item xs={12} md={12}>
				<AppTextField
					label="Nome da campanha *"
					fullWidth
					disabled={valuesInputsCampaign.status === "COMPLETED"}
					placeholder="Nome da campanha"
					value={valuesInputsCampaign.name}
					onChange={handleChange("name")}
				/>
			</Grid>

			<Grid item xs={6} md={6}>
				<AppTextField
					fullWidth
					select
					label="Grupo de leads"
					disabled={valuesInputsCampaign.status === "COMPLETED"}
					value={valuesInputsCampaign.groupLeadsId}
					onChange={handleChange("groupLeadsId")}
				>
					{resultListGroupsLeads.map((option) => (
						<MenuItem key={option.id} value={option.id} sx={{ mb: "8px" }}>
							<Typography sx={{ mb: "4px" }}>
								{option.name} ({option.countLeads || 0} Leads)
							</Typography>
						</MenuItem>
					))}
				</AppTextField>
			</Grid>

			<Grid item xs={6} md={6}>
				<AppTextField
					fullWidth
					select
					label="Template de E-mail *"
					disabled={valuesInputsCampaign.status === "COMPLETED"}
					value={valuesInputsCampaign.templateId}
					onChange={handleChange("templateId")}
				>
					{resultListTemplatesEmail.map((option) => (
						<MenuItem key={option.id} value={option.id} sx={{ mb: "8px" }}>
							<Typography sx={{ mb: "4px" }}>{option.name}</Typography>
						</MenuItem>
					))}
				</AppTextField>
			</Grid>

			<Grid item xs={12} lg={6}>
				<AppTextField
					label="Data do disparo *"
					fullWidth
					type="date"
					value={valuesInputsCampaign.date}
					onChange={handleChange("date")}
				/>
			</Grid>

			<Grid item xs={12} lg={6}>
				<AppTextField
					label="Horário do disparo *"
					fullWidth
					type="time"
					value={valuesInputsCampaign.hour}
					onChange={handleChange("hour")}
				/>
			</Grid>

			<Grid item xs={12} md={12}>
				<Divider />
			</Grid>

			<Grid item xs={12} md={6}>
				<AppTextField
					label="Assunto *"
					fullWidth
					placeholder="Assunto"
					value={valuesInputsCampaign.subject}
					onChange={handleChange("subject")}
				/>
			</Grid>
			<Grid item xs={12} md={6}>
				<AppTextField
					label="Nome do envio *"
					fullWidth
					placeholder="Nome do remetente"
					value={valuesInputsCampaign.senderName}
					onChange={handleChange("senderName")}
				/>
			</Grid>
			<Grid item xs={12} md={12}>
				<AppTextField
					label="Email de envio *"
					fullWidth
					placeholder="Email de envio"
					value={valuesInputsCampaign.senderEmail}
					onChange={handleChange("senderEmail")}
				/>
			</Grid>
		</Grid>
	);
};
