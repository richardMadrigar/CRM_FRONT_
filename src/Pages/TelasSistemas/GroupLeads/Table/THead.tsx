import { IDataTh, ThCoreIndex } from "src/Pages/components";

export const THeadGroupLeads = () => {
	const dataTh: IDataTh[] = [
		{
			title: "Ações",
			width: "40px",
			align: "left",
		},
		{
			title: "Nome do grupo",
			align: "left",
			width: "200px",
			minWidth: "200px",
		},
		{
			title: "Leads",
			align: "left",
			width: "450px",
			minWidth: "450px",
		},
		{
			title: "Data de criação",
			align: "left",
			width: "130px",
			minWidth: "130px",
			tooltip: "Data da assinatura",
		},
		// {
		//   title: "Operadoras",
		//   align: "left",
		//   minWidth: "100px",
		//   width: "100px",
		// },

		// {
		//   title: "Mensalidade",
		//   align: "left",
		//   width: "50px",
		// },
		// {
		//   title: "Titular/Razão",
		//   align: "left",
		//   width: "200px",
		//   minWidth: "150px",
		// },
	];

	return <ThCoreIndex dataTh={dataTh} />;
};
