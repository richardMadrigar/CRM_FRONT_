import { useState } from "react";
import { Box, Autocomplete, CircularProgress } from "@mui/material";
import { useLayoutMainContext } from "src/Contexts/MainLayoutContext";
import { api } from "src/shared/setup/API/api";

import { AppTextField } from "../AppFormComponents/AppTextField";

import { IPropsAutoCompletedGeneric } from "./types";

interface Option {
	id: string;
	label: string;
}

export const AutoCompleteGeneric = ({
	url,
	label,
	width,
	variant,
	tamanho,
	tooltip,
	disabled,
	minWidth,
	maxWidth,
	isGroupBy,
	fullWidth,
	doesNotViewId,
	valueAutoCompleted,
	setValueAutoCompleted,
}: IPropsAutoCompletedGeneric) => {
	const { handleGetAlert } = useLayoutMainContext();

	const [loading, setLoading] = useState(false);

	const [listValuesAutoCompleted, setListValuesAutoCompleted] = useState([
		{ label: "", id: "" },
	]);

	const handleSelectInputs = () => {
		setListValuesAutoCompleted([{ label: "", id: "" }]);
		setLoading(true);
		api
			.get(`${url}`)
			.then((data) => setListValuesAutoCompleted(data.data))
			.catch((error) =>
				handleGetAlert({ message: error.response.data.message }),
			)
			.finally(() => setLoading(false));
	};

	const filterOptions = (
		options: Option[],
		{ inputValue }: { inputValue: string },
	): Option[] => {
		return options.filter(
			(option) =>
				option.label.toLowerCase().includes(inputValue.toLowerCase()) ||
				option.id.toLowerCase().includes(inputValue.toLowerCase()),
		);
	};

	const configTextfield = {
		fullWidth,
		label,
		width,
		name: label,
	};

	return (
		<Autocomplete
			disablePortal
			disabled={disabled}
			filterOptions={filterOptions}
			getOptionLabel={(option) =>
				`${doesNotViewId ? "" : option?.id && `${option?.id} - `}${
					option.label
				}`
			}
			groupBy={
				isGroupBy ? (option) => option?.label[0]?.toUpperCase() : undefined
			}
			id="controllable-states-demo"
			isOptionEqualToValue={() => true}
			options={listValuesAutoCompleted}
			renderGroup={(options) => (
				<Box key={options.key}>
					<Box
						sx={{ fontSize: ".9rem", marginLeft: "1.2rem", padding: "4px 0" }}
					>
						{options.group}
					</Box>
					<Box>{options.children}</Box>
				</Box>
			)}
			renderInput={(params) => (
				<AppTextField
					focused
					type="text"
					variant={variant}
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
						opacity: disabled ? ".5" : "",
						pointerEvents: disabled ? "none" : "auto",
					}}
					tooltip={tooltip}
				/>
			)}
			renderOption={(props, option) => (
				<Box
					component="li"
					{...props}
					key={option.id || option.label}
					sx={{ fontSize: ".75rem", padding: 0, margin: 0 }}
				>
					{doesNotViewId ? "" : option.id}
					{`${!doesNotViewId && option.id && option.label ? " - " : " "}`}
					{`${!option.id && !option.label ? " - " : " "}`}
					{option.label}
				</Box>
			)}
			value={valueAutoCompleted}
			onChange={(event, newValue) =>
				setValueAutoCompleted({
					label: newValue?.label ? newValue.label : "",
					id: newValue?.id ? newValue.id : "",
				})
			}
			onOpen={handleSelectInputs}
		/>
	);
};
