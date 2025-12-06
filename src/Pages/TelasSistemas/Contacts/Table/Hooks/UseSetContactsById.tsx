// import { handleFormatDateIfIsNull } from "src/shared/Utils/handleFormatDateIfIsNull";
// import { cpfOurCnpj } from "src/shared/Utils/MaskCpfCnpj";

export const UseSetContactsById = () => {
	// const { setValuesInputsLeads } = useContextLeads();

	const handleSetDateLeadsGetById = async () =>
		// data: IListLeads
		{
			// setValuesInputsLeads({
			//   ...data,
			//   observation: data.observation || "",
			//   whats: formatString({ type: "phone", value: data.whats }) || "",
			//   telefone1: formatString({ type: "phone", value: data.telefone1 }) || "",
			//   cpf: cpfOurCnpj({ text: data.cpf || "", type: "cpf" }),
			//   birthDate: handleFormatDateIfIsNull(data.birthDate),
			//   captureAt: handleFormatDateIfIsNull(data.captureAt),
			//   entityType: data.entityType || " ",
			//   isPlan:
			//     data.isPlan === true ? "TRUE" : data.isPlan === false ? "FALSE" : "NOT",
			// });
		};

	return { handleSetDateLeadsGetById };
};
