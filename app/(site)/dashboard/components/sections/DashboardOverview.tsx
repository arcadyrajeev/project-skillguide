type Props = {
  user: any;
  stats: any;
};

export default function DashboardOverview({ user, stats }: Props) {
  return (
    <div className="flex-1 space-y-6">
      <div>
        <p className="text-sm  font-bold body-text uppercase tracking-[0.3em] text-slate-600 mb-3">
          Overview
        </p>

        <h1 className="text-5xl font-bold tracking-tight">Dashboard</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <p className="text-sm text-gray-500">Enrolled Courses</p>

          <h2 className="mt-2 text-5xl font-bold">{stats.enrolledCourses}</h2>
        </div>

        {user.role === "TEACHER" && (
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">Created Courses</p>

            <h2 className="mt-2 text-5xl font-bold">{stats.createdCourses}</h2>
          </div>
        )}
      </div>
    </div>
  );
}
