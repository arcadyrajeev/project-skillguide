import { prisma } from "@/lib/prisma";

import jwt from "jsonwebtoken";

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // Get token
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

    // Verify token
    const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);

    // Parse body
    const body = await req.json();

    // Create course
    const course = await prisma.course.create({
      data: {
        title: body.title,

        description: body.description,

        thumbnail: body.thumbnail,

        videoUrl: body.videoUrl,

        teacherId: decoded.id,
      },
    });

    return NextResponse.json({
      success: true,
      course,
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
