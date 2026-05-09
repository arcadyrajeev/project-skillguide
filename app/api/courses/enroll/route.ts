import { prisma } from "@/lib/prisma";

import jwt from "jsonwebtoken";

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // Auth header
    const authHeader = req.headers.get("authorization");

    const token = authHeader?.split(" ")[1];

    // No token
    if (!token) {
      return NextResponse.json(
        {
          success: false,
          message: "Unauthorized",
        },
        { status: 401 },
      );
    }

    // Verify JWT
    const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);

    // Request body
    const body = await req.json();

    // Already enrolled?
    const existingEnrollment = await prisma.enrollment.findFirst({
      where: {
        userId: decoded.id,

        courseId: body.courseId,
      },
    });

    if (existingEnrollment) {
      return NextResponse.json({
        success: true,

        message: "Already enrolled",
      });
    }

    // Create enrollment
    const enrollment = await prisma.enrollment.create({
      data: {
        userId: decoded.id,

        courseId: body.courseId,
      },
    });

    return NextResponse.json({
      success: true,

      enrollment,
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
