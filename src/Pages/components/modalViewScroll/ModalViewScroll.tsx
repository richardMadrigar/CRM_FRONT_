import { ReactNode, useEffect, useRef, SetStateAction, Dispatch } from "react";
import {
  CircularProgress,
  Typography,
  IconButton,
  Divider,
  SxProps,
  Modal,
  Box,
} from "@mui/material";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { useAppThemeContext } from "src/Contexts/ThemeContextConfig";

import { FormCore } from "../AppFormComponents/FormCore";
import { ButtonCore } from "../ButtonCore/ButtonCore";
import { CloseIcon, SendIcon } from "../Icons/Icons";
import { useStyles } from "../ModalFilterCore/Index";

type IModal = {
  setOpen: Dispatch<SetStateAction<boolean>>;
  open: boolean;
  children: ReactNode;
  title?: string | undefined;
  onChange?: () => void;
  loadingSubmit?: boolean | undefined;
  loading?: boolean | undefined;
  sxStyle?: SxProps | undefined;
  titleSubmit?: string | undefined;
  subTitle?: string | undefined;
};

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  borderRadius: "8px",
  boxShadow: 24,
  p: 0,
  maxWidth: "90%",
  maxHeight: "90vh",
};

export const ModalCore = ({
  open,
  title,
  sxStyle,
  setOpen,
  loading,
  onChange,
  children,
  subTitle,
  loadingSubmit,
  titleSubmit = "Enviar",
}: IModal) => {
  const descriptionElementRef = useRef<HTMLElement>(null);

  const { themeName } = useAppThemeContext();

  const classes = useStyles();

  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;

      if (descriptionElement !== null) descriptionElement.focus();
    }
  }, [open]);

  return (
    <Modal
      aria-describedby="modal-modal-description"
      aria-labelledby="modal-modal-title"
      open={open}
      sx={{ border: "none" }}
    >
      <Box
        sx={{
          background: themeName === "dark" ? "#353741" : "#fff",
          width: {
            xs: `calc(100vw - 40px)`,
            md: `calc(100vw - 200px)`,
          },
          ...style,
          ...sxStyle,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: ".8rem 1rem",
          }}
        >
          <Box>
            <Typography
              fontWeight="bold"
              sx={{
                fontSize: { xs: "14px", sm: "18px" },
                color: (theme) => theme.palette.text.primary,
              }}
            >
              {title}
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "12px", sm: "15px" },
                color: (theme) => theme.palette.text.secondary,
              }}
            >
              {subTitle}
            </Typography>
          </Box>

          <IconButton aria-label="delete" onClick={() => setOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>

        <DialogContent
          dividers
          sx={{
            padding: "12px",
            overflowY: "auto",
            maxHeight: "80vh",
          }}
        >
          <FormCore sxStyle={{ margin: 0 }}>
            <Box
              className={classes.customScrollbar}
              sx={{ overflow: "auto", padding: "8px" }}
            >
              {!loading ? (
                children
              ) : (
                <Box textAlign="center">
                  <CircularProgress />
                </Box>
              )}
            </Box>

            <DialogActions>
              {onChange && (
                <>
                  <Divider sx={{ marginTop: 2, opacity: 1 }} />

                  <ButtonCore
                    title="Fechar"
                    onClick={() => setOpen(false)}
                    variant="outlined"
                  />

                  <ButtonCore
                    disabled={!!loadingSubmit}
                    endIcon={
                      !loadingSubmit ? (
                        <SendIcon sx={{ fontSize: 4 }} />
                      ) : (
                        <CircularProgress
                          size={15}
                          sx={{ mr: 1, color: "black" }}
                        />
                      )
                    }
                    title={titleSubmit}
                    type="submit"
                    onClick={onChange}
                  />
                </>
              )}
            </DialogActions>
          </FormCore>
        </DialogContent>
      </Box>
    </Modal>
  );
};
