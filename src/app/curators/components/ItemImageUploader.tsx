"use client";

import React from "react";
import { Upload } from "lucide-react";
import { Paragraph3, Paragraph1 } from "@/common/ui/Text";
import { useUpload } from "@/lib/queries/useUpload";
import { useProductDraftStore } from "@/store/useProductDraftStore";

type Slot = {
  id: string;
  label: string;
};

const SLOTS: Slot[] = [
  { id: "main", label: "Main Photo" },
  { id: "photo1", label: "Photo 1" },
  { id: "photo2", label: "Photo 2" },
  { id: "photo3", label: "Photo 3" },
  { id: "video", label: "Video 1" },
];

export const ItemImageUploader: React.FC = () => {
  const upload = useUpload();
  const { data, setField } = useProductDraftStore();

  const handleUpload = async (file: File) => {
    const res = await upload.mutateAsync(file);

    setField("attachments", [...data.attachments, res.id]);
  };

  return (
    <div className="w-full rounded-xl border border-gray-200 p-4">
      <div className="mb-4">
        <Paragraph3 className="text-sm font-semibold text-black">
          Item Image
        </Paragraph3>
        <Paragraph1 className="text-xs text-gray-500">
          Upload atleast 5 high quality images and videos of your item
        </Paragraph1>
      </div>

      <div className="grid grid-cols-5 gap-4">
        {SLOTS.map((slot) => (
          <label
            key={slot.id}
            className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-gray-300 p-4 text-center transition hover:border-gray-400"
          >
            <Upload className="h-5 w-5 text-gray-500" />
            <span className="text-xs text-gray-600">{slot.label}</span>

            <input
              type="file"
              accept={slot.id === "video" ? "video/*" : "image/*"}
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) handleUpload(file);
              }}
            />
          </label>
        ))}
      </div>
    </div>
  );
};
