import { FC, ReactNode } from "react";
import { Box, SxProps } from "@mui/material";
import { FormCore } from "src/Pages/components";
import { Logo } from "src/Pages/components/Logo/Logo";

interface IBasePageLogin {
	sxStyle?: SxProps;
	children: ReactNode;
}

export const BasePageLogin: FC<IBasePageLogin> = ({ children, sxStyle }) => {
	return (
		<FormCore
			sxStyle={{
				padding: { xs: "0" },
				margin: { sm: "0 auto" },
				alignItems: "center",
				width: { xs: "100%", md: "500px" },
				...sxStyle,
			}}
		>
			{/* <Box sx={{ mb: 4 }}>
        <Logo />
      </Box> */}
			{children}
		</FormCore>
	);
};
