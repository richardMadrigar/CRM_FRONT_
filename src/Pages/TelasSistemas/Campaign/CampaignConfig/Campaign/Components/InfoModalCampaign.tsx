import { Box, Typography } from "@mui/material";

export const InfoModalCampaign = () => {
	return (
		<Box>
			<Typography paragraph>
				A tela de Campanhas permite gerenciar e automatizar disparos em massa
				via WhatsApp para listas de Leads. Para criar uma campanha, é necessário
				ter um <strong>número de WhatsApp conectado</strong> e pelo menos um{" "}
				<strong>Grupo de Leads</strong> cadastrado.
			</Typography>

			<Typography variant="h6">Criando uma Campanha</Typography>
			<Typography component="ol">
				<li>
					Clique no botão <strong>Criar Campanha</strong>.
				</li>
				<li>
					Escolha um nome para a campanha e adicione uma descrição opcional.
				</li>
				<li>
					Selecione um <strong>Grupo de Leads</strong> para receber as
					mensagens.
				</li>
				<li>
					Escolha um <strong>número de WhatsApp conectado</strong> para o
					disparo.
				</li>
				<li>
					Configure o fluxo da campanha:
					<ul>
						<li>
							Defina <strong>dias e horários</strong> para os envios.
						</li>
						<li>Escreva a mensagem a ser enviada.</li>
					</ul>
				</li>
				<li>
					Clique em <strong>Salvar</strong> para concluir a configuração.
				</li>
			</Typography>

			<Typography variant="h6">Editando uma Campanha</Typography>
			<Typography component="ol" mb={2}>
				<li>Na listagem de campanhas, encontre a campanha desejada.</li>
				<li>
					Clique no ícone de <strong>edição</strong>.
				</li>
				<li>
					Altere os detalhes da campanha, como nome, mensagem ou horários de
					envio.
				</li>
				<li>
					Clique em <strong>Salvar Alterações</strong>.
				</li>
			</Typography>

			<Typography variant="h6">Excluindo uma Campanha</Typography>
			<Typography component="ol" mb={2}>
				<li>Localize a campanha que deseja excluir.</li>
				<li>
					Clique no ícone de <strong>lixeira</strong>.
				</li>
				<li>Confirme a exclusão na janela de confirmação.</li>
				<li>
					<strong>Atenção:</strong> Essa ação é irreversível e a campanha será
					removida permanentemente.
				</li>
			</Typography>

			<Typography variant="h6">Status da Campanha</Typography>
			<Typography component="ul" mb={2}>
				<li>
					<strong>Ativa:</strong> Está em execução e enviando mensagens conforme
					configurado.
				</li>
				<li>
					<strong>Desativada:</strong> A campanha existe, mas não está
					disparando mensagens.
				</li>
				<li>
					<strong>Em andamento:</strong> A campanha já iniciou e está enviando
					mensagens programadas.
				</li>
				<li>
					<strong>Finalizada:</strong> Todos os envios foram concluídos.
				</li>
				<li>
					<strong>Falta configuração:</strong> Algum requisito obrigatório não
					foi atendido (como número de WhatsApp ou Grupo de Leads).
				</li>
			</Typography>

			<Typography variant="h6">Dicas e Melhores Práticas</Typography>
			<Typography component="ul" mb={2}>
				<li>
					<strong>Verifique seus números:</strong> Certifique-se de que seu
					número de WhatsApp está conectado na tela de Número WhatsApp.
				</li>
				<li>
					<strong>Segmentação eficiente:</strong> Use Grupos de Leads bem
					definidos para melhorar a conversão.
				</li>
				<li>
					<strong>Acompanhe os status:</strong> Mantenha o controle das
					campanhas para evitar falhas nos disparos.
				</li>
				<li>
					<strong>Teste antes de enviar:</strong> Revise suas mensagens e
					cronograma para garantir que tudo está configurado corretamente.
				</li>
			</Typography>

			<Typography paragraph>
				Agora você está pronto para gerenciar suas campanhas e aumentar o
				alcance das suas mensagens com eficiência!
			</Typography>
		</Box>
	);
};
