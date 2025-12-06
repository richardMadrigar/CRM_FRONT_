import { BasePageLogin } from "../components/BasePageLogin";

import { FooterSendLinkRecoverPassword } from "./components/Footer/Footer";
import { PageFormSendLinkRecoverPassword } from "./components/Form";
import { HeaderSendLinkRecoverPassword } from "./components/Header/Header";

export const PageSendLinkRecoverPassword = () => {
	return (
		<BasePageLogin>
			<HeaderSendLinkRecoverPassword />

			<PageFormSendLinkRecoverPassword />

			<FooterSendLinkRecoverPassword />
		</BasePageLogin>
	);
};
