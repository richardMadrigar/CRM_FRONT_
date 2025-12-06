import { Box, Grid, Typography } from "@mui/material";
import { CardCore } from "src/Pages/components/CardCore/CardCore";
import { CardBodyCore } from "src/Pages/components/CardCore/Components/CardBodyCore";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import ErrorIcon from "@mui/icons-material/Error";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import { IDataGetCampaignDetails } from "src/Contexts/Campaign/CampaignContextTypes";
import { objCampaignGeneralMetrics } from "./HelpersObjs/HelpersObjs";

export const objIconsCampaignMetrics = {
	LEADS: {
		icon: <ContactPageIcon />,
		color: "#5029ff",
	},
	MESSAGES_SEND: {
		icon: <ForwardToInboxIcon />,
		color: "#5029ff",
	},
	MESSAGES_DELIVERED: {
		icon: <CheckCircleOutlineIcon />,
		color: "#14d107",
	},
	MESSAGES_READ: {
		icon: <DoneAllIcon />,
		color: "#2982ff",
	},
	PENDING: {
		icon: <HourglassTopIcon />,
		color: "#fe5507f7",
	},
	FAILED_SEND: {
		icon: <ErrorIcon />,
		color: "#f31919eb",
	},
	ANSWERS_RECEIVED: {
		icon: <QuestionAnswerIcon fontSize="small" />,
		color: "#b4d132",
	},
};

export const GeneralMetrics = ({
	dataGetCampaignDetails,
}: {
	dataGetCampaignDetails: IDataGetCampaignDetails;
}) => {
	// const cardData = objCampaignGeneralMetrics(dataGetCampaignDetails.flows);

	return (
		// <CardCore sxStyle={{ margin: "0", width: "100%", padding: "22px" }}>
		//   <CardBodyCore title="Métricas Gerais" sxStyleTitle={{ mb: "22px" }}>
		//     <Grid item container xs={12} spacing={2}>
		//       {cardData.map((item) => {
		//         return (
		//           <Grid item xs={4} sx={{ display: "flex", alignItems: "center" }}>
		//             <Box
		//               sx={{
		//                 position: "relative",
		//                 display: "inline-flex",
		//                 mr: "12px",
		//               }}
		//             >
		//               <Box
		//                 sx={{
		//                   borderRadius: "50%",
		//                   boxShadow: "0px 0px 8px 0px rgba(164, 164, 164, 0.518)",
		//                   width: { xs: "30px", sm: "40px" },
		//                   height: { xs: "30px", sm: "40px" },
		//                   display: "flex",
		//                   justifyContent: "center",
		//                   alignItems: "center",
		//                   color: item.color,
		//                 }}
		//               >
		//                 {item.icon.icon}
		//               </Box>
		//             </Box>

		//             <Box>
		//               <Typography
		//                 color="text.secondary"
		//                 fontWeight="500"
		//                 sx={{ fontSize: { xs: "12px", sm: "13px" } }}
		//               >
		//                 {item.title}
		//               </Typography>
		//               <Typography
		//                 fontWeight="500"
		//                 sx={{ fontSize: { xs: "12px", sm: "13px" } }}
		//               >
		//                 {item.value}
		//               </Typography>
		//             </Box>
		//           </Grid>
		//         );
		//       })}
		//     </Grid>
		//   </CardBodyCore>
		// </CardCore>
		<></>
	);
};
