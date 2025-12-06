import { FC } from "react";
import { SxProps, TextField, Tooltip } from "@mui/material";
import { TextFieldProps } from "@mui/material/TextField/TextField";

type IAppTextField = TextFieldProps & {
	sxStyle?: SxProps | undefined;
	tooltip?: string | undefined;
	error1?: string | undefined;
};

export const AppTextField: FC<IAppTextField> = ({
	sxStyle,
	tooltip,
	error1,
	...props
}: IAppTextField) => {
	return (
		<Tooltip enterDelay={1000} enterNextDelay={2000} title={tooltip || ""}>
			<TextField
				{...props}
				focused
				error={!!error1}
				helperText={error1}
				size={props.size ?? "small"}
				sx={{ ...sxStyle }}
				type={props.type ?? "search"}
			/>
		</Tooltip>
	);
};
