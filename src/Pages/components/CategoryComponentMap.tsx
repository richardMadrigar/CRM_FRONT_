import { Chip } from "@mui/material";
import {
	CallMissedOutgoingOutlinedIcon,
	AttachMoneyIcon,
	FileCopyIcon,
	Person2Icon,
	GroupsIcon,
	PeopleIcon,
} from "src/Pages/components/Icons/Icons";

export const handleChipCoreCategories = (type: string) => {
	switch (type.toUpperCase()) {
		case "SALDO_INICIAL":
			return (
				<Chip
					color="info"
					icon={<CallMissedOutgoingOutlinedIcon sx={{ paddingLeft: "2px" }} />}
					label="Saldo inicial"
					size="small"
					sx={{
						maxWidth: "120px",
						display: "flex",
						justifyContent: "left",
						paddingTop: "2px",
					}}
					variant="outlined"
				/>
			);
		case "LANCAMENTO":
			return (
				<Chip
					color="success"
					icon={<AttachMoneyIcon />}
					label="Lançamento"
					size="small"
					sx={{
						maxWidth: "120px",
						display: "flex",
						justifyContent: "left",
						paddingTop: "2px",
					}}
					variant="outlined"
				/>
			);
		case "LISTAGEM":
			return (
				<Chip
					color="warning"
					icon={<FileCopyIcon sx={{ paddingLeft: "3px", width: "16px" }} />}
					label="Listagem"
					size="small"
					sx={{
						maxWidth: "120px",
						display: "flex",
						justifyContent: "left",
						paddingTop: "2px",
					}}
					variant="outlined"
				/>
			);
		case "CORRETOR":
			return (
				<Chip
					color="info"
					icon={<Person2Icon sx={{ paddingLeft: "3px", width: "24px" }} />}
					label="CORRETOR"
					size="small"
					sx={{
						maxWidth: "125px",
						display: "flex",
						justifyContent: "left",
						paddingTop: "2px",
					}}
					variant="outlined"
				/>
			);
		case "SUPERVISOR":
			return (
				<Chip
					color="secondary"
					icon={<GroupsIcon sx={{ paddingLeft: "3px", width: "24px" }} />}
					label="SUPERVISOR"
					size="small"
					sx={{
						maxWidth: "125px",
						display: "flex",
						justifyContent: "left",
						paddingTop: "2px",
					}}
					variant="outlined"
				/>
			);
		case "GERENTE":
			return (
				<Chip
					color="success"
					icon={<PeopleIcon sx={{ paddingLeft: "3px", width: "24px" }} />}
					label="GERENTE"
					size="small"
					sx={{
						maxWidth: "125px",
						display: "flex",
						justifyContent: "left",
						paddingTop: "2px",
					}}
					variant="outlined"
				/>
			);

		case "CONFIRMED":
			return (
				<Chip
					label="Confirmado"
					size="small"
					sx={{
						borderColor: "#09c203",
						color: "#09c203",
						maxWidth: "125px",
						display: "flex",
						justifyContent: "center",
						paddingTop: "2px",
					}}
					variant="outlined"
				/>
			);
		case "PENDING":
			return (
				<Chip
					label="Pendente"
					size="small"
					sx={{
						borderColor: "#f28407",
						color: "#f28407",
						maxWidth: "125px",
						display: "flex",
						justifyContent: "center",
						paddingTop: "2px",
					}}
					variant="outlined"
				/>
			);
		case "CREDIT_CARD":
			return (
				<Chip
					label="Cartão de crédito"
					size="small"
					sx={{
						borderColor: "#e45424",
						color: "#e45424",
						maxWidth: "125px",
						display: "flex",
						justifyContent: "center",
						paddingTop: "2px",
					}}
					variant="outlined"
				/>
			);
		case "PIX":
			return (
				<Chip
					label="PIX"
					size="small"
					sx={{
						borderColor: "#03c2a9",
						color: "#03c2a9",
						maxWidth: "125px",
						display: "flex",
						justifyContent: "center",
						paddingTop: "2px",
					}}
					variant="outlined"
				/>
			);
		case "BOLETO":
			return (
				<Chip
					label="Cartão de crédito"
					size="small"
					sx={{
						borderColor: "#6fc203",
						color: "#6fc203",
						maxWidth: "125px",
						display: "flex",
						justifyContent: "center",
						paddingTop: "2px",
					}}
					variant="outlined"
				/>
			);

		default:
			return (
				<Chip
					color="info"
					label={type}
					size="small"
					sx={{ paddingTop: "2px" }}
					variant="outlined"
				/>
			);
	}
};
