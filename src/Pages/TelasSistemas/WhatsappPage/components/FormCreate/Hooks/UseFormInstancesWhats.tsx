import { useState } from "react";
import { useConfigPageContext } from "src/Contexts/configPagesContext/configPagesContext";
import { useContextConnectionWhats } from "src/Contexts/ConnectionWhats/ContextConnectionWhats";
import { useLayoutMainContext } from "src/Contexts/MainLayoutContext";
import { api } from "src/shared/setup/API/api";

interface IUseFormCommissions {
	setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UseFormInstancesWhats = ({
	setOpenModal,
}: IUseFormCommissions) => {
	const { valuesInputsInstancesWhats, setOpenQrCodeModal, setQrCode } =
		useContextConnectionWhats();
	const { setAttTable, id, setId } = useConfigPageContext();
	const { handleGetAlert } = useLayoutMainContext();

	const [loading, setLoading] = useState(false);

	const { title } = valuesInputsInstancesWhats;

	const gridCommissions = {
		title,
	};

	const handleCreate = async () => {
		setLoading(true);

		return api
			.post("/connections-whats", { ...gridCommissions })
			.then((res) => {
				handleGetAlert({ message: res.data.message });
				setAttTable((item) => !item);
				setOpenModal(false);

				setQrCode(res.data.qrcode);
				setOpenQrCodeModal(true);
			})
			.catch((error) =>
				handleGetAlert({ message: error.response.data.message }),
			)
			.finally(() => setLoading(false));
	};

	const handleEdit = async () => {
		setLoading(true);

		return api
			.put(`/connections-whats/${id}`, { ...gridCommissions })
			.then((res) => {
				setAttTable((item) => !item);
				handleGetAlert({ message: res.data.message });
				setOpenModal(false);
				setId("");
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
