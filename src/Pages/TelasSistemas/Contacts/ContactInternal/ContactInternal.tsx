import { Grid } from "@mui/material";
import {
  HeaderContact,
  EngagementMetrics,
  ActivitySummary,
  EngagementTimeline,
  CampaignHistory,
  ContactDetails,
} from "./Components";
import { useParams } from "react-router";
import { useContextContacts } from "src/Contexts/Contacts/ContextContacts";
import { useEffect, useState } from "react";
import { IListContacts } from "src/Contexts/Contacts/ContextContactsTypes";

interface ContactDataWithExtras extends IListContacts {
  score: number;
  source: string;
  tags: string[];
  engagementMetrics: {
    sent: number;
    opened: number;
    delivered: number;
    clicked: number;
  };
  activities: {
    campaigns: number;
    annotations: number;
    emailsOpened: number;
    clicks: number;
  };
  timeline: Array<{
    date: string;
    value: number;
  }>;
  campaignHistory: Array<{
    campaign: string;
    status: string;
    sent: string;
    opened: string;
    clicked: string;
  }>;
}

// Dados mockados para demonstração
const mockContactData: ContactDataWithExtras = {
  id: "1",
  idTenant: "tenant-123",
  name: "Maria Silva",
  email: "maria@email.com",
  description: "Lead qualificado interessado em nossos serviços",
  cnpj: "12.345.678/0001-90",
  cpf: "123.456.789-00",
  typeCompany: "PJ" as const,
  status: "NEGOTIATION" as const,
  interestLevel: "HIGH" as const,
  sourceCollection: "FORM" as const,
  startRegisterAt: "2024-01-15",
  companySize: "Pequena (1-10 funcionários)",
  reasonLoss: undefined,
  foundedAt: "2020-01-15",
  website: "https://www.mariasilva.com.br",
  instagram: "@mariasilva_empresa",
  phone1: "(11) 98765-4321",
  phone2: "(11) 3456-7890",
  phone3: "(11) 2345-6789",
  state: "SP",
  city: "São Paulo",
  neighborhood: "Vila Madalena",
  street: "Rua das Flores",
  number: "123",
  complement: "Sala 45",
  zipCode: "01234-567",
  companyId: "company-456",
  mainActivity: "Consultoria em Marketing Digital",
  data: "Dados adicionais do lead",
  dateCapture: "2024-01-20",
  updatedAt: "2024-01-25T10:30:00Z",
  createdAt: "2024-01-20T14:15:00Z",
  // Dados adicionais para a tela interna
  score: 85,
  source: "Website",
  tags: ["Premium", "São Paulo"],
  engagementMetrics: {
    sent: 1,
    opened: 1,
    delivered: 1,
    clicked: 1,
  },
  activities: {
    campaigns: 1,
    annotations: 2,
    emailsOpened: 1,
    clicks: 1,
  },
  timeline: [
    {
      date: "20/01/2024",
      value: 1,
    },
  ],
  campaignHistory: [
    {
      campaign: "Campanha Boas-vindas Q1",
      status: "Clicado",
      sent: "20/01/2024",
      opened: "20/01/2024",
      clicked: "20/01/2024",
    },
  ],
};

export const ContactInternal = () => {
  const { id } = useParams();
  const { listContacts } = useContextContacts();
  const [contactData, setContactData] =
    useState<ContactDataWithExtras>(mockContactData);

  useEffect(() => {
    if (id) {
      // Aqui você pode implementar a lógica para buscar os dados reais do contato
      // Por enquanto, usando dados mockados
      setContactData(mockContactData);
    }
  }, [id]);

  if (!id) return null;

  return (
    <>
      <Grid container spacing={2} sx={{ mb: "24px" }}>
        {/* Informações do Lead */}
        <Grid item xs={12} md={4}>
          <HeaderContact contactData={contactData} />
        </Grid>

        {/* Métricas de Engajamento */}
        <Grid item xs={12} md={4}>
          <EngagementMetrics metrics={contactData.engagementMetrics} />
        </Grid>

        {/* Resumo de Atividades */}
        <Grid item xs={12} md={4}>
          <ActivitySummary activities={contactData.activities} />
        </Grid>
      </Grid>

      {/* Timeline de Engajamento */}
      <Grid container spacing={2} sx={{ mb: "24px" }}>
        <Grid item xs={12}>
          <EngagementTimeline timeline={contactData.timeline} />
        </Grid>
      </Grid>

      {/* Informações Detalhadas do Contato */}
      <Grid container spacing={2} sx={{ mb: "24px" }}>
        <Grid item xs={12}>
          <ContactDetails contactData={contactData} />
        </Grid>
      </Grid>

      {/* Histórico de Campanhas */}
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <CampaignHistory history={contactData.campaignHistory} />
        </Grid>
      </Grid>
    </>
  );
};
