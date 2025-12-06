import { useState, MouseEvent, ReactNode, Children } from "react";
import { Box, SxProps, Tooltip, alpha } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { MoreVertIcon } from "../../Icons/Icons";

interface OptionsList {
	title: string;
	icon: ReactNode;
	onClick: () => void;
	isDisabled?: boolean;
	sxStyle?: SxProps;
	background?: "success" | "info" | "warning" | "error";
	Tooltip?: string;
}

interface IActionPopoverTable {
	optionsList: OptionsList[];
}

interface IHandleClickOption {
	onClick: () => void;
}

export const ActionPopoverTable = ({ optionsList }: IActionPopoverTable) => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

	const open = Boolean(anchorEl);

	const handleClick = (event: MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => setAnchorEl(null);

	const handleClickOption = ({ onClick }: IHandleClickOption) => {
		handleClose();
		onClick();
	};

	const resultBackground = {
		success: "#3cb916",
		warning: "#ed6c02",
		info: "#0e6aff",
		error: "#ff0000",
	};

	return (
		<>
			<IconButton
				aria-controls={open ? "long-menu" : undefined}
				aria-expanded={open ? "true" : undefined}
				aria-haspopup="true"
				aria-label="more"
				id="long-button"
				sx={{ border: `1px solid ${alpha("#3b3b3b", 0.1)}` }}
				onClick={handleClick}
			>
				<MoreVertIcon fontSize="small" />
			</IconButton>

			<Menu
				MenuListProps={{ "aria-labelledby": "basic-button" }}
				anchorEl={anchorEl}
				id="basic-menu"
				open={open}
				onClose={handleClose}
				slotProps={{
					paper: {
						sx: {
							borderRadius: "12px",
							minWidth: 150,
							padding: "4px 6px",
						},
					},
				}}
			>
				{Children.toArray(
					optionsList.map((option) => (
						<Tooltip title={option.Tooltip}>
							<MenuItem
								disabled={option.isDisabled}
								sx={{
									transition: "background-color 0.2s",
									margin: "6px",
									borderRadius: "12px",
									"&:hover": option.background
										? {
												backgroundColor: alpha(
													resultBackground[option.background],
													0.2,
												),
											}
										: "",

									...option.sxStyle,
								}}
								onClick={() => handleClickOption({ onClick: option.onClick })}
							>
								<Box
									sx={{
										width: "22px",
										marginRight: "8px",
										display: "flex",
										alignItems: "center",
									}}
								>
									{option.icon}
								</Box>

								<Box>{option.title}</Box>
							</MenuItem>
						</Tooltip>
					)),
				)}
			</Menu>
		</>
	);
};
