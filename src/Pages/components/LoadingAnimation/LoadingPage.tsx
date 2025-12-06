import { Player } from "@lottiefiles/react-lottie-player";
import { Box } from "@mui/material";

export const LoadingPage = () => {
	return (
		<Box
			sx={{
				height: "100vh",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Player
				autoplay
				loop
				background="transparent"
				src="https://lottie.host/6c552301-9937-4dff-8eeb-8bd6fceb03bb/xYYaGBH2Xy.json"
				style={{ height: "150px", width: "150px" }}
			/>
		</Box>
	);
};
