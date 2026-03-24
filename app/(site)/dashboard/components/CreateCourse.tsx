"use client";

export default function CourseCreator() {
  return (
    <div className="flex-1 bg-[#f3f3f3] p-4 md:p-6">
      <div className="max-w-5xl mx-auto flex flex-col gap-6">
        {/* Breadcrumb */}
        <p className="text-sm text-gray-500">
          Your courses <span className="mx-2">›</span> Create new course
        </p>

        {/* Main Card */}
        <div className="bg-white rounded-2xl p-4 md:p-6 border border-gray-200">
          <h2 className="text-lg font-semibold mb-6">Create your course</h2>

          {/* Top Section */}
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Thumbnail */}
            <div className="w-full lg:w-[220px] h-[160px] border rounded-xl flex items-center justify-center text-gray-400">
              Upload your Thumbnail
            </div>

            {/* Form Fields */}
            <div className="flex-1 flex flex-col gap-4">
              <div>
                <label className="text-sm text-gray-600">
                  Title (required)
                </label>
                <input className="w-full mt-1 border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500" />
              </div>

              <div>
                <label className="text-sm text-gray-600">Description</label>
                <textarea className="w-full mt-1 border rounded-lg px-3 py-2 h-24 outline-none focus:ring-2 focus:ring-blue-500" />
              </div>

              <div>
                <label className="text-sm text-gray-600">
                  Category (required)
                </label>
                <input className="w-full mt-1 border rounded-lg px-3 py-2" />
              </div>

              <div>
                <label className="text-sm text-gray-600">
                  Tags (limit of 10)
                </label>
                <input className="w-full mt-1 border rounded-lg px-3 py-2" />
              </div>
            </div>
          </div>
        </div>

        {/* Course Content */}
        <div className="bg-white rounded-2xl p-4 md:p-6 border border-gray-200">
          <h3 className="text-sm text-gray-600 mb-4">
            Course Content (required)
          </h3>

          <div className="h-48 md:h-64 border rounded-xl flex items-center justify-center text-gray-400">
            drop a video here
          </div>
        </div>

        {/* Extra Materials */}
        <div className="bg-white rounded-2xl p-4 md:p-6 border border-gray-200">
          <h3 className="text-sm text-gray-600 mb-4">
            Extra Materials (optional)
          </h3>

          <div className="flex flex-wrap gap-4">
            {["Link", "Image", "Document"].map((item) => (
              <div
                key={item}
                className="flex flex-col items-center justify-center border rounded-xl px-6 py-4 text-sm text-gray-600 cursor-pointer hover:bg-gray-50"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Notes */}
        <div className="bg-white rounded-2xl p-4 md:p-6 border border-gray-200">
          <h3 className="text-sm text-gray-600 mb-4">
            Course Notes (optional)
          </h3>

          <textarea className="w-full h-40 md:h-56 border rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-3">
          <button className="px-6 py-2 rounded-full bg-gray-300 text-gray-700">
            Save as Draft
          </button>

          <button className="px-6 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-500">
            Publish
          </button>
        </div>
      </div>
    </div>
  );
}
