interface ICpfOurCnpj {
	text: string;
	type: "cpf" | "cnpj" | "phone";
}

const maskPhone = (text: string) => {
	const textMask = text
		.replace(/\D/g, "")
		.replace(/^(\d{2})(\d)/g, "($1) $2")
		.replace(/(\d)(\d{4})$/, "$1-$2");

	return textMask;
};

export const cpfOurCnpj = ({ text, type }: ICpfOurCnpj) => {
	switch (type) {
		case "phone":
			return maskPhone(text);

		default:
			return text;
	}
};
