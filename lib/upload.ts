export async function uploadFile(file: File, type: "image" | "video") {
  const formData = new FormData();

  formData.append("file", file);

  formData.append("upload_preset", "skillguide_uploads");

  const endpoint = type === "image" ? "image/upload" : "video/upload";

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/${endpoint}`,
    {
      method: "POST",
      body: formData,
    },
  );

  const data = await response.json();

  return data.secure_url;
}
