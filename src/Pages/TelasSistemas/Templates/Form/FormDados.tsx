import { TabContext, TabPanel } from "@mui/lab";

import { Box, Grid, styled, Tab, Tabs } from "@mui/material";
import { type ChangeEvent, useEffect, useState } from "react";
import { useContextEmailTemplates } from "src/Contexts/EmailTemplates/ContextEmailTemplates";
import type { ICreateEmailTemplate } from "src/Contexts/EmailTemplates/EmailTemplatesContextTypes";
import { AppTextField } from "src/Pages/components";
import { CardCore } from "src/Pages/components/CardCore/CardCore";

interface TabItem {
  icon?: React.ReactNode;
  label: string;
  value: string;
}

interface CustomTabsProps {
  tabs: TabItem[];
  currentValue: string;
  onChange: (event: React.SyntheticEvent, newValue: string) => void;
}

export const CustomTabs: React.FC<CustomTabsProps> = ({
  tabs, currentValue, onChange
}) => {
  const TabsContainer = styled(Box)(() => ({
    display: 'flex',
    backgroundColor: '#e0e0e0b6',
    padding: '4px',
    borderRadius: '8px',
    overflow: 'hidden',
    margin: '0 auto',
    minWidth: '100%',
  }));

  const TabButton = styled(Box)<{ isSelected: boolean }>(({ isSelected }) => ({
    padding: '8px 16px',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
    backgroundColor: isSelected ? '#3980F5' : '#d4d4d4',
    color: isSelected ? '#FFFFFF' : '#6C757D',
    fontWeight: 500,
    fontSize: '14px',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    '&:hover': {
      backgroundColor: isSelected ? '#1E90FF' : '#E0E0E0',
    },
    '&:first-of-type': {
      borderTopLeftRadius: '8px',
      borderBottomLeftRadius: '8px',
    },
    '&:last-of-type': {
      borderTopRightRadius: '8px',
      borderBottomRightRadius: '8px',
    },
  }));

  return (
    <TabsContainer>
      <Grid container spacing={1}>
        {tabs.map((tab) => (
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6} key={tab.value}>
            <TabButton
              isSelected={currentValue === tab.value}
              onClick={(e) => onChange(e, tab.value)}
            >
              {tab.icon}
              {tab.label}
            </TabButton>
          </Grid>
        ))}
      </Grid>
    </TabsContainer>
  );
};

interface IFormDados {
  inputRef: React.RefObject<HTMLInputElement>;
}

export const FormDados = ({ inputRef }: IFormDados) => {
  const { valuesInputsEmailTemplate, setValuesInputsEmailTemplate } =
    useContextEmailTemplates();

  const [mainTab, setMainTab] = useState("email");
  const [emailSubTab, setEmailSubTab] = useState("html");
  const [smsSubTab, setSmsSubTab] = useState("message");

  const handleChangeMainTab = (_event: React.SyntheticEvent, newValue: string) => {
    setMainTab(newValue);
    setValuesInputsEmailTemplate((eventPrev: ICreateEmailTemplate) => ({
      ...eventPrev,
      type: newValue === "email" ? "EMAIL" : "SMS",
    }));
  };

  const handleChangeEmailSubTab = (_event: React.SyntheticEvent, newValue: string) => {
    setEmailSubTab(newValue);
  };

  const handleChangeSmsSubTab = (_event: React.SyntheticEvent, newValue: string) => {
    setSmsSubTab(newValue);
  };

  useEffect(() => {
    setMainTab(valuesInputsEmailTemplate.type === "EMAIL" ? "email" : "sms");
  }, [valuesInputsEmailTemplate.type]);

  const mainTabs = [
    { label: "Email", value: "email" },
    { label: "SMS", value: "sms" },
  ];

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

      <Grid item xs={6} sx={{ mb: "32px" }}>
        <AppTextField
          label="Descrição do Template *"
          fullWidth
          placeholder="Digite a descrição do template..."
          value={valuesInputsEmailTemplate.description}
          onChange={handleChange("description")}
        />
      </Grid>

      <Grid item xs={12} sx={{ mb: 2 }}>
        <Box sx={{ width: '400px', margin: '0 auto' }}>
          <CustomTabs tabs={mainTabs} currentValue={mainTab} onChange={handleChangeMainTab} />
        </Box>
      </Grid>

      <Grid item xs={12} >
        {mainTab === "email" && (
          <TabContext value={emailSubTab}>
            <Tabs
              value={emailSubTab}
              onChange={handleChangeEmailSubTab}
              variant="scrollable"
              scrollButtons="auto"
              sx={{ mb: 2, display: "flex", justifyContent: "center", alignItems: "center" }}
            >
              <Tab label="HTML do Template" value="html" />
              <Tab label="Preview" value="preview" />
            </Tabs>

            <TabPanel value="html" sx={{ padding: 0 }}>
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

            <TabPanel value="preview" sx={{ padding: 0 }}>
              <CardCore sx={{ margin: 0, minHeight: "400px", width: "100%" }}>
                <div
                  style={{ width: "100%", height: "100%", alignItems: "center", justifyContent: "center" }}
                  // biome-ignore lint/security/noDangerouslySetInnerHtml: Necessário para renderizar HTML do template
                  dangerouslySetInnerHTML={{
                    __html: `<div style="padding: 10px;">${valuesInputsEmailTemplate.htmlContent || "<p>Digite o HTML na aba anterior para ver o preview aqui.</p>"}</div>` || "<p>Digite o HTML na aba anterior para ver o preview aqui.</p>",
                  }}
                />
              </CardCore>
            </TabPanel>
          </TabContext>
        )}

        {mainTab === "sms" && (
          <TabContext value={smsSubTab}>
            <Tabs
              value={smsSubTab}
              onChange={handleChangeSmsSubTab}
              variant="scrollable"
              scrollButtons="auto"
              sx={{ mb: 2 }}
            >
              <Tab label="Mensagem" value="message" />
              <Tab label="Preview" value="preview" />
            </Tabs>

            <TabPanel value="message" sx={{ padding: 0 }}>
              <AppTextField
                label="Mensagem de SMS *"
                fullWidth
                multiline
                rows={20}
                placeholder="Digite a mensagem de SMS..."
                value={valuesInputsEmailTemplate.message}
                onChange={handleChange("message")}
              />
            </TabPanel>

            <TabPanel value="preview" sx={{ padding: 0 }}>
              <CardCore sx={{ margin: 0, minHeight: "400px", padding: 2 }}>
                <Box
                  sx={{
                    whiteSpace: "pre-wrap",
                    wordBreak: "break-word",
                    fontFamily: "monospace",
                    fontSize: "14px",
                  }}
                >
                  {valuesInputsEmailTemplate.message || "Digite a mensagem na aba anterior para ver o preview aqui."}
                </Box>
              </CardCore>
            </TabPanel>
          </TabContext>
        )}
      </Grid>
    </Grid>
  );
};
