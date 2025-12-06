import { FC, SyntheticEvent } from "react";
import { Box, BoxProps, CircularProgress, SxProps } from "@mui/material";

import { ButtonCore } from "../ButtonCore/ButtonCore";
import { SendIcon } from "../Icons/Icons";

type IAppTextField = BoxProps & {
	sxStyle?: SxProps;
	loadingSubmit?: boolean;
	handleSubmit?: () => void;
	titleSubmit?: string;

	handleCancel?: () => void;
	isNotCancel?: boolean;
	marginTopButtons?: string;
};
export const FormCore: FC<IAppTextField> = ({
	children,
	sxStyle,
	isNotCancel,
	titleSubmit,
	handleCancel,
	handleSubmit,
	loadingSubmit,
	marginTopButtons,
	...props
}) => {
	return (
		<Box
			component="form"
			{...props}
			autoComplete="false"
			sx={{ margin: "0 1.4rem", ...sxStyle }}
			onSubmit={(e: SyntheticEvent) => e.preventDefault()}
		>
			{children}

			{handleSubmit && (
				<Box sx={{ textAlign: "end", marginTop: marginTopButtons || "16px" }}>
					{!isNotCancel && (
						<ButtonCore
							title="Cancelar"
							onClick={handleCancel}
							variant="outlined"
						/>
					)}

					<ButtonCore
						disabled={loadingSubmit}
						endIcon={
							loadingSubmit ? (
								<CircularProgress size={15} sx={{ mr: 1, color: "black" }} />
							) : (
								<SendIcon sx={{ width: { xs: "14px", sm: "18px" } }} />
							)
						}
						sx={{ marginLeft: isNotCancel ? "0" : "12px" }}
						title={titleSubmit || "Salvar"}
						type="submit"
						onClick={handleSubmit}
					/>
				</Box>
			)}
		</Box>
	);
};
