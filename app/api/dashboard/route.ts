import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function GET(req: Request) {
  try {
    const authHeader = req.headers.get("authorization");

    const token = authHeader?.split(" ")[1];

    if (!token) {
      return NextResponse.json(
        {
          success: false,
          message: "Unauthorized",
        },
        { status: 401 },
      );
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
      id: string;
      role: string;
    };

    const user = await prisma.user.findUnique({
      where: {
        id: decoded.id,
      },

      include: {
        createdCourses: true,

        enrollments: {
          include: {
            course: true,
          },
        },
      },
    });

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: "User not found",
        },
        { status: 404 },
      );
    }

    const enrolledCourses = user.enrollments.map(
      (enrollment) => enrollment.course,
    );

    return NextResponse.json({
      success: true,

      dashboard: {
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
        },

        stats: {
          createdCourses: user.createdCourses.length,

          enrolledCourses: enrolledCourses.length,
        },

        createdCourses: user.createdCourses,

        enrolledCourses,
      },
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
