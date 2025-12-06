import { Box, Typography, Fade } from "@mui/material";
import { Link } from "react-router-dom";
import { useAppThemeContext } from "src/Contexts/ThemeContextConfig";
import { NavigationItemProps } from "./types";
import { getIconForRoute } from "../../../constants";

export const NavigationItem: React.FC<NavigationItemProps> = ({
	item,
	isActive,
	index,
}) => {
	const { themeName } = useAppThemeContext();
	const icon = getIconForRoute(item.route.url);

	return (
		<Fade in timeout={300 + index * 100}>
			<Link style={{ textDecoration: "none" }} to={item.route.url}>
				<Box
					sx={{
						position: "relative",
						display: "flex",
						alignItems: "center",
						gap: 1,
						px: 3,
						py: 1.4,
						borderRadius: "12px",
						cursor: "pointer",
						transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
						background: (theme) =>
							isActive ? `${theme.palette.primary.main}` : "transparent",
						color: isActive ? "white" : "primary.main",
						"&:hover": {
							background: (theme) =>
								isActive
									? `${theme.palette.primary.main}`
									: themeName === "light"
										? "rgba(0, 0, 0, 0.04)"
										: "rgba(255, 255, 255, 0.08)",
							transform: "translateY(-2px)",
							boxShadow: isActive
								? "0 8px 25px rgba(0, 0, 0, 0.15)"
								: "0 4px 15px rgba(0, 0, 0, 0.1)",
						},
						"&:active": {
							transform: "translateY(0px)",
						},
					}}
				>
					{icon && (
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								opacity: 0.9,
							}}
						>
							{icon}
						</Box>
					)}
					<Typography
						variant="body2"
						sx={{
							fontWeight: isActive ? 600 : 500,
							fontSize: "14px",
							letterSpacing: "0.3px",
							whiteSpace: "nowrap",
						}}
					>
						{item.route.title}
					</Typography>
					{isActive && (
						<Box
							sx={{
								position: "absolute",
								bottom: 0,
								left: "50%",
								transform: "translateX(-50%)",
								width: "40px",
								height: "4px",
								background: "#eeeeee",
								borderRadius: "2px",
								animation: "pulse 2s infinite",
								"@keyframes pulse": {
									"0%": { opacity: 1 },
									"50%": { opacity: 0.7 },
									"100%": { opacity: 1 },
								},
							}}
						/>
					)}
				</Box>
			</Link>
		</Fade>
	);
};
