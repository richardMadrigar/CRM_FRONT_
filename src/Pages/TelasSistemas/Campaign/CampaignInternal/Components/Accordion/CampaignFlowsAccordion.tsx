import {
  Accordion, AccordionDetails, alpha, Box, Grid, Typography,
} from "@mui/material";
import {
  AutoSizer, CellMeasurer, CellMeasurerCache, List,
} from "react-virtualized";
import type { IDataGetCampaignDetails } from "src/Contexts/Campaign/CampaignContextTypes";
import { ListHistoryCampaignLeads } from "./TableHistoryLeads";
import "react-virtualized/styles.css";
import { useRef, } from "react";

export const CampaignFlowsAccordion = ({ dataGetCampaignDetails, }: {
  dataGetCampaignDetails: IDataGetCampaignDetails;
}) => {
  const flows = dataGetCampaignDetails?.CampaignFlowsSend || [];

  // Cache para medir altura dinâmica de cada linha
  const cache = useRef(
    new CellMeasurerCache({
      defaultHeight: 100,
      fixedWidth: true,
    }),
  );

  const rowRenderer = ({ index, key, parent, style }: any) => {
    const item = flows[index];

    return (
      <CellMeasurer
        key={key}
        cache={cache.current}
        parent={parent}
        columnIndex={0}
        rowIndex={index}
      >
        <div style={style}>
          <Accordion
            key={item.id}
            expanded={true}
            sx={{
              mb: "16px",
              borderLeft: (theme) =>
                `6px solid ${Math.floor(index % 2) === 0
                  ? alpha(theme.palette.primary.main as string, 0.7)
                  : alpha(theme.palette.primary.main as string, 0.4)
                }`,
            }}
          >

            <AccordionDetails>
              <Grid item xs={12}>
                <ListHistoryCampaignLeads data={dataGetCampaignDetails} />
              </Grid>
            </AccordionDetails>
          </Accordion>
        </div>
      </CellMeasurer>
    );
  };

  return (
    <>
      <Typography sx={{ fontWeight: 600, mb: 2, fontSize: "1.2rem" }}>
        🚀 Destinatários ({flows.length})
      </Typography>

      <Box sx={{ height: "70vh" }}>
        <AutoSizer>
          {({ height, width }) => (
            <List
              width={width}
              height={height}
              rowCount={flows.length}
              deferredMeasurementCache={cache.current}
              rowHeight={cache.current.rowHeight}
              rowRenderer={rowRenderer}
              overscanRowCount={5}
            />
          )}
        </AutoSizer>
      </Box>
    </>
  );
};
