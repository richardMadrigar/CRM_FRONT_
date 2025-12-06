import { useContextCampaign } from "../Campaign/ContextCampaign";
import { useContextConnectionWhats } from "../ConnectionWhats/ContextConnectionWhats";
import { valuesDefaultInputsConnectionWhats } from "../ConnectionWhats/ValuesDefaultInputsConnectionWhats/valuesDefaultInputsConnectionWhats";
import { useContextContacts } from "../Contacts/ContextContacts";
import { valuesDefaultInputsContacts } from "../Contacts/ValuesDefaultInputsConnectionWhats/valuesDefaultInputsContextContacts";
import { useConfigPageContext } from "../configPagesContext/configPagesContext";
import { useContextEmailTemplates } from "../EmailTemplates/ContextEmailTemplates";
import { valuesDefaultInputsEmailTemplate } from "../EmailTemplates/ValuesDefaultInputsEmailTemplate/valuesDefaultInputsEmailTemplate";
import { valuesDefaultInputsCampaign } from "../Campaign/ValuesDefaultInputsCampaign/valuesDefaultInputsInstancesWhats";

export const useResetInputs = () => {
	const { setNameSearch, setId } = useConfigPageContext();
	const { setValuesInputsInstancesWhats } = useContextConnectionWhats();
	const { setValuesInputsContacts } = useContextContacts();

	const { setValuesInputsEmailTemplate } = useContextEmailTemplates();
	const { setValuesInputsCampaign } = useContextCampaign();

	const resetInputs = () => {
		setNameSearch("");
		setId("");
		setValuesInputsInstancesWhats(valuesDefaultInputsConnectionWhats);

		setValuesInputsContacts(valuesDefaultInputsContacts);

		setValuesInputsEmailTemplate(valuesDefaultInputsEmailTemplate);
		setValuesInputsCampaign(valuesDefaultInputsCampaign);

		// setValueAutoCompOperadora({ label: "", id: "" });
	};

	return { resetInputs };
};
