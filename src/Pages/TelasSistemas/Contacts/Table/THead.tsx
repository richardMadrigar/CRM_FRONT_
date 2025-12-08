import { type IDataTh, ThCoreIndex } from "src/Pages/components";

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
      width: "200px",
      minWidth: "200px",
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
