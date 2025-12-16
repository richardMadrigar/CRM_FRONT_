import { type SxProps, TextField, Tooltip } from "@mui/material";
import type { TextFieldProps } from "@mui/material/TextField/TextField";
import type { FC } from "react";

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
