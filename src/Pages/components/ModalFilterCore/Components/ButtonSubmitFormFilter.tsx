import { Box, Tooltip } from "@mui/material";
import { useConfigPageContext } from "src/Contexts/configPagesContext/configPagesContext";

import { ButtonCore } from "../../ButtonCore/ButtonCore";
import { FilterAltOffIcon, SendIcon } from "../../Icons/Icons";

type IButtonsFormFilter = {
	FilterClear: () => Promise<void>;
	FilterSearch: () => Promise<void>;
};

export const ButtonSubmitFormFilter = ({
	FilterClear,
	FilterSearch,
}: IButtonsFormFilter) => {
	const { loadingTable } = useConfigPageContext();

	return (
		<Box sx={{ display: "flex" }}>
			<Tooltip title="Limpar filtro">
				<ButtonCore
					endIcon={<FilterAltOffIcon fontSize="small" />}
					sx={{ width: "25%" }}
					title="Limpar"
					variant="outlined"
					onClick={FilterClear}
				/>
			</Tooltip>

			<ButtonCore
				disabled={loadingTable}
				endIcon={<SendIcon fontSize="small" />}
				sx={{ marginLeft: "8px", width: "75%" }}
				title="Filtrar"
				type="submit"
				onClick={FilterSearch}
			/>
		</Box>
	);
};
