import React from "react";
import { Box, Typography } from "@mui/material";

import { CheckIcon } from "../../Icons/Icons";

interface IDescriptionPlansDetails {
	data: {
		title: string;
		fontWeight?: string;
	};
}

export const CompDescriptionPlansDetails = ({
	data: { title, fontWeight },
}: IDescriptionPlansDetails) => {
	return (
		<Box sx={{ display: "flex" }}>
			<CheckIcon color="success" />

			<Typography
				sx={{
					fontSize: ".8rem",
					margin: "0 0 .8rem .4rem",
					fontWeight,
				}}
			>
				{title}
			</Typography>
		</Box>
	);
};
