"use client";

import { CheckCircle2 } from "lucide-react";
import { UploadCloud } from "lucide-react";

import { useState } from "react";

export default function CreateCourseSection() {
  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");

  const [thumbnail, setThumbnail] = useState<File | null>(null);

  const [video, setVideo] = useState<File | null>(null);

  const [loading, setLoading] = useState(false);

  const [progress, setProgress] = useState(0);

  const [uploadStage, setUploadStage] = useState("");

  const [createdCourse, setCreatedCourse] = useState<any>(null);

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

      setProgress(10);

      let thumbnailUrl = "";
      let videoUrl = "";

      // Upload Thumbnail
      if (thumbnail) {
        setUploadStage("Uploading Thumbnail...");

        const imageData = await uploadToCloudinary(thumbnail, "image");

        thumbnailUrl = imageData.secure_url;

        setProgress(40);
      }

      // Upload Video
      if (video) {
        setUploadStage("Uploading Course Video...");

        const videoData = await uploadToCloudinary(video, "video");

        videoUrl = videoData.secure_url;

        setProgress(75);
      }

      setUploadStage("Publishing Course...");

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

      setProgress(100);

      setUploadStage("Course Uploaded Successfully");

      setCreatedCourse(data.course);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  function resetForm() {
    setTitle("");
    setDescription("");
    setThumbnail(null);
    setVideo(null);

    setProgress(0);

    setUploadStage("");

    setCreatedCourse(null);
  }

  // SUCCESS SCREEN
  if (createdCourse) {
    return (
      <div className="flex-1">
        <div className="rounded-[32px] border border-black/5 bg-white p-10 shadow-sm">
          <div className="flex flex-col items-center text-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-green-100">
              <CheckCircle2 size={50} className="text-green-600" />
            </div>

            <h1 className="mt-8 text-5xl font-bold tracking-tight">
              Course Published
            </h1>

            <p className="mt-4 max-w-xl text-lg text-gray-500">
              Your course is now live and available for students.
            </p>

            {/* Course Preview */}
            <div className="mt-10 w-full max-w-2xl overflow-hidden rounded-[32px] border border-black/5 bg-[#fafafa]">
              <img
                src={createdCourse.thumbnail}
                alt={createdCourse.title}
                className="h-[300px] w-full object-cover"
              />

              <div className="p-8 text-left">
                <h2 className="text-3xl font-bold">{createdCourse.title}</h2>

                <p className="mt-4 leading-relaxed text-gray-500">
                  {createdCourse.description}
                </p>
              </div>
            </div>

            <button
              onClick={resetForm}
              className="mt-10 rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 px-8 py-4 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Upload Another Course
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1">
      {/* Header */}
      <div className="mb-10">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-blue-600">
          Teacher Workspace
        </p>

        <h1 className="text-5xl font-bold tracking-tight">Create Course</h1>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="space-y-6 rounded-[32px] border border-black/5 bg-white p-8 shadow-sm"
      >
        {/* Title */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Course Title
          </label>

          <input
            type="text"
            placeholder="Watercolor Illustration Masterclass"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="h-14 w-full rounded-2xl border border-black/10 px-5 outline-none focus:border-blue-500"
          />
        </div>

        {/* Description */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Description
          </label>

          <textarea
            placeholder="Write course description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="min-h-[180px] w-full resize-none rounded-2xl border border-black/10 p-5 outline-none focus:border-blue-500"
          />
        </div>

        {/* Upload Grid */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Thumbnail */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Thumbnail Image
            </label>

            <label className="flex cursor-pointer flex-col items-center justify-center rounded-3xl border border-dashed border-black/10 bg-[#fafafa] p-10 transition hover:bg-[#f5f5f5]">
              <UploadCloud size={40} className="text-gray-400" />

              <p className="mt-4 font-medium">Upload Thumbnail</p>

              <p className="mt-1 text-sm text-gray-500">JPG, PNG</p>

              {thumbnail && (
                <p className="mt-4 text-sm text-blue-600">{thumbnail.name}</p>
              )}

              <input
                type="file"
                accept="image/*"
                hidden
                onChange={(e) => setThumbnail(e.target.files?.[0] || null)}
              />
            </label>
          </div>

          {/* Video */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Course Video
            </label>

            <label className="flex cursor-pointer flex-col items-center justify-center rounded-3xl border border-dashed border-black/10 bg-[#fafafa] p-10 transition hover:bg-[#f5f5f5]">
              <UploadCloud size={40} className="text-gray-400" />

              <p className="mt-4 font-medium">Upload Video</p>

              <p className="mt-1 text-sm text-gray-500">MP4, MOV</p>

              {video && (
                <p className="mt-4 text-sm text-blue-600">{video.name}</p>
              )}

              <input
                type="file"
                accept="video/*"
                hidden
                onChange={(e) => setVideo(e.target.files?.[0] || null)}
              />
            </label>
          </div>
        </div>

        {/* Upload Progress */}
        {(loading || progress > 0) && (
          <div className="rounded-2xl border border-black/5 bg-[#fafafa] p-5">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-sm font-medium">{uploadStage}</p>

              <p className="text-sm text-gray-500">{progress}%</p>
            </div>

            <div className="h-3 overflow-hidden rounded-full bg-gray-200">
              <div
                className="h-full rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 transition-all duration-500"
                style={{
                  width: `${progress}%`,
                }}
              />
            </div>
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="h-14 rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 px-8 text-sm font-semibold text-white transition hover:opacity-90 disabled:opacity-50"
        >
          {loading ? "Publishing..." : "Publish Course"}
        </button>
      </form>
    </div>
  );
}
