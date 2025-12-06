import { Box, Typography } from "@mui/material";

export const InfoModalGroupLeads = () => {
	return (
		<Box>
			<Typography paragraph>
				Os Grupos de Leads permitem organizar e segmentar seus contatos de forma
				eficiente, facilitando a criação de campanhas direcionadas.
			</Typography>

			<Typography variant="h6">Criando um Grupo de Leads</Typography>
			<Typography component="ol" mb={2}>
				<li>Acesse a tela de Grupos de Leads.</li>
				<li>
					Clique no botão <strong>Criar Grupo</strong>.
				</li>
				<li>Escolha um nome para o grupo e adicione uma descrição opcional.</li>
				<li>Selecione os leads que deseja adicionar ao grupo.</li>
				<li>
					Clique em <strong>Salvar</strong> para concluir a criação.
				</li>
			</Typography>

			<Typography variant="h6">Editando um Grupo de Leads</Typography>
			<Typography component="ol" mb={2}>
				<li>Na listagem de grupos, encontre o grupo desejado.</li>
				<li>
					Clique no ícone de <strong>edição</strong>.
				</li>
				<li>Altere o nome, a descrição ou os leads associados ao grupo.</li>
				<li>
					Clique em <strong>Salvar Alterações</strong>.
				</li>
			</Typography>

			<Typography variant="h6">Excluindo um Grupo de Leads</Typography>
			<Typography component="ol" mb={2}>
				<li>Localize o grupo que deseja excluir.</li>
				<li>
					Clique no ícone de <strong>lixeira</strong>.
				</li>
				<li>Confirme a exclusão na janela de confirmação.</li>
				<li>
					<strong>Atenção:</strong> Essa ação é irreversível e o grupo será
					removido permanentemente.
				</li>
			</Typography>

			<Typography variant="h6">Dicas e Melhores Práticas</Typography>
			<Typography component="ul" mb={2}>
				<li>
					<strong>Organize seus grupos:</strong> Crie grupos baseados em
					características comuns dos leads, como interesses, localização ou
					status no funil de vendas.
				</li>
				<li>
					<strong>Revise regularmente:</strong> Atualize seus grupos para manter
					as informações sempre corretas.
				</li>
				<li>
					<strong>Use nas campanhas:</strong> Grupos bem estruturados melhoram a
					segmentação e aumentam a eficiência das campanhas.
				</li>
			</Typography>

			<Typography paragraph>
				Agora você está pronto para gerenciar seus Grupos de Leads de forma
				estratégica!
			</Typography>
		</Box>
	);
};
