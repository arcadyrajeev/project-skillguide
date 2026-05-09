"use client";

import { createContext, useContext, useEffect, useState } from "react";

type UserType = {
  id: string;

  name: string;

  email: string;

  role: string;
};

type AuthContextType = {
  user: UserType | null;

  loading: boolean;

  enrolledCourses: string[];

  setEnrolledCourses: React.Dispatch<React.SetStateAction<string[]>>;

  setUser: React.Dispatch<React.SetStateAction<UserType | null>>;

  logout: () => void;
};

const AuthContext = createContext<AuthContextType>({
  user: null,

  loading: true,

  enrolledCourses: [],

  setEnrolledCourses: () => {},

  setUser: () => {},

  logout: () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserType | null>(null);

  const [loading, setLoading] = useState(true);

  const [enrolledCourses, setEnrolledCourses] = useState<string[]>([]);

  useEffect(() => {
    async function loadUser() {
      try {
        const storedUser = localStorage.getItem("user");

        const token = localStorage.getItem("token");

        // No user
        if (!storedUser || !token) {
          setLoading(false);

          return;
        }

        const parsedUser = JSON.parse(storedUser);

        setUser(parsedUser);

        // Fetch enrolled courses
        const response = await fetch("/api/users/enrollments", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();

        if (data.success) {
          setEnrolledCourses(
            data.enrollments.map((enrollment: any) => enrollment.courseId),
          );
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    loadUser();
  }, []);

  function logout() {
    localStorage.removeItem("token");

    localStorage.removeItem("user");

    setUser(null);

    setEnrolledCourses([]);

    window.location.href = "/";
  }

  return (
    <AuthContext.Provider
      value={{
        user,

        setUser,

        loading,

        enrolledCourses,

        setEnrolledCourses,

        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
