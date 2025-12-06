import { Box, Typography } from "@mui/material";

export const InfoModalContacts = () => {
	return (
		<Box>
			<Typography variant="h6">Métodos para Adicionar Contatos</Typography>
			<Typography paragraph>
				Existem duas formas de adicionar contatos à sua lista:
			</Typography>

			<Typography variant="subtitle1" fontWeight="bold" gutterBottom>
				1. Criação Manual de Contatos
			</Typography>
			<Typography component="ol" mb={2}>
				<li>
					Acesse a seção <strong>Contatos</strong> no menu lateral.
				</li>
				<li>
					Clique em <strong>Adicionar Contato</strong>.
				</li>
				<li>
					Preencha os dados do contato: nome, número de telefone e informações
					adicionais.
				</li>
				<li>Salve o contato para adicioná-lo à sua lista.</li>
			</Typography>

			<Typography variant="subtitle1" fontWeight="bold" gutterBottom>
				2. Ativação Automática na Configuração do WhatsApp
			</Typography>
			<Typography component="ol" mb={2}>
				<li>
					Vá até a seção <strong>WhatsApp</strong> no menu lateral.
				</li>
				<li>Selecione o número conectado que deseja configurar.</li>
				<li>
					Acesse as <strong>Configurações Gerais</strong> do número.
				</li>
				<li>
					Ative a opção <strong>Salvar Novos Contatos Automaticamente</strong>.
				</li>
				<li>
					Com essa configuração ativada, todos os novos números que chegarem via
					WhatsApp serão automaticamente salvos na sua lista de contatos.
				</li>
			</Typography>
		</Box>
	);
};
