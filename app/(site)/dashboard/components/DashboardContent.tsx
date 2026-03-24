"use client";

export default function DashboardContent() {
  return (
    <div className="flex-1 flex flex-col gap-6">
      {/* Top Chart */}
      <div className="bg-white rounded-2xl p-6 border border-gray-200">
        <h3 className="text-sm text-gray-600 mb-4">This year's trend</h3>

        <div className="h-64 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400">
          Revenue Chart
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Enrollments */}
        <div className="bg-white rounded-2xl p-6 border border-gray-200">
          <h3 className="text-sm text-gray-600 mb-4">Enrollments</h3>

          <div className="h-56 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400">
            Enrollment Chart
          </div>
        </div>

        {/* Top Courses */}
        <div className="bg-white rounded-2xl p-6 border border-gray-200">
          <h3 className="text-sm text-gray-600 mb-4">Your top Courses</h3>

          <div className="flex flex-col gap-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-gray-50 p-3 rounded-xl"
              >
                <div className="w-16 h-16 bg-gray-200 rounded-lg" />

                <div className="flex-1">
                  <p className="text-sm font-medium">Course Title</p>
                  <p className="text-xs text-gray-500">
                    1234 students enrolled
                  </p>
                </div>

                <div className="text-sm font-semibold">$30</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
