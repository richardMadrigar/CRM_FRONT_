import { Children, ReactNode } from "react";
import { TableCell, TableHead, TableRow, Tooltip } from "@mui/material";
import { NotListedLocationIcon } from "src/Pages/components/Icons/Icons";

export interface IDataTh {
	title?: string;
	align: "left" | "right" | "center";
	minWidth?: string;
	width?: string | number;
	icon?: ReactNode;
	tooltip?: string;
	infoTitle?: string;
}

type IThCoreIndex = {
	dataTh: IDataTh[];
};

export const ThCoreIndex = ({ dataTh }: IThCoreIndex) => {
	return (
		<TableHead
			sx={{
				background: (theme) => theme.palette.background.paper,
				boxShadow: "0 .1rem 1rem .25rem #00000013",
				position: "sticky",
				zIndex: "2",
				top: "0",
			}}
		>
			<TableRow>
				{Children.toArray(
					dataTh.map((item) => (
						<Tooltip enterDelay={800} title={item.tooltip}>
							<TableCell
								align={item.align}
								style={{
									width: item.width || "100%",
									minWidth: item.minWidth || "",
									padding: "12px",
								}}
							>
								{item.title}
								{item.icon}

								{item.infoTitle && (
									<Tooltip enterDelay={800} title={item.infoTitle}>
										<NotListedLocationIcon
											fontSize="small"
											sx={{ cursor: "pointer" }}
										/>
									</Tooltip>
								)}
							</TableCell>
						</Tooltip>
					)),
				)}
			</TableRow>
		</TableHead>
	);
};
