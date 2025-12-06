import { Children, FC, ReactNode } from "react";
import { Box, SxProps, Typography } from "@mui/material";

interface ICardBodyCore {
	title?: string;
	icon?: ReactNode;
	actions?: ReactNode[];
	children: ReactNode;
	sxStyleTitle?: SxProps;
}

export const CardBodyCore: FC<ICardBodyCore> = ({
	children,
	actions,
	title,
	icon,
	sxStyleTitle,
}) => {
	return (
		<>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					flexWrap: "wrap",
				}}
			>
				{title && (
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							marginBottom: "10px",
							...sxStyleTitle,
						}}
					>
						{icon && (
							<Box sx={{ display: "flex", marginRight: "10px" }}>{icon}</Box>
						)}
						{title && (
							<Typography
								sx={{
									fontSize: { xs: "0.9rem", sm: "1.1rem" },
									fontWeight: "500",
								}}
							>
								{title}
							</Typography>
						)}
					</Box>
				)}

				{actions?.length && actions?.length > 0 && (
					<Box sx={{ display: "flex" }}>
						{Children.toArray(actions?.map((item) => <Box>{item}</Box>))}
					</Box>
				)}
			</Box>

			{children}
		</>
	);
};
