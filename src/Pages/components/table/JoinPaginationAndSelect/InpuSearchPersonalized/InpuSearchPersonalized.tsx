import { SetStateAction, Dispatch } from "react";
import InputBase from "@mui/material/InputBase";
import { SearchIcon } from "src/Pages/components/Icons/Icons";
import { styled } from "@mui/material/styles";
import { alpha } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
	position: "relative",
	marginRight: "12px",
	borderRadius: 10,
	border: `0.8px solid ${theme.palette.grey[600]}`,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	"&:hover": {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	width: "100%",
	[theme.breakpoints.up("sm")]: {
		width: "210px",
	},
	[theme.breakpoints.up("lg")]: {
		width: "250px",
	},
	[theme.breakpoints.down("sm")]: { marginBottom: "1rem" },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
	padding: theme.spacing(0, 1.6),
	height: "100%",
	position: "absolute",
	pointerEvents: "none",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: "inherit",
	"& .MuiInputBase-input": {
		padding: theme.spacing(0.7, 0.5, 0.5, 0),
		paddingLeft: `calc(1em + ${theme.spacing(3)})`,
		width: "100%",
		[theme.breakpoints.up("md")]: {
			width: "200px",
		},
	},
}));

type IInputSearch = {
	setNameSearch: Dispatch<SetStateAction<string>>;
};

export const InputSearchPersonalized = ({ setNameSearch }: IInputSearch) => {
	return (
		<Search>
			<SearchIconWrapper>
				<SearchIcon />
			</SearchIconWrapper>

			<StyledInputBase
				placeholder="Procurar"
				inputProps={{ "aria-label": "search" }}
				onChange={(e) => setNameSearch(e.target.value)}
				type="search"
			/>
		</Search>
	);
};
