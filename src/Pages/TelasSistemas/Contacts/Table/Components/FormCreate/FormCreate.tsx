import { ChangeEvent, useState } from "react";

import { Grid, MenuItem, Tab, Tabs } from "@mui/material";
import { AppTextField } from "src/Pages/components/AppFormComponents/AppTextField";
import { useContextContacts } from "src/Contexts/Contacts/ContextContacts";
import { ICreateContacts } from "src/Contexts/Contacts/ContextContactsTypes";
import TabPanel from "@mui/lab/TabPanel";
import { TabContext } from "@mui/lab";

export const FormCreateContacts = () => {
  const { valuesInputsContacts, setValuesInputsContacts } =
    useContextContacts();

  const [value, setValue] = useState("1");

  const handleChangeTabs = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const handleChange =
    (prop: keyof ICreateContacts) => (event: ChangeEvent<HTMLInputElement>) => {
      setValuesInputsContacts((prevValue) => ({
        ...prevValue,
        [prop]: event.target.value,
      }));
    };

  return (
    <TabContext value={value}>
      <Tabs
        value={value}
        onChange={handleChangeTabs}
        variant="scrollable"
        scrollButtons="auto"
        sx={{ mb: 2 }}
      >
        <Tab label="Dados Básicos" value="1" />
        <Tab label="Endereço" value="2" />
        <Tab label="Redes Sociais" value="3" />
        <Tab label="JSON" value="4" />
      </Tabs>

      <TabPanel
        value="1"
        sx={{
          border: "1px solid #84848437",
          borderRadius: "10px",
          padding: "22px",
        }}
      >
        <Grid container item spacing={3}>
          <Grid item xs={6}>
            <AppTextField
              label="Nome do contato"
              fullWidth
              placeholder="Nome completo"
              value={valuesInputsContacts?.name}
              onChange={handleChange("name")}
            />
          </Grid>
          <Grid item xs={6}>
            <AppTextField
              fullWidth
              label="Email"
              placeholder="email@exemplo.com"
              value={valuesInputsContacts?.email}
              onChange={handleChange("email")}
            />
          </Grid>

          <Grid item xs={4}>
            <AppTextField
              label="Número do contato 1"
              fullWidth
              placeholder="(11) 99999-9999"
              value={valuesInputsContacts?.phone1}
              onChange={handleChange("phone1")}
            />
          </Grid>

          <Grid item xs={4}>
            <AppTextField
              label="Número do contato 2"
              fullWidth
              placeholder="(11) 99999-9999"
              value={valuesInputsContacts?.phone2}
              onChange={handleChange("phone2")}
            />
          </Grid>
          <Grid item xs={4}>
            <AppTextField
              label="Número do contato 3"
              fullWidth
              placeholder="(11) 99999-9999"
              value={valuesInputsContacts?.phone3}
              onChange={handleChange("phone3")}
            />
          </Grid>

          <Grid item xs={6} md={4}>
            <AppTextField
              fullWidth
              select
              label="Nível de interesse *"
              value={valuesInputsContacts?.interestLevel}
              onChange={handleChange("interestLevel")}
            >
              <MenuItem value="HIGH">Alto</MenuItem>
              <MenuItem value="MEDIUM">Médio</MenuItem>
              <MenuItem value="LOW">Baixo</MenuItem>
            </AppTextField>
          </Grid>
          <Grid item xs={6} md={4}>
            <AppTextField
              fullWidth
              select
              label="Status lead *"
              value={valuesInputsContacts?.status}
              onChange={handleChange("status")}
            >
              <MenuItem value="NEW">Novo</MenuItem>
              <MenuItem value="IN_CONTACT">Em contato</MenuItem>
              <MenuItem value="PROPOSAL_SENT">Proposta enviada</MenuItem>
              <MenuItem value="PROGRESS">Em andamento</MenuItem>
              <MenuItem value="FUTURE_RECONTACT">Futuro contato</MenuItem>
              <MenuItem value="DISQUALIFIED">Desqualificado</MenuItem>
              <MenuItem value="LOST">Perdido</MenuItem>
            </AppTextField>
          </Grid>

          <Grid item xs={12} md={4}>
            <AppTextField
              fullWidth
              select
              label="Fonte do lead *"
              value={valuesInputsContacts?.sourceCollection}
              onChange={handleChange("sourceCollection")}
            >
              <MenuItem value="INDICATION">Indicação</MenuItem>
              <MenuItem value="GOOGLE">Google</MenuItem>
              <MenuItem value="FORM">Formulários</MenuItem>
              <MenuItem value="LADING_PAGE">Landing Page</MenuItem>

              <MenuItem value="FACEBOOK">FaceBook</MenuItem>
              <MenuItem value="INSTAGRAM">Instagram </MenuItem>
              <MenuItem value="LINKEDIN">LinkeDIn</MenuItem>

              <MenuItem value="EMAIL_MARKETING">Email</MenuItem>
              <MenuItem value="MARKETING">Marketing</MenuItem>
              <MenuItem value="DUTY">Plantão</MenuItem>
              <MenuItem value="STREET">Rua</MenuItem>
              <MenuItem value="LISTING">Listagem</MenuItem>
            </AppTextField>
          </Grid>

          <Grid item xs={6} md={4}>
            <AppTextField
              fullWidth
              select
              label="Tipo ( PF | PJ ) *"
              value={valuesInputsContacts?.typeCompany}
              onChange={handleChange("typeCompany")}
            >
              <MenuItem value="NONE">Não informar</MenuItem>
              <MenuItem value="PF">Individual</MenuItem>
              <MenuItem value="PJ">Empresa</MenuItem>
            </AppTextField>
          </Grid>

          <Grid item xs={12} md={4}>
            <AppTextField
              fullWidth
              label="CPF"
              placeholder="000.000.000-00"
              value={valuesInputsContacts?.cpf}
              onChange={handleChange("cpf")}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <AppTextField
              fullWidth
              label="CNPJ"
              placeholder="00.000.000/0000-00"
              value={valuesInputsContacts?.cnpj}
              onChange={handleChange("cnpj")}
            />
          </Grid>

          <Grid item xs={6} md={4}>
            <AppTextField
              fullWidth
              label="Data de captura"
              type="date"
              value={valuesInputsContacts?.dateCapture}
              onChange={handleChange("dateCapture")}
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <AppTextField
              fullWidth
              label="Data de fundação"
              type="date"
              value={valuesInputsContacts?.foundedAt}
              onChange={handleChange("foundedAt")}
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <AppTextField
              fullWidth
              label="Tamanho da empresa"
              value={valuesInputsContacts?.companySize}
              onChange={handleChange("companySize")}
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <AppTextField
              fullWidth
              label="Razão da perda"
              value={valuesInputsContacts?.reasonLoss}
              onChange={handleChange("reasonLoss")}
            />
          </Grid>

          <Grid item xs={12}>
            <AppTextField
              fullWidth
              label="Observação"
              minRows={3}
              maxRows={3}
              multiline
              value={valuesInputsContacts?.description}
              onChange={handleChange("description")}
            />
          </Grid>
        </Grid>
      </TabPanel>

      <TabPanel
        value="2"
        sx={{
          border: "1px solid #84848437",
          borderRadius: "10px",
          padding: "22px",
        }}
      >
        <Grid container item spacing={3}>
          <Grid item xs={6}>
            <AppTextField
              label="Estado"
              fullWidth
              placeholder="Estado"
              value={valuesInputsContacts?.state}
              onChange={handleChange("state")}
            />
          </Grid>

          <Grid item xs={6}>
            <AppTextField
              label="Cidade"
              fullWidth
              placeholder="Cidade"
              value={valuesInputsContacts?.city}
              onChange={handleChange("city")}
            />
          </Grid>
          <Grid item xs={6}>
            <AppTextField
              label="Rua"
              fullWidth
              placeholder="Rua"
              value={valuesInputsContacts?.street}
              onChange={handleChange("street")}
            />
          </Grid>
          <Grid item xs={6}>
            <AppTextField
              label="CEP"
              fullWidth
              placeholder="CEP"
              value={valuesInputsContacts?.zipCode}
              onChange={handleChange("zipCode")}
            />
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel
        value="3"
        sx={{
          border: "1px solid #84848437",
          borderRadius: "10px",
          padding: "22px",
        }}
      >
        <Grid container item spacing={3}>
          <Grid item xs={6}>
            <AppTextField
              label="Instagram"
              fullWidth
              placeholder="Instagram"
              value={valuesInputsContacts?.instagram}
              onChange={handleChange("instagram")}
            />
          </Grid>

          <Grid item xs={6}>
            <AppTextField
              label="Website"
              fullWidth
              placeholder="Website"
              value={valuesInputsContacts?.website}
              onChange={handleChange("website")}
            />
          </Grid>
        </Grid>
      </TabPanel>

      <TabPanel
        value="4"
        sx={{
          border: "1px solid #84848437",
          borderRadius: "10px",
          padding: "22px",
        }}
      >
        <AppTextField
          label="JSON"
          fullWidth
          multiline
          rows={20}
          value={
            JSON.stringify(
              valuesInputsContacts?.data,
              null,
              2
            )
              .replace(/\\/g, "")
              .split(",")
              .join(",\n")
          }
        // onChange={handleChange("json")}
        />
      </TabPanel>
    </TabContext>
  );
};
