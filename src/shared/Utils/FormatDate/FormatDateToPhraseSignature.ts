import moment from "moment";

export const handleFormatDateToPhraseSignature = (date: string) => {
	return moment(date).format("DD [de] MMMM [de] YYYY");
};

export const handleFormatDateToPhraseSignatureWithHour = (date: string) => {
	return moment(date).format("DD [de] MMMM [de] YYYY [as] HH:mm");
};
