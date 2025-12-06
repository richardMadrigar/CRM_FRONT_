import {
	Box,
	Grid,
	Typography,
	CircularProgress,
	circularProgressClasses,
} from "@mui/material";
import { CardCore } from "src/Pages/components/CardCore/CardCore";

import { CampaignFlowLog } from "src/Contexts/Campaign/CampaignContextTypes";
import { CampaignFlowCardDataDetails } from "../HelpersObjs/HelpersObjs";

const styleCard = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	width: "36px",
	height: "36px",
	borderRadius: "50%",
	paddingBottom: "6px",
};

export const CampaignFlowCardDetails = ({
	data,
}: {
	data: CampaignFlowLog[];
}) => {
	const cardData = CampaignFlowCardDataDetails(data);

	return (
		<>
			{cardData.map((item, index) => {
				return (
					<Grid item xs={6} sm={4} key={index}>
						<CardCore sxStyle={{ margin: "0", display: "flex" }}>
							<Box
								sx={{
									position: "relative",
									display: "inline-flex",
									mr: "12px",
								}}
							>
								<Box sx={{ position: "relative" }}>
									<CircularProgress
										variant="determinate"
										sx={(theme) => ({
											color: theme.palette.grey[200],
											...theme.applyStyles("dark", {
												color: theme.palette.grey[800],
											}),
										})}
										size={45}
										thickness={3}
										value={100}
									/>
									<CircularProgress
										variant="determinate"
										sx={(theme) => ({
											color: item.color,
											position: "absolute",
											left: 0,
											[`& .${circularProgressClasses.circle}`]: {
												strokeLinecap: "round",
											},
											...theme.applyStyles("dark", {
												color: "#308fe8",
											}),
										})}
										size={45}
										thickness={3}
										value={item.progress}
									/>
								</Box>

								<Box sx={{ ...styleCard, color: item.color }}>{item.icon}</Box>
							</Box>
							<Box>
								<Typography
									color="text.secondary"
									sx={{
										fontSize: { xs: "12px", sm: "14px" },
										fontWeight: "500",
									}}
								>
									{item.title}
								</Typography>
								<Typography
									sx={{
										fontSize: { xs: "12px", sm: "14px" },
										fontWeight: "500",
									}}
								>
									{item.value}
								</Typography>
							</Box>
						</CardCore>
					</Grid>
				);
			})}
		</>
	);
};
