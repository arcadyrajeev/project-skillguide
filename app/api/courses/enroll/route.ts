import { prisma } from "@/lib/prisma";

import jwt from "jsonwebtoken";

import { NextRequest } from "next/server";

import { NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const authHeader = req.headers.get("authorization");

    const token = authHeader?.split(" ")[1];

    let userId = null;

    // Decode token if exists
    if (token) {
      try {
        const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);

        userId = decoded.id;
      } catch {
        userId = null;
      }
    }

    // Fetch courses
    const courses = await prisma.course.findMany({
      include: {
        teacher: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },

        enrollments: true,
      },

      orderBy: {
        createdAt: "desc",
      },
    });

    // Add enrolled state
    const formattedCourses = courses.map((course) => ({
      ...course,

      isEnrolled: course.enrollments.some(
        (enrollment) => enrollment.userId === userId,
      ),
    }));

    return NextResponse.json({
      success: true,

      courses: formattedCourses,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        success: false,
        message: "Server error",
      },
      { status: 500 },
    );
  }
}
