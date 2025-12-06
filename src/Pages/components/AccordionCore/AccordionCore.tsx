import { FC } from "react";
import {
	Accordion,
	Typography,
	AccordionDetails,
	AccordionSummary,
	AccordionProps,
	SxProps,
} from "@mui/material";

import { ExpandMoreIcon } from "../Icons/Icons";

type IAccordionCore = AccordionProps & {
	title: string;
	sxStyle?: SxProps;
};

export const AccordionCore: FC<IAccordionCore> = ({
	children,
	sxStyle,
	title,
	...props
}) => {
	return (
		<Accordion
			disableGutters
			sx={{
				padding: "0 8px 8px 8px",
				...sxStyle,
			}}
			{...props}
		>
			<AccordionSummary
				aria-controls="panel1a-content1"
				expandIcon={<ExpandMoreIcon />}
				id="panel1a-header1"
			>
				<Typography>{title}</Typography>
			</AccordionSummary>

			<AccordionDetails>{children}</AccordionDetails>
		</Accordion>
	);
};
