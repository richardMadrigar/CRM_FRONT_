import { Box, Typography, Grid, Divider, Chip } from "@mui/material";
import { CardCore } from "src/Pages/components/CardCore/CardCore";
import {
  Business,
  LocationOn,
  Language,
  Instagram,
  Phone,
  Email,
  CalendarToday,
  Description,
  Work,
} from "@mui/icons-material";
import { IListContacts, IStatusLeads } from "src/Contexts/Contacts/ContextContactsTypes";
import {
  OBjLeadsInterestLevel,
  objLeadsSourceCollection,
  objLeadsStatus,
  objLeadsTypeCompany,
} from "src/Pages/components/ObjTransform";
import { FormatDateBR } from "src/shared/Utils/FormatDateBR";

interface ContactDataWithExtras extends IListContacts {
  score: number;
  tags: string[];
}

interface ContactDetailsProps {
  contactData: ContactDataWithExtras;
}

export const ContactDetails = ({ contactData }: ContactDetailsProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "NEGOTIATION":
        return "#FF9800";
      case "PROPOSAL_SENT":
        return "#2196F3";
      case "PROPOSAL_ACCEPTED":
        return "#4CAF50";
      case "DISQUALIFIED_CLOSED":
        return "#F44336";
      default:
        return "#9E9E9E";
    }
  };

  const getStatusText = (status: IStatusLeads) => {
    switch (status) {
      case "NEGOTIATION":
        return "Em Negociação";
      case "PROPOSAL_SENT":
        return "Proposta Enviada";
      case "PROPOSAL_ACCEPTED":
        return "Proposta Aceita";
      case "DISQUALIFIED_CLOSED":
        return "Desqualificado";
      default:
        return objLeadsStatus[status] || status;
    }
  };

  return (
    <CardCore sxStyle={{ margin: "0", padding: "24px" }}>
      <Box sx={{ display: "flex", alignItems: "center", mb: "24px" }}>
        <Business sx={{ mr: "8px", color: "primary.main" }} />
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Informações Detalhadas do Contato
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {/* Informações Básicas */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: 600, mb: "16px", color: "primary.main" }}
          >
            Informações Básicas
          </Typography>

          <Box sx={{ mb: "16px" }}>
            <Typography variant="body2" sx={{ fontWeight: 500, mb: "4px" }}>
              Nome Completo:
            </Typography>
            <Typography variant="body1">{contactData.name}</Typography>
          </Box>

          <Box sx={{ mb: "16px" }}>
            <Typography variant="body2" sx={{ fontWeight: 500, mb: "4px" }}>
              E-mail:
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Email
                sx={{ mr: "8px", fontSize: "16px", color: "text.secondary" }}
              />
              <Typography variant="body1">{contactData.email}</Typography>
            </Box>
          </Box>

          <Box sx={{ mb: "16px" }}>
            <Typography variant="body2" sx={{ fontWeight: 500, mb: "4px" }}>
              Telefones:
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mb: "4px" }}>
              <Phone
                sx={{ mr: "8px", fontSize: "16px", color: "text.secondary" }}
              />
              <Typography variant="body1">{contactData.phone1}</Typography>
            </Box>
            {contactData.phone2 && (
              <Box sx={{ display: "flex", alignItems: "center", mb: "4px" }}>
                <Phone
                  sx={{ mr: "8px", fontSize: "16px", color: "text.secondary" }}
                />
                <Typography variant="body1">{contactData.phone2}</Typography>
              </Box>
            )}
            {contactData.phone3 && (
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Phone
                  sx={{ mr: "8px", fontSize: "16px", color: "text.secondary" }}
                />
                <Typography variant="body1">{contactData.phone3}</Typography>
              </Box>
            )}
          </Box>

          <Box sx={{ mb: "16px" }}>
            <Typography variant="body2" sx={{ fontWeight: 500, mb: "4px" }}>
              Status:
            </Typography>
            <Chip
              label={getStatusText(contactData.status)}
              size="small"
              sx={{
                backgroundColor: getStatusColor(contactData.status),
                color: "white",
                fontWeight: 500,
              }}
            />
          </Box>

          <Box sx={{ mb: "16px" }}>
            <Typography variant="body2" sx={{ fontWeight: 500, mb: "4px" }}>
              Nível de Interesse:
            </Typography>
            <Chip
              label={OBjLeadsInterestLevel[contactData.interestLevel].title}
              size="small"
              sx={{
                backgroundColor:
                  OBjLeadsInterestLevel[contactData.interestLevel].color,
                color: "white",
                fontWeight: 500,
              }}
            />
          </Box>
        </Grid>

        {/* Informações da Empresa */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: 600, mb: "16px", color: "primary.main" }}
          >
            Informações da Empresa
          </Typography>

          <Box sx={{ mb: "16px" }}>
            <Typography variant="body2" sx={{ fontWeight: 500, mb: "4px" }}>
              Tipo de Empresa:
            </Typography>
            <Typography variant="body1">
              {objLeadsTypeCompany[contactData.typeCompany] || "-"}
            </Typography>
          </Box>

          {contactData.cnpj && (
            <Box sx={{ mb: "16px" }}>
              <Typography variant="body2" sx={{ fontWeight: 500, mb: "4px" }}>
                CNPJ:
              </Typography>
              <Typography variant="body1">{contactData.cnpj}</Typography>
            </Box>
          )}

          {contactData.cpf && (
            <Box sx={{ mb: "16px" }}>
              <Typography variant="body2" sx={{ fontWeight: 500, mb: "4px" }}>
                CPF:
              </Typography>
              <Typography variant="body1">{contactData.cpf}</Typography>
            </Box>
          )}

          {contactData.companySize && (
            <Box sx={{ mb: "16px" }}>
              <Typography variant="body2" sx={{ fontWeight: 500, mb: "4px" }}>
                Tamanho da Empresa:
              </Typography>
              <Typography variant="body1">{contactData.companySize}</Typography>
            </Box>
          )}

          {contactData.mainActivity && (
            <Box sx={{ mb: "16px" }}>
              <Typography variant="body2" sx={{ fontWeight: 500, mb: "4px" }}>
                Atividade Principal:
              </Typography>
              <Typography variant="body1">
                {contactData.mainActivity}
              </Typography>
            </Box>
          )}

          {contactData.foundedAt && (
            <Box sx={{ mb: "16px" }}>
              <Typography variant="body2" sx={{ fontWeight: 500, mb: "4px" }}>
                Data de Fundação:
              </Typography>
              <Typography variant="body1">
                {FormatDateBR(contactData.foundedAt)}
              </Typography>
            </Box>
          )}
        </Grid>

        {/* Endereço */}
        {(contactData.street || contactData.city || contactData.state) && (
          <>
            <Grid item xs={12}>
              <Divider sx={{ my: 2 }} />
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: 600, mb: "16px", color: "primary.main" }}
              >
                Endereço
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", mb: "8px" }}>
                <LocationOn
                  sx={{ mr: "8px", fontSize: "16px", color: "text.secondary" }}
                />
                <Typography variant="body1">
                  {[
                    contactData.street,
                    contactData.number,
                    contactData.complement,
                    contactData.neighborhood,
                    contactData.city,
                    contactData.state,
                    contactData.zipCode,
                  ]
                    .filter(Boolean)
                    .join(", ")}
                </Typography>
              </Box>
            </Grid>
          </>
        )}

        {/* Contatos Online */}
        {(contactData.website || contactData.instagram) && (
          <>
            <Grid item xs={12}>
              <Divider sx={{ my: 2 }} />
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: 600, mb: "16px", color: "primary.main" }}
              >
                Contatos Online
              </Typography>

              {contactData.website && (
                <Box sx={{ display: "flex", alignItems: "center", mb: "8px" }}>
                  <Language
                    sx={{
                      mr: "8px",
                      fontSize: "16px",
                      color: "text.secondary",
                    }}
                  />
                  <Typography
                    variant="body1"
                    component="a"
                    href={contactData.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: "primary.main", textDecoration: "none" }}
                  >
                    {contactData.website}
                  </Typography>
                </Box>
              )}

              {contactData.instagram && (
                <Box sx={{ display: "flex", alignItems: "center", mb: "8px" }}>
                  <Instagram
                    sx={{
                      mr: "8px",
                      fontSize: "16px",
                      color: "text.secondary",
                    }}
                  />
                  <Typography
                    variant="body1"
                    component="a"
                    href={`https://instagram.com/${contactData.instagram.replace("@", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: "primary.main", textDecoration: "none" }}
                  >
                    {contactData.instagram}
                  </Typography>
                </Box>
              )}
            </Grid>
          </>
        )}

        {/* Informações Adicionais */}
        <Grid item xs={12}>
          <Divider sx={{ my: 2 }} />
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: 600, mb: "16px", color: "primary.main" }}
          >
            Informações Adicionais
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Box sx={{ mb: "16px" }}>
                <Typography variant="body2" sx={{ fontWeight: 500, mb: "4px" }}>
                  Fonte de Captura:
                </Typography>
                <Typography variant="body1">
                  {objLeadsSourceCollection[contactData.sourceCollection] ||
                    "Não informado"}
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box sx={{ mb: "16px" }}>
                <Typography variant="body2" sx={{ fontWeight: 500, mb: "4px" }}>
                  Data de Captura:
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <CalendarToday
                    sx={{
                      mr: "8px",
                      fontSize: "16px",
                      color: "text.secondary",
                    }}
                  />
                  <Typography variant="body1">
                    {FormatDateBR(contactData.dateCapture)}
                  </Typography>
                </Box>
              </Box>
            </Grid>

            {contactData.description && (
              <Grid item xs={12}>
                <Box sx={{ mb: "16px" }}>
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: 500, mb: "4px" }}
                  >
                    Descrição:
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                    <Description
                      sx={{
                        mr: "8px",
                        fontSize: "16px",
                        color: "text.secondary",
                        mt: "2px",
                      }}
                    />
                    <Typography variant="body1">
                      {contactData.description}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            )}

            {contactData.data && (
              <Grid item xs={12}>
                <Box sx={{ mb: "16px" }}>
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: 500, mb: "4px" }}
                  >
                    Dados Adicionais:
                  </Typography>
                  <Typography variant="body1">{contactData.data}</Typography>
                </Box>
              </Grid>
            )}

            {contactData.reasonLoss && (
              <Grid item xs={12}>
                <Box sx={{ mb: "16px" }}>
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: 500, mb: "4px" }}
                  >
                    Motivo da Perda:
                  </Typography>
                  <Typography variant="body1" sx={{ color: "error.main" }}>
                    {contactData.reasonLoss}
                  </Typography>
                </Box>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
    </CardCore>
  );
};
