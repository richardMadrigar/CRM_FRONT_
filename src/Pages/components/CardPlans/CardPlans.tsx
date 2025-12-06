import { Children } from "react";
import { formatRemove } from "@format-string/core";
import { Box, Chip, Typography, alpha } from "@mui/material";
import { FormatMoney } from "src/shared/Utils/FormatMoney";

import { WorkspacePremiumIcon } from "../Icons/Icons";

import { CompDescriptionPlansDetails } from "./Components/CompDescriptionPlansDetails";
import { ButtonCore } from "../ButtonCore/ButtonCore";
import { useAuthContext } from "src/Contexts/AuthContext/authContext";

export type ICardPlans = {
	data: {
		title: string;
		subTitle: string;
		value: number;
		extensionValue: "MONTH" | "YEARLY";

		recommend?: boolean;
		background?: string;
		onClick?: () => void;
		details: {
			title: string;
			exclusive?: boolean;
			fontWeight?: string;
		}[];
	};
};

export function getLinkWhatApp(whats: string, encodedMessage?: string): string {
	return `https://wa.me/${formatRemove(whats || "")}?text=${encodedMessage}`;
}

const extension = {
	YEARLY: "Anual",
	MONTH: "Mensal",
};

export const CardPlans = ({
	data: {
		extensionValue,
		background,
		recommend,
		subTitle,
		onClick,
		details,
		value,
		title,
	},
}: ICardPlans) => {
	const { userPerfil } = useAuthContext();

	return (
		<Box
			sx={{
				padding: { xs: "16px", sm: "18px" },
				borderRadius: "12px",
				boxShadow: (theme) => theme.shadows[4],

				background: recommend
					? `linear-gradient(180deg, ${alpha(
							background as string,
							0.6,
						)} 10%, rgba(0,50,76,0) 40%)`
					: "",

				"&: hover ": {
					transition: "0.5s ease",
					transform: " scale(1.01)",
				},
			}}
		>
			<Chip
				icon={<WorkspacePremiumIcon />}
				label={title}
				variant="outlined"
				size="small"
				sx={{
					padding: { xs: ".8rem", sm: "1rem" },
					fontSize: { xs: ".8rem", sm: "1rem" },
					marginBottom: { xs: "1rem", sm: "2rem" },
					fontWeight: "500",
					border: (theme) => `1px solid ${theme.palette.text.primary}`,
				}}
			/>

			<Box
				sx={{ display: "flex", alignItems: "baseline", marginBottom: ".3rem" }}
			>
				<Typography
					sx={{ fontSize: { xs: "1rem", sm: "1.3rem" }, marginRight: "8px" }}
				>
					R$
				</Typography>

				<Typography
					sx={{
						fontSize: { xs: "1.3rem", sm: "1.7rem" },
						fontWeight: "500",
						marginRight: "8px",
					}}
				>
					{FormatMoney(value.toFixed(2))}
				</Typography>

				<Typography sx={{ fontSize: { xs: ".7rem", sm: "1rem" } }}>
					/ {extension[extensionValue]}
				</Typography>
			</Box>

			<Typography
				sx={{
					fontSize: { xs: ".7rem", sm: ".8rem", fontWeight: 600 },
					marginBottom: "1.2rem",
				}}
			>
				{subTitle}
			</Typography>

			<ButtonCore
				fullWidth
				title={
					userPerfil?.subscription?.isActive ? "Gerenciar" : "Assinar plano"
				}
				sx={{ mb: "1.2rem" }}
				onClick={onClick}
			/>

			<Box>
				{Children.toArray(
					details.map((item) => {
						return <CompDescriptionPlansDetails data={item} />;
					}),
				)}
			</Box>
		</Box>
	);
};
