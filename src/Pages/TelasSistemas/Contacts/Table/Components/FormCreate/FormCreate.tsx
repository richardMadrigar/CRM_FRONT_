import { TabContext } from "@mui/lab";
import TabPanel from "@mui/lab/TabPanel";
import { Grid, MenuItem, Tab, Tabs } from "@mui/material";
import { type ChangeEvent, useState } from "react";
import { useContextContacts } from "src/Contexts/Contacts/ContextContacts";
import type { ICreateContacts } from "src/Contexts/Contacts/ContextContactsTypes";
import { AppTextField } from "src/Pages/components/AppFormComponents/AppTextField";

export const FormCreateContacts = () => {
  const { valuesInputsContacts, setValuesInputsContacts } =
    useContextContacts();

  const [value, setValue] = useState("1");

  const handleChangeTabs = (_event: React.SyntheticEvent, newValue: string) => {
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
        <Tab label="JSON" value="3" />
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
          <Grid item xs={6}>
            <AppTextField
              label="País"
              fullWidth
              placeholder="País"
              value={valuesInputsContacts?.country}
              onChange={handleChange("country")}
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
        <AppTextField
          label="JSON"
          fullWidth
          multiline
          rows={20}
          value={JSON.stringify(valuesInputsContacts?.data, null, 2)
            .replace(/\\/g, "")
            .split(",")
            .join(",\n")}
        // onChange={handleChange("json")}
        />
      </TabPanel>
    </TabContext>
  );
};
