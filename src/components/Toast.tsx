'use client'
import { FC } from "react";

import CheckCircle from "@mui/icons-material/CheckCircle";
import Close from "@mui/icons-material/Close";
import Error from "@mui/icons-material/Error";
import Info from "@mui/icons-material/Info";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import type { SnackbarKey, ProviderContext } from "notistack";
import { useSnackbar } from "notistack";

export interface CloseSnackbarProps {
  id?: string | number;
}
let useSnackbarRef: ProviderContext;
export const SnackbarUtilsConfiguration: FC = () => {
  useSnackbarRef = useSnackbar();
  return null;
};
export const CloseButton: FC<CloseSnackbarProps> = ({ id }) => {
  const { closeSnackbar } = useSnackbar();
  return (
    <IconButton
      color="inherit"
      size="small"
      onClick={() => closeSnackbar(id)}
      className="!text-white !p-0"
    >
      <Close className="!w-5 !h-5" />
    </IconButton>
  );
};
const Toast = {
  success(message: string) {
    this.toast(message, "success");
  },
  warning(message: string) {
    this.toast(message, "warning");
  },
  info(message: string) {
    this.toast(message, "info");
  },
  error(message: string) {
    this.toast(message, "error");
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  toast(message: string, variant: any = "default") {
    useSnackbarRef.enqueueSnackbar(
      <Box display="flex" alignItems="center">
        {variant === "success" ? (
          <CheckCircle className="!text-green-500 !h-5 !w-5 !mr-1" />
        ) : variant === "error" ? (
          <Error className="!text-red-500 !h-5 !w-5 !mr-1" />
        ) : variant === "info" ? (
          <Info className="!text-white-500 !h-5 !w-5 !mr-1" />
        ) : null}
        <Typography className="!text-base !font-medium">{message}</Typography>
      </Box>,
      {
        persist: false,
        style: {
          backgroundColor: "#181816",
          color: "#fff",
          borderRadius: "12px",
          padding: "0 12px",
          minWidth: "302px",
          minHeight: "48px",
          display: "flex",
          alignItems: "center",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
          justifyContent: "space-between",
        },
        action: (key: SnackbarKey) => (
          <IconButton
            onClick={() => useSnackbarRef.closeSnackbar(key)}
            className="!text-white !p-0"
          >
            <Close className="!w-5 !h-5 !me-2" />
          </IconButton>
        ),
      },
    );
  },
};
export default Toast;
