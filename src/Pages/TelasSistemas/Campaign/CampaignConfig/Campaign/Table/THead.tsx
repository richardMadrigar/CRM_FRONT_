import { type IDataTh, ThCoreIndex } from "src/Pages/components";

export const THeadCampaign = () => {
  const dataTh: IDataTh[] = [
    {
      title: "Ações",
      width: "80px",
      align: "center",
    },
    {
      title: "Nome da Campanha",
      align: "left",
      width: "200px",
      minWidth: "200px",
    },
    {
      title: "Configurações",
      align: "left",
      width: "200px",
      minWidth: "200px",
    },
    {
      title: "Assunto",
      align: "left",
      width: "250px",
      minWidth: "250px",
    },
    {
      title: "Data Agendamento",
      align: "left",
      width: "150px",
      minWidth: "150px",
    },
    {
      title: "Status",
      align: "center",
      width: "120px",
      minWidth: "120px",
    },

    {
      title: "Métricas",
      align: "left",
      width: "1000px",
      minWidth: "1000px",
    },
  ];

  return <ThCoreIndex dataTh={dataTh} />;
};
