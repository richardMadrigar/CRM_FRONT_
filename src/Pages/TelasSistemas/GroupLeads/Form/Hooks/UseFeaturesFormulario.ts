import { useState } from "react";
import { useContextCampaign } from "src/Contexts/Campaign/ContextCampaign";
import { useConfigPageContext } from "src/Contexts/configPagesContext/configPagesContext";
import { useLayoutMainContext } from "src/Contexts/MainLayoutContext";
import { api } from "src/shared/setup/API/api";

interface IUseFormGroupLeads {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UseFormGroupLeads = ({ setOpenModal }: IUseFormGroupLeads) => {
  const { setAttTable, attTable, id } = useConfigPageContext();
  const { valuesInputsGroupLeads } = useContextCampaign();
  const { handleGetAlert } = useLayoutMainContext();

  const [loading, setLoading] = useState(false);

  const AllDatas = {
    description: valuesInputsGroupLeads.description,
    name: valuesInputsGroupLeads.name,
    idLeads: valuesInputsGroupLeads?.leads?.map((item) => item?.id),
  };

  const handleCreate = async () => {
    if (!AllDatas.name)
      return handleGetAlert({ message: `Digite um título !` });

    setLoading(true);

    return api
      .post("/group-leads", AllDatas)
      .then((res) => {
        handleGetAlert({ message: res.data.message });
        setAttTable(!attTable);
        setOpenModal(false);
      })
      .catch((error) =>
        handleGetAlert({ message: error.response.data.message }),
      )
      .finally(() => setLoading(false));
  };

  const handleEdit = () => {
    if (!AllDatas.name)
      return handleGetAlert({ message: `Digite um título !` });

    setLoading(true);

    return api
      .put(`/group-leads/${id}`, AllDatas)
      .then((res) => {
        handleGetAlert({ message: res.data.message });
        setAttTable(!attTable);
        setOpenModal(false);
      })
      .catch((error) =>
        handleGetAlert({ message: error.response.data.message }),
      )
      .finally(() => setLoading(false));
  };

  const handleSubmit = () => {
    if (id) {
      handleEdit();
    } else {
      handleCreate();
    }
  };

  return { handleSubmit, loading };
};
