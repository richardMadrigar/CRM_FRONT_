import { Email as EmailIcon, People as PeopleIcon } from "@mui/icons-material";
import { Box, Chip, Grid, IconButton, Stack, Tooltip, Typography } from "@mui/material";
import moment from "moment";
import { Children, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useContextCampaign } from "src/Contexts/Campaign/ContextCampaign";
import { useConfigPageContext } from "src/Contexts/configPagesContext/configPagesContext";
import { useResetInputs } from "src/Contexts/hooks/useResetInputs";
import { useLayoutMainContext } from "src/Contexts/MainLayoutContext";
import {
  ModalDeleteCore,
  TableCore,
  TableRowCore,
  TdCore,
} from "src/Pages/components";
import { ButtonCore } from "src/Pages/components/ButtonCore/ButtonCore";
import {
  AddIcon,
  CurrencyExchangeIcon,
  DeleteForeverIcon,
  EditIcon,
  InfoOutlinedIcon,
} from "src/Pages/components/Icons/Icons";
import { RotatingCachedIcon } from "src/Pages/components/Icons/RotatingCachedIcon";
import { UseDelete } from "src/Pages/components/ModalDeleteCore/Hooks/UseDelete";
import { ActionPopoverTable } from "src/Pages/components/table/ActionPopover/ActionPopover";
import { api } from "src/shared/setup/API/api";
import { FormatDateBR } from "src/shared/Utils/FormatDateBR";
import { ModalCampaign } from "../Form";
import { UseGetByIdCampaign } from "./Hooks/UseGetByIdContratos";
import { useHttpTableCampaign } from "./Hooks/useHttpTableCampaign";
import { THeadCampaign } from "./THead";

interface ICompCardMetricsTableCampaign {
  title: string;
  description: number | string;
  background: string;
  color: string;
  tooltipTitle: string;
}

export const CompCardMetricsTableCampaign = ({
  title,
  description,
  background,
  color,
  tooltipTitle,
}: ICompCardMetricsTableCampaign) => {
  return (
    <Grid
      item
      sm={1.5}
      sx={{
        background,
        borderRadius: 2,
        m: 1,
        border: `1px solid ${background}`,
        padding: "8px",
        textAlign: "left",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 1,

      }}
    >
      <Box>
        <Typography color={color} sx={{ fontSize: "13px" }}>
          {title}
        </Typography>
        <Typography fontWeight="600" color={color} sx={{ fontSize: "13px" }}>
          {description}
        </Typography>
      </Box>

      <Tooltip title={tooltipTitle}>
        <IconButton>
          <InfoOutlinedIcon fontSize="small" />
        </IconButton>
      </Tooltip>
    </Grid >
  );
};

export const TableCampaign = () => {
  const { resetInputs } = useResetInputs();
  const { handleGet } = useHttpTableCampaign();
  const { listCampaign } = useContextCampaign();
  const { handleGetById } = UseGetByIdCampaign();
  const { handleGetAlert } = useLayoutMainContext();

  const navigate = useNavigate();

  const [openModalContracts, setOpenModalContracts] = useState(false);

  const {
    setNameSearch,
    itensPerPage,
    currentPage,
    setAttTable,
    nameSearch,
    attTable,
    setId,
    loadingTable,
  } = useConfigPageContext();

  const handleGetIdToEdit = (id: string) => {
    resetInputs();
    setOpenModalContracts(true);
    setId(id);
    handleGetById(id);
  };

  useEffect(() => {
    handleGet();

    const interval = setInterval(() => {
      handleGet();
    }, 30000 * 2); // 30s * 2 = 60s
    return () => clearInterval(interval);
  }, [attTable, itensPerPage, currentPage, nameSearch]);

  const {
    handleDelete,
    open: openModalDelete,
    loading: loadingDelete,
    setId: setIdModalDelete,
    setOpen: setOpenModalDelete,
  } = UseDelete({ url: "/campaign" });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    id: string,
  ) => {
    api
      .patch(`/campaign/change-status/${id}`, {
        status: event.target.checked,
      })
      .then((res) => {
        handleGetAlert({ message: res.data.message });
        setAttTable(!attTable);
      })
      .catch((error) =>
        handleGetAlert({ message: error.response.data.message }),
      );
  };

  return (
    <TableCore
      Modals={
        <>
          <ModalCampaign
            openModal={openModalContracts}
            setOpenModal={setOpenModalContracts}
          />

          <ModalDeleteCore
            loading={loadingDelete}
            modalOpen={openModalDelete}
            no="Não, Cancelar"
            titlePrimary="Você deseja campanha ?"
            yes="Sim, Deletar !"
            onClickFalse={() => setOpenModalDelete(false)}
            onClickTrue={handleDelete}
            titleSecondary="Esta ação é irreversível. Após deletar, não será possível recuperar a campanha. Não é permitido excluir campanhas que já executaram algum fluxo."
          />
        </>
      }
      THead={<THeadCampaign />}
      // modalInfo={{
      //   children: <InfoModalCampaign />,
      //   title: "Tutorial: Campanhas",
      // }}
      qtdList={listCampaign.length}
      setNameSearch={setNameSearch}
      cardAdd={{
        buttons: [
          <RotatingCachedIcon
            onClick={() => setAttTable((item) => !item)}
            isLoading={loadingTable}
            tooltipTitle="Recarregar a página"
            iconButtonSx={{ mr: 1.5, ml: -2 }}
          />,
          <ButtonCore
            startIcon={<AddIcon />}
            title="Criar campanha"
            size="small"
            onClick={() => setOpenModalContracts(true)}
          />,
        ],
      }}
    >
      {Children.toArray(
        listCampaign.map((item) => {
          // Função para obter cor do status do template
          const getTemplateStatusColor = (status: string) => {
            switch (status) {
              case "COMPLETED":
                return "success";
              case "IN_PROGRESS":
                return "warning";
              case "PENDING":
                return "info";
              case "PAUSED":
                return "error";
              default:
                return "default";
            }
          };

          // Função para obter texto do status do template
          const getTemplateStatusText = (status: string) => {
            switch (status) {
              case "COMPLETED":
                return "Concluída";
              case "IN_PROGRESS":
                return "Em andamento";
              case "PENDING":
                return "Agendada";
              case "PAUSED":
                return "Pausada";
              default:
                return status;
            }
          };

          const totalRequest = item.totalSent || 0;
          const totalDelivered = item.statusCount.DELIVERY || 0;
          const totalOpened = item.statusCount.OPEN || 0;
          const totalClicks = item.statusCount.CLICK || 0;
          const totalUniqueOpened = item.statusCount.CLICK || 0;
          // const totalUniqueProxyOpen = item.statusCount.unique_proxy_open;
          const totalHardBounce = item.statusCount.BOUNCE || 0;
          // const totalSoftBounce = item.statusCount.soft_bounce;
          // const totalBlocked = item.statusCount.blocked;
          // const totalDeferred = item.statusCount.deferred;
          // const totalProxyOpen = item.statusCount.proxy_open;
          // const totalUnsubscribed = item.statusCount.unsubscribed;
          const totalSpam = item.statusCount.SPAM_COMPLAINT || 0;

          const percentDeliverabilityRate = item.metrics.deliverabilityRate || 0 // Capacidade de entrega
          const percentOpenRate = item.metrics.openRate || 0  // taxa de abertura
          const percentClickRate = item.metrics.clickRate || 0 // taxa de cliques
          // const percentUnsubscribeRate = item.metrics.unsubscribeRate // taxa de cancelamento
          const percentSpamReportRate = item.metrics.spamReportRate || 0 // taxa de spam
          const percentHardBounceRate = item.metrics.SPAM_COMPLAINT || 0 // taxa de hard bounce
          // const percentSoftBounceRate = item.metrics.softBounceRate // taxa de soft bounce
          // const percentBlockedRate = item.metrics.blockedRate // taxa de bloqueio
          // const percentDeferredRate = item.metrics.deferredRate // taxa de deferral
          // const percentProxyOpenRate = item.metrics.proxyOpenRate // taxa de proxy open

          return (
            <TableRowCore key={item.id} sxStyle={{ height: "100px" }}>
              <TdCore
                values={
                  <ActionPopoverTable
                    optionsList={[
                      {
                        icon: <CurrencyExchangeIcon fontSize="small" />,
                        title: "Ver campanha",
                        onClick: () => {
                          navigate(`/campaign/${item.id}`);
                        },
                      },
                      {
                        icon: <EditIcon fontSize="small" />,
                        title: "Editar",
                        onClick: () => {
                          handleGetIdToEdit(String(item.id));
                        },
                      },
                      {
                        title: "Excluir",
                        onClick: () => {
                          setIdModalDelete(item.id);
                          setOpenModalDelete(true);
                        },
                        icon: <DeleteForeverIcon fontSize="small" />,
                      },
                    ]}
                  />
                }
                textAlign="center"
              />
              <TdCore
                values={
                  <Box>
                    <Typography variant="subtitle2" fontWeight="600">
                      {item.name}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {item.description}
                    </Typography>
                  </Box>
                }
                textAlign="left"
              />

              <TdCore
                values={
                  <Stack spacing={0.5}>
                    <Box display="flex" alignItems="center" gap={1}>
                      <PeopleIcon fontSize="small" color="action" />
                      <Typography variant="body2" color="text.secondary">
                        Grupo: {item.groupLeads.name}
                      </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" gap={1}>
                      <EmailIcon fontSize="small" color="action" />
                      <Typography variant="body2" color="text.secondary">
                        Template: {item.template.name}
                      </Typography>
                    </Box>
                  </Stack>
                }
                textAlign="left"
              />

              <TdCore
                values={item.subject}
                subTitle={`${item.senderName} <${item.senderEmail}>`}
                textAlign="left"
              />

              <TdCore
                values={FormatDateBR(item.dateFull)}
                subTitle={moment(item.dateFull).format("HH:mm")}
                textAlign="left"
              />

              <TdCore
                values={
                  <Chip
                    label={getTemplateStatusText(item.status)}
                    color={getTemplateStatusColor(item.status) as any}
                    size="small"
                    variant="filled"
                  />
                }
                textAlign="center"
              />

              <TdCore
                values={
                  <Grid container>
                    <CompCardMetricsTableCampaign
                      title="Enviados"
                      description={totalRequest}
                      background="#ecececa8"
                      color="#272727ff"
                      tooltipTitle="Total de emails tentando ser enviados"
                    />
                    <CompCardMetricsTableCampaign
                      title="Entregues"
                      description={`${totalDelivered} (${percentDeliverabilityRate}%)`}
                      background="#c587c548"
                      color="#e05ce0ff"
                      tooltipTitle="Total de emails entregues / Capacidade de entrega (capacidade de entrega é a porcentagem de emails entregues em relação aos emails tentando ser enviados)"
                    />
                    <CompCardMetricsTableCampaign
                      title="Abertos"
                      description={totalOpened}
                      background="#c587c548"
                      color="#e05ce0ff"
                      tooltipTitle="Total de emails abertos"
                    />
                    <CompCardMetricsTableCampaign
                      title="Clicados"
                      description={`${totalUniqueOpened} (${percentOpenRate}%)`}
                      background="#6d86f352"
                      color="#516ce0ff"
                      tooltipTitle="Total de emails abertos (1 vez) / Capacidade de abertura (capacidade de abertura é a porcentagem de emails abertos (1 vez) em relação aos emails realmente entregues)"
                    />
                    <CompCardMetricsTableCampaign
                      title="Span"
                      description={`${totalSpam} (${percentSpamReportRate}%)`}
                      background="#F3A96D52"
                      color="#516ce0ff"
                      tooltipTitle="Verdadeiro spam"
                    />

                    <CompCardMetricsTableCampaign
                      title="hard bounce"
                      description={`${totalHardBounce} (${percentHardBounceRate}%)`}
                      background="#F3A96D52"
                      color="#516ce0ff"
                      tooltipTitle="Email  que não existe"
                    />

                    {/* <CompCardMetricsTableCampaign
                      title="Total de Cliques"
                      description={`${totalClicks} (${percentClickRate}%)`}
                      background="#f8df8d54"
                      color="#f1a32cff"
                      tooltipTitle="Total de cliques / Capacidade de cliques (capacidade de cliques é a porcentagem de cliques em relação aos emails realmente enviados)"
                    /> */}
                  </Grid>
                }
                textAlign="center"
              />
            </TableRowCore>
          );
        }),
      )}
    </TableCore>
  );
};
