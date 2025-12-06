import { Player } from "@lottiefiles/react-lottie-player";
import { Box } from "@mui/material";
import { ButtonCore } from "src/Pages/components/ButtonCore/ButtonCore";
import { LinkCore } from "src/Pages/components/LinkCore/LinkCore";
import { UrlConfig } from "src/shared/Utils/paths";

export const PageNotFound = () => {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<div
				style={{
					minHeight: `calc(100vh - 9rem)`,
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Player
					autoplay
					loop
					src="https://assets7.lottiefiles.com/datafiles/OzG1c5GtuAvq10U/data.json"
					style={{
						height: "40%",
						width: "40%",
						minHeight: "250x",
						minWidth: "250x",
					}}
				/>
			</div>
			<LinkCore to={UrlConfig.dashboard.url}>
				<ButtonCore title="Voltar a home" />
			</LinkCore>
		</Box>
	);
};
