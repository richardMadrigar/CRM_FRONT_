import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";
import { NavigationProps } from "./types";
import { NavigationItem } from "./NavigationItem";

export const Navigation: React.FC<NavigationProps> = ({ navigationItems }) => {
	const { pathname } = useLocation();

	return (
		<Box
			sx={{
				display: "flex",
				alignItems: "center",
				gap: 1,

				borderRadius: "16px",
				padding: "8px",
				backdropFilter: "blur(10px)",
			}}
		>
			{navigationItems.map((item, index) => {
				const isActive =
					item.route.url === pathname || pathname.includes(item.route.url);

				return (
					<NavigationItem
						key={item.route.url}
						item={item}
						isActive={isActive}
						index={index}
					/>
				);
			})}
		</Box>
	);
};
