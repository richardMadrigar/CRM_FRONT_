import React, { useEffect, useState } from "react";
import {
  List as VirtualizedList,
  AutoSizer,
  InfiniteLoader,
  IndexRange,
  Index,
} from "react-virtualized";
import {
  Button,
  Card,
  CardHeader,
  Checkbox,
  Divider,
  Grid,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
  useMediaQuery,
  useTheme,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Paper,
  Collapse,
  IconButton,
  Chip,
} from "@mui/material";

import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import FilterListIcon from "@mui/icons-material/FilterList";
import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";

import { useContextCampaign } from "src/Contexts/Campaign/ContextCampaign";
import { IGetLeadsAll } from "src/Contexts/Campaign/CampaignContextTypes";
import { IStatusLeads } from "src/shared/Hooks/Https/HttpGetLeadsAll";
import { api } from "src/shared/setup/API/api";
import { useLayoutMainContext } from "src/Contexts/MainLayoutContext";

// Interfaces
interface ILeadFilters {
  status: IStatusLeads | "";
  interestLevel: "LOW" | "MEDIUM" | "HIGH" | "";
  email: string;
  sourceCollection: string;
  dateCaptureStart: string;
  dateCaptureEnd: string;
  foundedAtStart: string;
  foundedAtEnd: string;
}

// Helpers
function not(a: readonly IGetLeadsAll[], b: readonly IGetLeadsAll[]) {
  return a.filter((value) => !b.some((item) => item.id === value.id));
}

function intersection(a: readonly IGetLeadsAll[], b: readonly IGetLeadsAll[]) {
  return a.filter((value) => b.some((item) => item.id === value.id));
}

function union(a: readonly IGetLeadsAll[], b: readonly IGetLeadsAll[]) {
  return [...a, ...not(b, a)];
}

export const FormLeads = () => {
  const { handleGetAlert } = useLayoutMainContext();

  const [listAllLeads, setListAllLeads] = useState<IGetLeadsAll[]>([]);
  const { valuesInputsGroupLeads, setValuesInputsGroupLeads } =
    useContextCampaign();

  const [left, setLeft] = useState<IGetLeadsAll[]>([]);
  const [checked, setChecked] = useState<IGetLeadsAll[]>([]);
  const [right, setRight] = useState<IGetLeadsAll[]>([]);

  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);

  // Estados para filtros
  const [filters, setFilters] = useState<ILeadFilters>({
    status: "",
    interestLevel: "",
    email: "",
    sourceCollection: "",
    dateCaptureStart: "",
    dateCaptureEnd: "",
    foundedAtStart: "",
    foundedAtEnd: "",
  });
  const [showFilters, setShowFilters] = useState(false);
  // const [filteredLeads, setFilteredLeads] = useState<IGetLeadsAll[]>([]);

  const isMobile = useMediaQuery(useTheme().breakpoints.down("md"));

  // Buscar leads
  const fetchLeads = async (page: number, resetList = false) => {
    setLoading(true);
    try {
      // Construir query parameters
      const queryParams = new URLSearchParams({
        page: page.toString(),
        pageSize: "100",
      });

      // Adicionar filtros se existirem
      if (filters.status) queryParams.append("status", filters.status);
      if (filters.interestLevel) queryParams.append("interestLevel", filters.interestLevel);
      if (filters.email) queryParams.append("email", filters.email);
      if (filters.sourceCollection) queryParams.append("sourceCollection", filters.sourceCollection);
      if (filters.dateCaptureStart) queryParams.append("dateCaptureStart", filters.dateCaptureStart);
      if (filters.dateCaptureEnd) queryParams.append("dateCaptureEnd", filters.dateCaptureEnd);
      if (filters.foundedAtStart) queryParams.append("foundedAtStart", filters.foundedAtStart);
      if (filters.foundedAtEnd) queryParams.append("foundedAtEnd", filters.foundedAtEnd);

      const { data } = await api.get(`/leads?${queryParams.toString()}`);

      if (data.data.length === 0) {
        setHasMore(false);
      } else {
        if (resetList) {
          setListAllLeads(data.data);
        } else {
          setListAllLeads((prev) => [...prev, ...data.data]);
        }
        setTotal(data.meta.total);
      }
    } catch (error: any) {
      handleGetAlert({ message: error.response?.data?.message || "Erro" });
    } finally {
      setLoading(false);
    }
  };

  // Aplicar filtros
  const applyFilters = async () => {
    setPage(1);
    setHasMore(true);
    setListAllLeads([]);
    await fetchLeads(1, true);
  };

  // Limpar filtros
  const clearFilters = () => {
    setFilters({
      status: "",
      interestLevel: "",
      email: "",
      sourceCollection: "",
      dateCaptureStart: "",
      dateCaptureEnd: "",
      foundedAtStart: "",
      foundedAtEnd: "",
    });
    setPage(1);
    setHasMore(true);
    setListAllLeads([]);
    fetchLeads(1, true);
  };

  // Verificar se há filtros ativos
  const hasActiveFilters = Object.values(filters).some(value => value !== "");

  useEffect(() => {
    if (hasMore) fetchLeads(page, false);
  }, [page]);

  useEffect(() => {
    setLeft(
      listAllLeads
        .filter((lead) => !right.some((r) => r.id === lead.id))
      // .sort((a, b) => a.name.localeCompare(b.name)),
    );
    // fetchLeads(page + 1);
  }, [listAllLeads, right]);

  useEffect(() => {
    setRight(
      valuesInputsGroupLeads?.leads?.sort((a, b) => a.name.localeCompare(b.name)),
    );
  }, [listAllLeads]);

  useEffect(() => {
    setValuesInputsGroupLeads((prevValue) => ({
      leads: right,
      description: prevValue.description,
      name: prevValue.name,
    }));
    setRight((prevValue) =>
      // prevValue.sort((a, b) => a.name.localeCompare(b.name)),
      prevValue,
    );
  }, [right]);

  // seleção
  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);

  const handleToggle = (value: IGetLeadsAll) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  // Contar a quantidade de leads selecionados
  const numberOfChecked = (items: readonly IGetLeadsAll[]) =>
    intersection(checked, items).length;

  // Selecionar/desmarcar todos os itens
  const handleToggleAll = (items: readonly IGetLeadsAll[]) => () => {
    if (numberOfChecked(items) === items.length) {
      setChecked(not(checked, items));
    } else {
      setChecked(union(checked, items));
    }
  };

  // rowRenderer
  const rowRenderer =
    (
      items: readonly IGetLeadsAll[],
      checked: IGetLeadsAll[],
      handleToggle: any,
    ) =>
      ({ key, index, style }: any) => {
        const value = items[index];
        const labelId = `transfer-list-all-item-${value.id}-label`;

        return (
          <ListItemButton
            key={key}
            role="listitem"
            onClick={handleToggle(value)}
            style={style}
          >
            <ListItemIcon>
              <Checkbox
                checked={checked.includes(value)}
                tabIndex={-1}
                disableRipple
                inputProps={{ "aria-labelledby": labelId }}
              />
            </ListItemIcon>
            <ListItemText
              id={labelId}
              primary={value.name}
              secondary={value.email}
            />
          </ListItemButton>
        );
      };

  // InfiniteLoader config
  const isRowLoaded = ({ index }: Index) => !hasMore || index < left.length;

  const loadMoreRows = async ({ startIndex, stopIndex }: IndexRange) => {
    if (!loading && hasMore) {
      setPage((prev) => prev + 1);
    }
  };

  // Componente de filtros
  const renderFilters = () => (
    <Paper sx={{ p: 2, mb: 2 }}>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <FilterListIcon />
          <span>Filtros de Busca</span>
          {hasActiveFilters && (
            <Chip
              label={`${Object.values(filters).filter(v => v !== "").length} filtro(s) ativo(s)`}
              color="primary"
              size="small"
            />
          )}
        </Box>
        <Box>
          <Button
            variant="outlined"
            size="small"
            onClick={() => setShowFilters(!showFilters)}
            startIcon={<FilterListIcon />}
            sx={{ mr: 1 }}
          >
            {showFilters ? "Ocultar" : "Mostrar"} Filtros
          </Button>
          {hasActiveFilters && (
            <Button
              variant="outlined"
              size="small"
              onClick={clearFilters}
              startIcon={<ClearIcon />}
              color="error"
            >
              Limpar
            </Button>
          )}
        </Box>
      </Box>

      <Collapse in={showFilters}>
        <Grid container spacing={2}>
          {/* Status */}
          <Grid item xs={12} sm={6} lg={3}>
            <FormControl fullWidth size="small">
              <InputLabel>Status</InputLabel>
              <Select
                value={filters.status}
                label="Status"
                onChange={(e) => setFilters(prev => ({ ...prev, status: e.target.value as IStatusLeads | "" }))}
              >
                <MenuItem value="">Todos</MenuItem>
                <MenuItem value="NEW">Novo</MenuItem>
                <MenuItem value="IN_CONTACT">Em Contato</MenuItem>
                <MenuItem value="NEGOTIATION">Negociação</MenuItem>
                <MenuItem value="PROPOSAL_SENT">Proposta Enviada</MenuItem>
                <MenuItem value="PROPOSAL_ACCEPTED">Proposta Aceita</MenuItem>
                <MenuItem value="PROPOSAL_REJECTED">Proposta Rejeitada</MenuItem>
                <MenuItem value="FUTURE_NEGOTIATION">Negociação Futura</MenuItem>
                <MenuItem value="DISQUALIFIED_CLOSED">Desqualificado/Fechado</MenuItem>
                <MenuItem value="LOST">Perdido</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          {/* Nível de Interesse */}
          <Grid item xs={12} sm={6} lg={3}>
            <FormControl fullWidth size="small">
              <InputLabel>Nível de Interesse</InputLabel>
              <Select
                value={filters.interestLevel}
                label="Nível de Interesse"
                onChange={(e) => setFilters(prev => ({ ...prev, interestLevel: e.target.value as "LOW" | "MEDIUM" | "HIGH" | "" }))}
              >
                <MenuItem value="">Todos</MenuItem>
                <MenuItem value="LOW">Baixo</MenuItem>
                <MenuItem value="MEDIUM">Médio</MenuItem>
                <MenuItem value="HIGH">Alto</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          {/* Email */}
          <Grid item xs={12} sm={6} lg={3}>
            <TextField
              fullWidth
              size="small"
              label="Email"
              value={filters.email}
              onChange={(e) => setFilters(prev => ({ ...prev, email: e.target.value }))}
              placeholder="Digite o email..."
            />
          </Grid>

          {/* Fonte do Lead */}
          <Grid item xs={12} sm={6} lg={3}>
            <TextField
              fullWidth
              size="small"
              label="Fonte do Lead"
              value={filters.sourceCollection}
              onChange={(e) => setFilters(prev => ({ ...prev, sourceCollection: e.target.value }))}
              placeholder="Digite a fonte..."
            />
          </Grid>

          {/* Data de Captura - Início */}
          <Grid item xs={12} sm={6} lg={3}>
            <TextField
              fullWidth
              size="small"
              label="Data Captura - Início"
              type="date"
              value={filters.dateCaptureStart}
              onChange={(e) => setFilters(prev => ({ ...prev, dateCaptureStart: e.target.value }))}
              InputLabelProps={{ shrink: true }}
            />
          </Grid>

          {/* Data de Captura - Fim */}
          <Grid item xs={12} sm={6} lg={3}>
            <TextField
              fullWidth
              size="small"
              label="Data Captura - Fim"
              type="date"
              value={filters.dateCaptureEnd}
              onChange={(e) => setFilters(prev => ({ ...prev, dateCaptureEnd: e.target.value }))}
              InputLabelProps={{ shrink: true }}
            />
          </Grid>

          {/* Data de Fundação - Início */}
          <Grid item xs={12} sm={6} lg={3}>
            <TextField
              fullWidth
              size="small"
              label="Data Fundação - Início"
              type="date"
              value={filters.foundedAtStart}
              onChange={(e) => setFilters(prev => ({ ...prev, foundedAtStart: e.target.value }))}
              InputLabelProps={{ shrink: true }}
            />
          </Grid>

          {/* Data de Fundação - Fim */}
          <Grid item xs={12} sm={6} lg={3}>
            <TextField
              fullWidth
              size="small"
              label="Data Fundação - Fim"
              type="date"
              value={filters.foundedAtEnd}
              onChange={(e) => setFilters(prev => ({ ...prev, foundedAtEnd: e.target.value }))}
              InputLabelProps={{ shrink: true }}
            />
          </Grid>

          {/* Botões de Ação */}
          <Grid item xs={12}>
            <Box sx={{ display: "flex", gap: 1, justifyContent: "flex-end" }}>
              <Button
                variant="outlined"
                onClick={clearFilters}
                startIcon={<ClearIcon />}
                disabled={!hasActiveFilters || loading}
              >
                Limpar Filtros
              </Button>
              <Button
                variant="contained"
                onClick={applyFilters}
                startIcon={<SearchIcon />}
                disabled={loading}
              >
                {loading ? "Aplicando..." : "Aplicar Filtros"}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Collapse>
    </Paper>
  );

  const customList = (
    title: React.ReactNode,
    items: readonly IGetLeadsAll[],
  ) => (
    <Card sx={{ margin: 0, width: "100%" }}>
      <CardHeader
        sx={{ px: 2, py: 1 }}
        avatar={
          <Checkbox
            onClick={handleToggleAll(items)}
            checked={
              numberOfChecked(items) === items.length && items.length !== 0
            }
            indeterminate={
              numberOfChecked(items) !== items.length &&
              numberOfChecked(items) !== 0
            }
            disabled={items.length === 0}
            inputProps={{ "aria-label": "all items selected" }}
          />
        }
        title={title}
        subheader={`${numberOfChecked(items)}/${items.length} carregados / total ${total}`}
      />
      <Divider />
      <AutoSizer disableHeight>
        {({ width }) => (
          <InfiniteLoader
            isRowLoaded={isRowLoaded}
            loadMoreRows={loadMoreRows}
            rowCount={hasMore ? items.length + 1 : items.length}
            threshold={5}
          >
            {({ onRowsRendered, registerChild }) => (
              <VirtualizedList
                ref={registerChild}
                onRowsRendered={onRowsRendered}
                width={width}
                height={350}
                rowCount={items.length}
                rowHeight={70}
                rowRenderer={rowRenderer(items, checked, handleToggle)}
              />
            )}
          </InfiniteLoader>
        )}
      </AutoSizer>
    </Card>
  );

  return (
    <Box>
      {renderFilters()}
      <Grid container spacing={2} sx={{ alignItems: "center" }}>
        <Grid xs={12} md={5.3} item>
          {customList("Leads", left)}
        </Grid>

        <Grid xs={12} md={1.4} item>
          <Grid
            container
            direction={isMobile ? "row" : "column"}
            sx={{ alignItems: "center", justifyContent: "center", gap: 1 }}
          >
            <Tooltip title="Colocar na lista da direita">
              <Button
                sx={{ my: 0.5 }}
                variant="contained"
                size="medium"
                onClick={() => {
                  fetchLeads(page + 1);
                  setRight(
                    right.concat(
                      leftChecked.sort((a, b) => a.name.localeCompare(b.name)),
                    ),
                  );
                  setLeft(
                    not(
                      left.sort((a, b) => a.name.localeCompare(b.name)),
                      leftChecked.sort((a, b) => a.name.localeCompare(b.name)),
                    ),
                  );
                  setChecked(not(checked, leftChecked));
                }}
                disabled={leftChecked.length === 0}
                aria-label="move selected right"
              >
                <KeyboardDoubleArrowRightIcon
                  sx={{ transform: isMobile ? "rotate(90deg)" : "none" }}
                />
              </Button>
            </Tooltip>
            <Tooltip title="Remover da lista">
              <Button
                sx={{ my: 0.5 }}
                variant="contained"
                size="medium"
                onClick={() => {
                  setLeft(
                    left.concat(
                      rightChecked.sort((a, b) => a.name.localeCompare(b.name)),
                    ),
                  );
                  setRight(
                    not(
                      right.sort((a, b) => a.name.localeCompare(b.name)),
                      rightChecked.sort((a, b) => a.name.localeCompare(b.name)),
                    ),
                  );
                  setChecked(not(checked, rightChecked));
                }}
                disabled={rightChecked.length === 0}
                aria-label="move selected left"
              >
                <KeyboardDoubleArrowLeftIcon
                  sx={{ transform: isMobile ? "rotate(90deg)" : "none" }}
                />
              </Button>
            </Tooltip>
          </Grid>
        </Grid>
        <Grid xs={12} md={5.3} item>
          {customList("Leads (Pertence ao Grupo)", right)}
        </Grid>
      </Grid>
    </Box>
  );
};
