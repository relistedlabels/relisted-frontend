"use client";

import { useUpload } from "@/lib/queries/useUpload";

type FileUploaderProps = {
  onUploaded: (data: { id: string; url?: string }) => void;
};

export function FileUploader({ onUploaded }: FileUploaderProps) {
  const upload = useUpload();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    upload.mutate(file, {
      onSuccess: (data) => {
        onUploaded(data);
      },
    });
  };

  return (
    <div>
      <input type="file" onChange={handleChange} />

      {upload.isPending && <p>Uploading…</p>}
      {upload.error && (
        <p className="text-red-600">{(upload.error as Error).message}</p>
      )}
    </div>
  );
}
