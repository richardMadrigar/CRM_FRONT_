import { Box, Typography } from "@mui/material";

interface IContentModal {
	titlePrimary?: string;
	titleSecondary?: string;
}

export const ContentModal = ({
	titlePrimary = "Tem certeza que deseja deletar ?",
	titleSecondary,
}: IContentModal) => {
	return (
		<Box sx={{ display: "flex", marginBottom: "2rem" }}>
			{/* <Box
        sx={{
          background: "#ff7d7dac",
          borderRadius: 10,

          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          width: "3rem",
          height: "3rem",

          marginRight: "1rem",
          padding: "0.5rem",
        }}
      >
        <WarningAmberIcon
          sx={{ fontSize: "32px", color: "#b40101", margin: "-4px 0 0" }}
        />
      </Box> */}

			<Box>
				<Typography gutterBottom variant="h6">
					{titlePrimary}
				</Typography>

				<Typography gutterBottom sx={{ fontSize: "0.975rem" }} variant="body2">
					{titleSecondary}
				</Typography>
			</Box>
		</Box>
	);
};
