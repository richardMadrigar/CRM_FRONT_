import { SmsOutlined as SmsOutlinedIcon } from "@mui/icons-material";
import { Box, Divider, Grid, MenuItem, Typography } from "@mui/material";
import { type ChangeEvent, useState } from "react";
import type { ICreateCampaign } from "src/Contexts/Campaign/CampaignContextTypes";
import { useContextCampaign } from "src/Contexts/Campaign/ContextCampaign";
import { AppTextField } from "src/Pages/components";
import { EmailIcon } from "src/Pages/components/Icons/Icons";
import { CustomTabs } from "src/Pages/TelasSistemas/Templates/Form/FormDados";
import { HttpGetGroupLeadsAll } from "src/shared/Hooks/Https/HttpGetGroupLeadsAll";
import { HttpGetTemplatesEmailAll } from "src/shared/Hooks/Https/HttpGetTemplatesEmailAll";

export const FormCampaign = () => {
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

  const [mainTab, setMainTab] = useState("email");

  const mainTabs = [
    { label: "E-mail", value: "email", icon: <EmailIcon fontSize="small" style={{ verticalAlign: "middle", marginRight: 4 }} /> },
    { label: "SMS", value: "sms", icon: <SmsOutlinedIcon fontSize="small" style={{ verticalAlign: "middle", marginRight: 4 }} /> },
  ];

  const handleChangeMainTab = (
    _event: React.SyntheticEvent,
    newValue: string,
  ) => {
    setMainTab(newValue);
    setValuesInputsCampaign((eventPrev: ICreateCampaign) => ({
      ...eventPrev,
      type: newValue === "email" ? "EMAIL" : "SMS",
    }));
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sx={{ mb: 2 }}>
        <Box sx={{ width: "400px", margin: "0 auto" }}>
          <CustomTabs
            tabs={mainTabs}
            currentValue={mainTab}
            onChange={handleChangeMainTab}
          />
        </Box>
      </Grid>

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
          label={`Template de ${mainTab === "email" ? "E-mail" : "SMS"} *`}
          disabled={valuesInputsCampaign.status === "COMPLETED"}
          value={valuesInputsCampaign.templateId}
          onChange={handleChange("templateId")}
        >
          {resultListTemplatesEmail
            .filter(
              (option) => option.type.toUpperCase() === mainTab.toUpperCase(),
            )
            .map((option) => (
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

      {mainTab === "email" && (
        <>
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
        </>
      )}
    </Grid>
  );
};
