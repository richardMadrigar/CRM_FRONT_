import { IDataTh, ThCoreIndex } from "src/Pages/components";

export const THeadContacts = () => {
	const dataTh: IDataTh[] = [
		{
			title: "Ações",
			width: "40px",
			align: "left",
		},
		{
			title: "Nome",
			align: "left",
			width: "200px",
			minWidth: "200px",
		},

		{
			title: "Telefones",
			align: "left",
			width: "150px",
			minWidth: "150px",
		},
		{
			title: "Tipo",
			align: "center",
			width: "100px",
			minWidth: "100px",
		},
		{
			title: "Status",
			align: "center",
			width: "80px",
			minWidth: "80px",
		},
		{
			title: "Nível interesse",
			align: "center",
			width: "120px",
			minWidth: "120px",
		},
		{
			title: "Fonte captura",
			align: "left",
			width: "150px",
			minWidth: "150px",
		},

		{
			title: "Data de criação",
			align: "left",
			width: "200px",
			minWidth: "200px",
		},
	];

	return <ThCoreIndex dataTh={dataTh} />;
};
