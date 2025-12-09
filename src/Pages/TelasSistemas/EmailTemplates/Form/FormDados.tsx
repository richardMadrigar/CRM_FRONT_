import { TabContext, TabPanel } from "@mui/lab";

import { Divider, Grid, Tab, Tabs } from "@mui/material";
import { type ChangeEvent, useState } from "react";
import { useContextEmailTemplates } from "src/Contexts/EmailTemplates/ContextEmailTemplates";
import type { ICreateEmailTemplate } from "src/Contexts/EmailTemplates/EmailTemplatesContextTypes";
import { AppTextField } from "src/Pages/components";
import { CardCore } from "src/Pages/components/CardCore/CardCore";

interface IFormDados {
  inputRef: React.RefObject<HTMLInputElement>;
}

export const FormDados = ({ inputRef }: IFormDados) => {
  const { valuesInputsEmailTemplate, setValuesInputsEmailTemplate } =
    useContextEmailTemplates();

  const [value, setValue] = useState("1");

  const handleChangeTabs = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const handleChange =
    (prop: keyof ICreateEmailTemplate) =>
      (event: ChangeEvent<HTMLInputElement>) => {
        setValuesInputsEmailTemplate((eventPrev) => ({
          ...eventPrev,
          [prop]: event.target.value,
        }));
      };

  return (
    <Grid container spacing={2} sx={{ marginBottom: "16px" }}>
      <Grid item xs={6}>
        <AppTextField
          label="Título do Template *"
          fullWidth
          placeholder="Ex: Boas-vindas"
          inputRef={inputRef}
          value={valuesInputsEmailTemplate.name}
          onChange={handleChange("name")}
        />
      </Grid>

      <Grid item xs={6}>
        <AppTextField
          label="Descrição do Template *"
          fullWidth
          placeholder="Digite a descrição do template..."
          value={valuesInputsEmailTemplate.description}
          onChange={handleChange("description")}
        />
      </Grid>

      <Grid item xs={12}>
        <Divider >Mensagem de SMS</Divider>
      </Grid>

      <Grid item xs={6}>
        <AppTextField
          label="Mensagem de SMS *"
          fullWidth
          placeholder="Digite a mensagem de SMS..."
          value={valuesInputsEmailTemplate.message}
          onChange={handleChange("message")}
        />
      </Grid>

      <Grid item xs={12}>
        <TabContext value={value}>
          <Tabs
            value={value}
            onChange={handleChangeTabs}
            variant="scrollable"
            scrollButtons="auto"
            sx={{ mb: 5 }}
          >
            <Tab label="HTML do Template" value="1" />
            <Tab label="Template" value="2" />
          </Tabs>

          <Grid item xs={12}>
            <TabPanel value="1" sx={{ padding: 0 }}>
              <AppTextField
                label="HTML do Template *"
                fullWidth
                multiline
                rows={20}
                placeholder="Digite o HTML do template..."
                value={valuesInputsEmailTemplate.htmlContent}
                onChange={handleChange("htmlContent")}
              />
            </TabPanel>

            <TabPanel value="2" sx={{ padding: 0 }}>
              <CardCore sx={{ margin: 0 }}>
                <div
                  dangerouslySetInnerHTML={{
                    __html: valuesInputsEmailTemplate.htmlContent,
                  }}
                />
              </CardCore>
            </TabPanel>
          </Grid>
        </TabContext>
      </Grid>
    </Grid>
  );
};
