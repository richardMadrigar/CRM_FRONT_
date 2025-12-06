import { Box, Container, CssBaseline } from "@mui/material";

import { PrivateRoutes } from "../Routes/PrivateRoutes";

import { CardLayout } from "./CardLayout";
import { useAppThemeContext } from "src/Contexts/ThemeContextConfig";
import { useContextViews } from "src/Contexts/Views/contextViews";
import { AvatarLogout } from "./Header/components/LogouImg/AvatarLogout";
import { ToggleTheme } from "./Header/components/ToggleTheme/ToggleTheme";
import { CardCore } from "src/Pages/components/CardCore/CardCore";
import { LogoHeader } from "./Header/components/LogoHeader/LogoHeader";
import { Navigation } from "./Header/components/Navigation/Navigation";

export const Master = () => {
	const { themeName } = useAppThemeContext();
	const { NavigationHeader } = useContextViews();

	return (
		<Box sx={{ position: "relative" }}>
			<Box
				sx={{
					minHeight: "100vh",
					background: themeName === "light" ? "#f8f8f8" : "#121212",
				}}
			>
				<CardLayout>
					<Container maxWidth="xl">
						<CssBaseline />

						<CardCore
							sxStyle={{
								margin: 0,
								display: "flex",
								alignItems: "center",
								justifyContent: "space-between",
								marginBottom: "16px",
								mb: 4,
							}}
						>
							<LogoHeader />

							<Navigation navigationItems={NavigationHeader} />

							<Box sx={{ display: "flex", alignItems: "center" }}>
								<ToggleTheme />
								<AvatarLogout />
							</Box>
						</CardCore>

						<PrivateRoutes />
					</Container>
				</CardLayout>
			</Box>
		</Box>
	);
};
