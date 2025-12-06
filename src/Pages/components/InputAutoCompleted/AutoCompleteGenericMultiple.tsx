import { useState, useEffect } from "react";
import { Autocomplete, CircularProgress, Checkbox } from "@mui/material";
import { useLayoutMainContext } from "src/Contexts/MainLayoutContext";
import { api } from "src/shared/setup/API/api";

import { AppTextField } from "../AppFormComponents/AppTextField";
import { CheckBoxIcon, CheckBoxOutlineBlankIcon } from "../Icons/Icons";

import { IAutoCompletedGenericMultiple } from "./types";

export const AutoCompleteGenericMultiple = ({
	url,
	label,
	width,
	tamanho,
	disabled,
	variant,
	minWidth,
	maxWidth,
	fullWidth,
	openInClick,
	valueAutoCompleted,
	setValueAutoCompleted,
}: IAutoCompletedGenericMultiple) => {
	const { handleGetAlert } = useLayoutMainContext();

	const [loading, setLoading] = useState(false);

	const [listValuesAutoCompleted, setListValuesAutoCompleted] = useState([
		{ label: "", id: "" },
	]);

	const handleSelectInputs = async () => {
		setListValuesAutoCompleted([{ label: "", id: "" }]);

		setLoading(true);
		api
			.get(`${url}`)
			.then((data) => {
				setListValuesAutoCompleted(data.data);
			})
			.catch((error) =>
				handleGetAlert({ message: error.response.data.message }),
			)
			.finally(() => setLoading(false));
	};

	useEffect(() => {
		if (openInClick) handleSelectInputs();
	}, []);

	const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
	const checkedIcon = <CheckBoxIcon fontSize="small" />;
	const configTextfield = {
		fullWidth,
		label,
		width,
		name: label,
	};

	return (
		<Autocomplete
			disableCloseOnSelect
			disablePortal
			multiple
			disabled={disabled}
			getOptionLabel={(option) =>
				`${option?.id && `${option?.id} - `}${option.label}`
			}
			limitTags={1}
			options={listValuesAutoCompleted}
			renderInput={(params) => (
				<AppTextField
					type="text"
					{...configTextfield}
					{...params}
					InputProps={{
						...params.InputProps,
						endAdornment: (
							<>
								{loading ? (
									<CircularProgress color="inherit" size={20} />
								) : null}
								{params.InputProps.endAdornment}
							</>
						),
					}}
					sxStyle={{
						width: `${tamanho}`,
						minWidth: `${minWidth}`,
						maxWidth: `${maxWidth}`,
						margin: 0,
					}}
					variant={variant}
				/>
			)}
			renderOption={(props, option, { selected }) => (
				<li {...props}>
					<Checkbox
						checked={selected}
						checkedIcon={checkedIcon}
						icon={icon}
						style={{ marginRight: 8 }}
					/>
					{option.label}
				</li>
			)}
			size="small"
			sx={{ maxHeight: "20px" }}
			value={valueAutoCompleted}
			onChange={(event, newValue) => setValueAutoCompleted(newValue)}
			onOpen={() => !openInClick && handleSelectInputs()}
		/>
	);
};
