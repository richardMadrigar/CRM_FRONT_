// remove acentos
// funcionário => return "funcionario"

export const handleRemoveCharacterSpecial = (str: string) => {
	return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};
