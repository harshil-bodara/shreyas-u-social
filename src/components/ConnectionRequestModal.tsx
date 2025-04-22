import React from "react";

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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white p-6 rounded-lg shadow-md w-[400px]">
        <h2 className="text-lg font-bold mb-2">Send Connection Request</h2>

        <textarea
          className="w-full border rounded p-2 mb-4"
          placeholder="Add a message (optional)"
          value={comment}
          onChange={(e) => onCommentChange(e.target.value)}
        />

        <div className="flex justify-end gap-2">
          <button
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded"
            onClick={onSend}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConnectionRequestModal;
