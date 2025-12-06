import { IDataTh, ThCoreIndex } from "src/Pages/components";

export const THeadEmailTemplates = () => {
	const dataTh: IDataTh[] = [
		{
			title: "Ações",
			width: "40px",
			align: "left",
		},
		{
			title: "Conteúdo HTML",
			align: "left",
			width: "200px",
			minWidth: "200px",
		},
		{
			title: "Nome",
			align: "left",
			width: "50%",
			minWidth: "50%",
		},
		{
			title: "Data de criação",
			align: "left",
			width: "300px",
			minWidth: "300px",
			tooltip: "Data da criação",
		},
	];

	return <ThCoreIndex dataTh={dataTh} />;
};
