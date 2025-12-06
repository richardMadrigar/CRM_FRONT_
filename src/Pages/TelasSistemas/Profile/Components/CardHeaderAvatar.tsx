import { Box, Divider, Typography } from "@mui/material";
import { CardCore } from "src/Pages/components/CardCore/CardCore";
import { useAuthContext } from "src/Contexts/AuthContext/authContext";
import moment from "moment";
import { cpfOurCnpj } from "src/shared/Utils/MaskCpfCnpj";

export const CardHeaderAvatar = () => {
	const { userPerfil } = useAuthContext();

	return (
		<CardCore
			sxStyle={{
				position: "relative",
				padding: "26px 40px",
				margin: 0,
				display: "flex",
				alignItems: "center",
			}}
		>
			{userPerfil?.subscription?.isActive && (
				<Box
					sx={{
						background: (theme) => theme.custom.gradient.cardSecondary,
						borderRadius: "24px 0 0 24px",
						padding: "6px 14px 6px 14px",
						position: "absolute",
						top: { xs: 8, sm: 20 },
						right: 0,
					}}
				>
					<Typography
						sx={{ color: "white", fontSize: { xs: "11px", sm: "16px" } }}
					>
						Assinante desde{" "}
						{moment(userPerfil?.subscription?.startDate).format(
							"MMMM [de] YYYY",
						)}
					</Typography>
				</Box>
			)}

			<Divider orientation="vertical" sx={{ m: 4 }} flexItem />

			<Box sx={{ textAlign: "start" }}>
				<Typography sx={{ fontSize: { xs: "14px", sm: "18px" }, mb: 1 }}>
					{userPerfil?.name}
				</Typography>

				<Typography
					color="text.secondary"
					sx={{ fontSize: { xs: "12px", sm: "14px" } }}
				>
					{userPerfil?.email}
				</Typography>

				{userPerfil?.cpf && (
					<Typography
						color="text.secondary"
						sx={{ fontSize: { xs: "12px", sm: "14px" } }}
					>
						{cpfOurCnpj({ text: userPerfil.cpf, type: "cpf" })}
					</Typography>
				)}

				<Typography
					color="text.secondary"
					sx={{ fontSize: { xs: "12px", sm: "14px" } }}
				>
					{cpfOurCnpj({
						text: userPerfil?.phone1 || "",
						type: "phone",
					})}
				</Typography>
			</Box>
		</CardCore>
	);
};
