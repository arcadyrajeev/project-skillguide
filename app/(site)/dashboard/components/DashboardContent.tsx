import { DashboardSection } from "../page";

import DashboardOverview from "./sections/DashboardOverview";
import MyLearningSection from "./sections/MyLearningSection";
import ExploreSection from "./sections/ExploreSection";
import SettingsSection from "./sections/SettingsSection";
import CreateCourseSection from "./sections/CreateCourseSection";
import YourCoursesSection from "./sections/YourCoursesSection";

type DashboardProps = {
  dashboardData: any;
  activeSection: DashboardSection;
};

export default function DashboardContent({
  dashboardData,
  activeSection,
}: DashboardProps) {
  const { user, stats, createdCourses, enrolledCourses } = dashboardData;

  switch (activeSection) {
    case "dashboard":
      return <DashboardOverview user={user} stats={stats} />;

    case "learning":
      return <MyLearningSection enrolledCourses={enrolledCourses} />;

    case "explore":
      return <ExploreSection />;

    case "settings":
      return <SettingsSection user={user} />;

    case "create-course":
      return <CreateCourseSection />;

    case "your-courses":
      return <YourCoursesSection createdCourses={createdCourses} />;

    default:
      return null;
  }
}
