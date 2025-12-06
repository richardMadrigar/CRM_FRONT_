import { Grid } from "@mui/material";
import { HeaderCampaign } from "./Components/HeaderCampaign";
import { GeneralMetrics } from "./Components/GeneralMetrics";
import { CampaignFlowsAccordion } from "./Components/Accordion/CampaignFlowsAccordion";
import { useParams } from "react-router";
import { UseGetCampaignDetails } from "./Components/Accordion/hooks/UseGetCampaignDetails";
import { useEffect } from "react";
import { useContextCampaign } from "src/Contexts/Campaign/ContextCampaign";

export const CampaignInternal = () => {
	const { dataGetCampaignDetails } = useContextCampaign();
	const { id } = useParams();

	if (!id) return null;

	const { handleGet } = UseGetCampaignDetails();

	useEffect(() => {
		handleGet(id);

		const interval = setInterval(() => {
			handleGet(id);
		}, 20000); // 20s
		return () => clearInterval(interval);
	}, [id]);

	if (!dataGetCampaignDetails.id) return null;

	return (
		<>
			{dataGetCampaignDetails && (
				<>
					<Grid container spacing={2} sx={{ mb: "24px" }}>
						{/* <Grid item xs={12} md={7}>
              <HeaderCampaign dataGetCampaignDetails={dataGetCampaignDetails} />
            </Grid>

            <Grid item container xs={12} md={5}>
              <GeneralMetrics dataGetCampaignDetails={dataGetCampaignDetails} />
            </Grid> */}
					</Grid>

					<CampaignFlowsAccordion
						dataGetCampaignDetails={dataGetCampaignDetails}
					/>
				</>
			)}
		</>
	);
};
