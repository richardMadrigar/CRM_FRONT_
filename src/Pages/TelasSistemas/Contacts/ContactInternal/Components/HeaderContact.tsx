import { Diamond, Email, LocationOn, Person, Phone } from "@mui/icons-material";
import { Box, Chip, Grid, LinearProgress, Typography } from "@mui/material";
import type { IListContacts } from "src/Contexts/Contacts/ContextContactsTypes";
import { CardCore } from "src/Pages/components/CardCore/CardCore";

interface ContactDataWithExtras extends IListContacts {
  score: number;
  source: string;
  tags: string[];
}

interface HeaderContactProps {
  contactData: ContactDataWithExtras;
}

export const HeaderContact = ({ contactData }: HeaderContactProps) => {
  const getTagIcon = (tag: string) => {
    switch (tag) {
      case "Premium":
        return <Diamond fontSize="small" />;
      case "São Paulo":
        return <LocationOn fontSize="small" />;
      default:
        return undefined;
    }
  };

  return (
    <CardCore sxStyle={{ margin: "0", height: "100%", padding: "24px" }}>
      <Box sx={{ display: "flex", alignItems: "center", mb: "16px" }}>
        <Person sx={{ mr: "8px", color: "primary.main" }} />
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Informações do Lead
        </Typography>
      </Box>

      <Box sx={{ mb: "16px" }}>
        <Box sx={{ display: "flex", alignItems: "center", mb: "8px" }}>
          <Typography variant="body2" sx={{ fontWeight: 500, mr: "8px" }}>
            Score:
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 600, mr: "8px" }}>
            {contactData.score}
          </Typography>
          <Box sx={{ flexGrow: 1 }}>
            <LinearProgress
              variant="determinate"
              value={contactData.score}
              sx={{
                height: 8,
                borderRadius: 4,
                backgroundColor: "#E0E0E0",
                "& .MuiLinearProgress-bar": {
                  backgroundColor: "#2196F3",
                },
              }}
            />
          </Box>
        </Box>
      </Box>

      <Grid container spacing={2} sx={{ mb: "16px" }}>
        <Grid item xs={12}>
          <Box sx={{ display: "flex", alignItems: "center", mb: "8px" }}>
            <Typography variant="body2" sx={{ fontWeight: 500, mr: "8px" }}>
              Fonte:
            </Typography>
            <Typography variant="body2">{contactData.source}</Typography>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Box sx={{ display: "flex", alignItems: "center", mb: "8px" }}>
            <Email
              sx={{ mr: "8px", fontSize: "16px", color: "text.secondary" }}
            />
            <Typography variant="body2">{contactData.email}</Typography>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Box sx={{ display: "flex", alignItems: "center", mb: "8px" }}>
            <Phone
              sx={{ mr: "8px", fontSize: "16px", color: "text.secondary" }}
            />
            <Typography variant="body2">{contactData.phone1}</Typography>
          </Box>
        </Grid>
      </Grid>

      <Box>
        <Typography variant="body2" sx={{ fontWeight: 500, mb: "8px" }}>
          Tags:
        </Typography>
        <Box sx={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {contactData.tags.map((tag) => (
            <Chip
              key={tag}
              label={tag}
              size="small"
              icon={getTagIcon(tag)}
              sx={{
                backgroundColor: tag === "Premium" ? "#FFD700" : "#E3F2FD",
                color: tag === "Premium" ? "#000" : "#1976D2",
                fontWeight: 500,
              }}
            />
          ))}
        </Box>
      </Box>
    </CardCore>
  );
};
