import { Typography } from "@mui/material";

interface IIsView {
	loadingTable: boolean;
	qtdList: number;
	title?: string;
}

export const TrNotList = ({
	title = "Nenhum registro encontrado",
	loadingTable,
	qtdList,
}: IIsView) => {
	return (
		<>
			{loadingTable && qtdList === 0 && (
				<Typography
					sx={{
						textAlign: "center",
						padding: "10px",
						width: "100%",
					}}
				>
					{title}
				</Typography>
			)}
		</>
	);
};
