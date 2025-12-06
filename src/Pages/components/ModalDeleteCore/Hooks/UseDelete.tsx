import { useState } from "react";
import { useConfigPageContext } from "src/Contexts/configPagesContext/configPagesContext";
import { useLayoutMainContext } from "src/Contexts/MainLayoutContext";
import { api } from "src/shared/setup/API/api";

interface IUseDelete {
	url: string;
	params?: string;
}

export const UseDelete = ({ url, params }: IUseDelete) => {
	const { handleGetAlert } = useLayoutMainContext();
	const { setAttTable } = useConfigPageContext();

	const [loading, setLoading] = useState(false);
	const [open, setOpen] = useState(false);
	const [id, setId] = useState<string | number>("");

	const handleDelete = async () => {
		if (!id)
			return handleGetAlert({ message: "Escolha uma linha para deletar" });

		setLoading(true);

		return api
			.delete(`${url}/${id}?${params}`)
			.then((res) => {
				setOpen(false);
				handleGetAlert({ message: res.data.message });
				setAttTable((item) => !item);
				setId("");
			})
			.catch((error) =>
				handleGetAlert({ message: error.response.data.message }),
			)
			.finally(() => {
				setLoading(false);
			});
	};

	return {
		handleDelete,
		loading,
		setOpen,
		setId,
		open,
	};
};
