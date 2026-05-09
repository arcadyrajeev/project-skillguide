"use client";

import { useState } from "react";
import { uploadFile } from "@/lib/upload";

export default function TestUploadPage() {
  const [imageUrl, setImageUrl] = useState("");

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];

    if (!file) return;

    const url = await uploadFile(file, "image");

    setImageUrl(url);
  }

  return (
    <div className="p-10 mt-20">
      <input type="file" className="bg-white" onChange={handleUpload} />

      {imageUrl && <img src={imageUrl} alt="uploaded" className="w-64 mt-4" />}
    </div>
  );
}
