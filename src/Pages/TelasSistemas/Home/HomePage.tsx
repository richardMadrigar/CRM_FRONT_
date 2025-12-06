import { Grid } from "@mui/material";
import { GraphicsHomeSending } from "./Components/Graphics/Index";

export const HomePage = () => {
	return (
		<Grid container spacing={3}>
			<Grid item xs={12} md={12} order={{ xs: 1, md: 2 }}>
				<GraphicsHomeSending />
			</Grid>
		</Grid>
	);
};
