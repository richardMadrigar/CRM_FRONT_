import { Button, Tooltip, useTheme } from "@mui/material";

import { FilterAltOffIcon } from "../../Icons/Icons";
import { ButtonCore } from "../../ButtonCore/ButtonCore";
import FilterListIcon from "@mui/icons-material/FilterList";

type IButtonsFormFilter = {
	FilterClear: () => Promise<void>;
	handleOpen: () => void;
};

export const ButtonsHeaderFormFilter = ({
	FilterClear,
	handleOpen,
}: IButtonsFormFilter) => {
	const theme = useTheme();

	return (
		<>
			<ButtonCore
				startIcon={<FilterListIcon />}
				onClick={handleOpen}
				title="Filtro"
				size="small"
			/>

			<Tooltip title="Limpar filtro">
				<Button
					color="error"
					sx={{
						marginLeft: "12px",
						width: { xs: "70px" },
						[theme.breakpoints.down("sm")]: {
							margin: "8px",
						},
					}}
					variant="outlined"
					size="small"
					onClick={FilterClear}
				>
					<FilterAltOffIcon />
				</Button>
			</Tooltip>
		</>
	);
};
