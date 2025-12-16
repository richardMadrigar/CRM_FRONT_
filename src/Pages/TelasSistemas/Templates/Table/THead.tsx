import { type IDataTh, ThCoreIndex } from "src/Pages/components";

export const THeadEmailTemplates = () => {
  const dataTh: IDataTh[] = [
    {
      title: "Ações",
      width: "40px",
      align: "left",
    },
    {
      title: "Nome",
      align: "left",
      width: "150px",
      minWidth: "150px",
    },
    {
      title: "Tipo",
      align: "left",
      width: "200px",
      minWidth: "200px",
    },
    {
      title: "Data de criação",
      align: "right",
      width: "300px",
      minWidth: "300px",
      tooltip: "Data da criação",
    },
  ];

  return <ThCoreIndex dataTh={dataTh} />;
};
