"use client";

import React from "react";
import Button from "./Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Box, TextField } from "@mui/material";

interface ConnectionRequestModalProps {
  open: boolean;
  comment: string;
  onCommentChange: (value: string) => void;
  onCancel: () => void;
  onSend: () => void;
}

const ConnectionRequestModal = ({
  open,
  comment,
  onCommentChange,
  onCancel,
  onSend,
}: ConnectionRequestModalProps) => {
  if (!open) return null;

  return (
    <Dialog
      open={open}
      onClose={onCancel}
      aria-labelledby="connection-dialog-title"
      maxWidth="xs"
      fullWidth
    >
      <DialogTitle className="text-lg !font-bold !pb-2">
        Send Connection Request
      </DialogTitle>
      <DialogContent>
        <TextField
          className="w-full p-2 !mb-6"
          placeholder="Add a message (optional)"
          value={comment}
          onChange={(e) => onCommentChange(e.target.value)}
        />
        <Box className="flex items-center gap-2 justify-end">
          <Button className="!h-9 !w-[100px] !font-bold" onClick={onCancel}>
            Cancel
          </Button>
          <Button
            variant="contained"
            className="!h-9 !w-[100px] !font-bold"
            onClick={onSend}
          >
            Send
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default ConnectionRequestModal;
