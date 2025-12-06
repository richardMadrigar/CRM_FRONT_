import { useState } from "react";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import { Box, Tab, Tabs } from "@mui/material";
import { ProfileUserPage } from "./ProfileUserPage";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";

export const ProfilePage = () => {
	const [value, setValue] = useState("1");

	const handleChange = (event: React.SyntheticEvent, newValue: string) => {
		setValue(newValue);
	};

	return (
		<Box
			sx={{
				maxWidth: "900px",
				width: "100%",
				display: "flex",
				flexDirection: "column",
				alignItems: "center", // Centraliza o conteúdo
				justifyContent: "center",
				margin: "0 auto", // Mantém no centro da tela
			}}
		>
			<TabContext value={value}>
				<Tabs
					value={value}
					onChange={handleChange}
					variant="scrollable"
					scrollButtons="auto"
					sx={{ mt: 0, mb: 4, width: "100%" }} // Garante que as tabs ocupem toda a largura
				>
					<Tab
						label="Perfil"
						value="1"
						icon={<AssignmentIndIcon fontSize="small" sx={{ m: 0, p: 0 }} />}
						iconPosition="start"
						sx={{ textAlign: "left" }} // Alinha o texto da aba à esquerda
					/>
				</Tabs>

				<TabPanel
					value="1"
					sx={{
						padding: 0,
						width: "100%",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Box
						sx={{
							maxWidth: "900px",
							width: "100%",
							textAlign: "center",
						}}
					>
						<ProfileUserPage />
					</Box>
				</TabPanel>
			</TabContext>
		</Box>
	);
};
