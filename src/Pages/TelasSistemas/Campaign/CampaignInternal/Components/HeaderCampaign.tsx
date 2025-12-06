import { CardMedia, Box, Typography, Chip, Grid } from "@mui/material";

import { CardCore } from "src/Pages/components/CardCore/CardCore";
import { toAbsoluteUrl } from "src/shared/setup/toAbsoluteUrl";
import { handleFormatDateToPhraseSignatureWithHour } from "src/shared/Utils/FormatDate/FormatDateToPhraseSignature";
import { objCampaignFlowsStatus } from "./HelpersObjs/HelpersObjs";
import { IDataGetCampaignDetails } from "src/Contexts/Campaign/CampaignContextTypes";
import { formatString } from "@format-string/core";
import { TitleWithValueCore } from "src/Pages/components/TitleWithValueCore/TitleWithValueCore";

export const HeaderCampaign = ({
	dataGetCampaignDetails,
}: {
	dataGetCampaignDetails: IDataGetCampaignDetails;
}) => {
	return (
		// <CardCore sxStyle={{ margin: "0", height: "100%", padding: "24px" }}>
		//   <Box sx={{ display: "flex", justifyContent: "space-between" }}>
		//     <Box sx={{ display: "flex" }}>
		//       <Box>
		//         <Box
		//           sx={{
		//             display: "flex",
		//             gap: "12px",
		//             mb: "16px",
		//             flexDirection: { xs: "column-reverse", sm: "row" },
		//             alignItems: { xs: "flex-start", sm: "center" },
		//           }}
		//         >
		//           <Typography
		//             sx={{
		//               fontSize: { xs: "16px", sm: "18px" },
		//               fontWeight: 600,
		//             }}
		//           >
		//             {dataGetCampaignDetails.title}
		//           </Typography>
		//           <Chip
		//             label={
		//               objCampaignFlowsStatus[dataGetCampaignDetails.status].text
		//             }
		//             size="small"
		//             sx={{
		//               padding: "12px",
		//               color: "white",
		//               backgroundColor:
		//                 objCampaignFlowsStatus[dataGetCampaignDetails.status].color,
		//             }}
		//           />
		//         </Box>

		//         <Grid
		//           container
		//           spacing={2}
		//           sx={{
		//             "& > *": { mb: "12px" },
		//             "& > *:last-child": { mb: "0" },
		//           }}
		//         >
		//           <Grid item container spacing={2}>
		//             <Grid item xs={12} md={6}>
		//               <TitleWithValueCore
		//                 sxStyleTitle={{ fontWeight: "500" }}
		//                 title="Grupo de Leads"
		//                 value={dataGetCampaignDetails.groupLeads.name}
		//               />
		//             </Grid>

		//             <Grid item xs={12} md={6}>
		//               <TitleWithValueCore
		//                 sxStyleTitle={{ fontWeight: "500" }}
		//                 title="Processos:"
		//                 // value={`(${dataGetCampaignDetails.flowCurrency} de ${dataGetCampaignDetails.flows.length})`}
		//                 value={`()`}
		//               />
		//             </Grid>
		//           </Grid>

		//           <Grid item container spacing={2}>
		//             <Grid item xs={12} md={6}>
		//               {/* <TitleWithValueCore
		//                 sxStyleTitle={{ fontWeight: "500" }}
		//                 title="Número de disparo:"
		//                 value={formatString({
		//                   value: {},
		//                   type: "phone",
		//                 })}
		//               /> */}
		//             </Grid>

		//             <Grid item xs={12} md={6}>
		//               <TitleWithValueCore
		//                 sxStyleTitle={{ fontWeight: "500" }}
		//                 title="Data de criação:"
		//                 value={handleFormatDateToPhraseSignatureWithHour(
		//                   dataGetCampaignDetails.createdAt
		//                 )}
		//               />
		//             </Grid>
		//           </Grid>
		//         </Grid>
		//       </Box>
		//     </Box>

		//     <Box
		//       sx={{
		//         display: "flex",
		//         flexDirection: "column",
		//         alignItems: "center",
		//       }}
		//     >
		//       <CardMedia
		//         alt="Image Campaign"
		//         component="img"
		//         image={toAbsoluteUrl("/media/Posts Correctors (5).png")}
		//         sx={{
		//           width: { xs: "140px", sm: "170px" },
		//           height: { xs: "140px", sm: "170px" },
		//           mr: "24px",
		//         }}
		//       />
		//     </Box>
		//   </Box>
		// </CardCore>
		<></>
	);
};
