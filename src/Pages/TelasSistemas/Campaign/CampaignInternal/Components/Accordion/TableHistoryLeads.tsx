import { Box, Typography, Chip } from "@mui/material";
import { CardCore } from "src/Pages/components/CardCore/CardCore";
import EmailIcon from "@mui/icons-material/Email";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import VisibilityIcon from "@mui/icons-material/Visibility";
import MouseIcon from "@mui/icons-material/Mouse";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ComputerIcon from "@mui/icons-material/Computer";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import { IDataGetCampaignDetails } from "src/Contexts/Campaign/CampaignContextTypes";

import { handleFormatDateToPhraseSignatureWithHour } from "src/shared/Utils/FormatDate/FormatDateToPhraseSignature";
import moment from "moment";
interface IListHistoryCampaignLeads {
  data: IDataGetCampaignDetails;
}

// Função para mapear eventos com ícones e cores
const getEventConfig = (event: string) => {
  switch (event) {
    case "request":
      return {
        icon: <EmailIcon fontSize="small" />,
        text: "E-mail enviado",
        color: "#2196F3",
        bgColor: "#E3F2FD",
      };
    case "delivered":
      return {
        icon: <CheckCircleIcon fontSize="small" />,
        text: "E-mail entregue",
        color: "#4CAF50",
        bgColor: "#E8F5E8",
      };
    case "unique_opened":
      return {
        icon: <VisibilityIcon fontSize="small" />,
        text: "E-mail aberto (1 vez)",
        color: "#FF9800",
        bgColor: "#FFF3E0",
      };
    case "opened":
      return {
        icon: <VisibilityIcon fontSize="small" />,
        text: "E-mail aberto",
        color: "#FF9800",
        bgColor: "#F3E5F5",
      };
    case "click":
      return {
        icon: <VisibilityIcon fontSize="small" />,
        text: "E-mail clicado",
        color: "#006eff",
        bgColor: "#F3E5F5",
      };
    case "clicked":
      return {
        icon: <VisibilityIcon fontSize="small" />,
        text: "E-mail clicado",
        color: "#006eff",
        bgColor: "#F3E5F5",
      };
    default:
      return {
        icon: <MouseIcon fontSize="small" />,
        text: event,
        color: "#9C27B0",
        bgColor: "#F3E5F5",
      };
  }
};

// Função para obter ícone do dispositivo
const getDeviceIcon = (device: string | null) => {
  switch (device) {
    case "DESKTOP":
      return <ComputerIcon fontSize="small" />;
    case "MOBILE":
      return <PhoneAndroidIcon fontSize="small" />;
    default:
      return <ComputerIcon fontSize="small" />;
  }
};

export const ListHistoryCampaignLeads = ({
  data,
}: IListHistoryCampaignLeads) => {
  return (
    <CardCore sxStyle={{ m: 0, overflowX: "auto" }}>
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
          Histórico de Eventos
        </Typography>

        {data.CampaignFlowsSend.map((item) => (
          <Box key={item.id} sx={{ mb: 3 }}>
            {/* Header do Lead */}
            <Box sx={{ mb: 2, p: 2, bgcolor: "#f5f5f5", borderRadius: 1 }}>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                {item.lead.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.lead.email}
              </Typography>
            </Box>

            {/* Lista de Eventos */}
            {item.CampaignFlowsSendLogs.map((itemLog, index) => {
              const eventConfig = getEventConfig(itemLog.event);
              const deviceIcon = getDeviceIcon(itemLog.deviceUsed);

              return (
                <Box
                  key={`${item.id}-${index}`}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    p: 2,
                    border: "1px solid #e0e0e0",
                    borderRadius: 1,
                    mb: 1,
                    bgcolor: "white",
                  }}
                >
                  {/* Ícone do Evento */}
                  <Box
                    sx={{
                      color: eventConfig.color,
                      mr: 2,
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {eventConfig.icon}
                  </Box>

                  {/* Conteúdo do Evento */}
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>
                      {eventConfig.text}
                    </Typography>

                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        mt: 1,
                      }}
                    >
                      {/* IP */}
                      <Typography variant="body2" color="text.secondary">
                        IP: {itemLog.data?.sending_ip || "N/A"}
                      </Typography>

                      {/* Localização */}
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
                      >
                        <LocationOnIcon fontSize="small" color="error" />
                        <Typography variant="body2" color="text.secondary">
                          São Paulo, Brasil
                        </Typography>
                      </Box>

                      {/* Dispositivo */}
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
                      >
                        {deviceIcon}
                        <Typography variant="body2" color="text.secondary">
                          {itemLog.deviceUsed === "MOBILE"
                            ? "iPhone"
                            : "Desktop"}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>

                  {/* Data e Hora */}
                  <Box sx={{ textAlign: "right" }}>
                    <Typography variant="body2" color="text.secondary">
                      {handleFormatDateToPhraseSignatureWithHour(
                        moment(itemLog.dateExternal).add(3, "hours").format(),
                      )}
                    </Typography>
                  </Box>
                </Box>
              );
            })}
          </Box>
        ))}
      </Box>
    </CardCore>
  );
};
