import { useState, useEffect } from "react";
import CachedIcon from "@mui/icons-material/Cached";
import { IconButton, Tooltip, keyframes, Theme } from "@mui/material";
import { SxProps } from "@mui/system"; // Import SxProps

interface RotatingCachedIconProps {
	onClick: () => void;
	isLoading: boolean;
	tooltipTitle?: string;
	iconButtonSx?: SxProps<Theme>; // Use SxProps<Theme>
	iconSx?: SxProps<Theme>; // Use SxProps<Theme>
}

// Define the rotation animation
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const RotatingCachedIcon = ({
	onClick,
	isLoading,
	tooltipTitle = "Recarregar",
	iconButtonSx = {},
	iconSx = {},
}: RotatingCachedIconProps) => {
	const [isSpinning, setIsSpinning] = useState(true);

	useEffect(() => {
		if (!isLoading) {
			setIsSpinning(false);
		}
	}, [isLoading]);

	const handleClick = () => {
		if (!isLoading) {
			setIsSpinning(true);
			onClick();
		}
	};

	return (
		<Tooltip title={tooltipTitle}>
			<span>
				<IconButton
					sx={iconButtonSx}
					onClick={handleClick}
					disabled={isLoading}
				>
					<CachedIcon
						sx={{
							...iconSx,
							animation: isSpinning ? `${rotate} 2s linear infinite` : "none",
						}}
					/>
				</IconButton>
			</span>
		</Tooltip>
	);
};
