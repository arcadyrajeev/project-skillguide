"use client";

import { useState } from "react";

export default function CreateCourseSection() {
  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");

  const [thumbnail, setThumbnail] = useState<File | null>(null);

  const [video, setVideo] = useState<File | null>(null);

  const [loading, setLoading] = useState(false);

  async function uploadToCloudinary(file: File, type: "image" | "video") {
    const formData = new FormData();

    formData.append("file", file);

    formData.append("upload_preset", "skillguide");

    formData.append("folder", "skillguide");

    const endpoint =
      type === "image"
        ? `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`
        : `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/video/upload`;

    const response = await fetch(endpoint, {
      method: "POST",
      body: formData,
    });

    return response.json();
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      setLoading(true);

      let thumbnailUrl = "";
      let videoUrl = "";

      // Upload thumbnail
      if (thumbnail) {
        const imageData = await uploadToCloudinary(thumbnail, "image");

        thumbnailUrl = imageData.secure_url;
      }

      // Upload video
      if (video) {
        const videoData = await uploadToCloudinary(video, "video");

        videoUrl = videoData.secure_url;
      }

      const token = localStorage.getItem("token");

      const response = await fetch("/api/courses/create", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",

          Authorization: `Bearer ${token}`,
        },

        body: JSON.stringify({
          title,
          description,
          thumbnail: thumbnailUrl,
          videoUrl,
        }),
      });

      const data = await response.json();

      if (!data.success) {
        alert(data.message);

        return;
      }

      alert("Course created successfully");

      setTitle("");
      setDescription("");
      setThumbnail(null);
      setVideo(null);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex-1">
      {/* Header */}
      <div className="mb-10">
        <p className="text-sm uppercase tracking-[0.3em] text-blue-600 mb-3">
          Teacher Workspace
        </p>

        <h1 className="text-5xl font-bold tracking-tight">Create Course</h1>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="rounded-[32px] bg-white border border-black/5 shadow-sm p-8 space-y-6"
      >
        {/* Title */}
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700">
            Course Title
          </label>

          <input
            type="text"
            placeholder="React Masterclass"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full h-14 rounded-2xl border border-black/10 px-5 outline-none focus:border-blue-500"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700">
            Description
          </label>

          <textarea
            placeholder="Write course description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full min-h-[180px] rounded-2xl border border-black/10 p-5 outline-none focus:border-blue-500 resize-none"
          />
        </div>

        {/* Thumbnail */}
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700">
            Thumbnail Image
          </label>

          <input
            type="file"
            accept="image/*"
            onChange={(e) => setThumbnail(e.target.files?.[0] || null)}
            className="w-full rounded-2xl border border-dashed border-black/20 bg-[#fafafa] p-5"
          />
        </div>

        {/* Video */}
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700">
            Course Video
          </label>

          <input
            type="file"
            accept="video/*"
            onChange={(e) => setVideo(e.target.files?.[0] || null)}
            className="w-full rounded-2xl border border-dashed border-black/20 bg-[#fafafa] p-5"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="h-14 rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 px-8 text-white font-semibold transition hover:opacity-90 disabled:opacity-50"
        >
          {loading ? "Creating Course..." : "Create Course"}
        </button>
      </form>
    </div>
  );
}
