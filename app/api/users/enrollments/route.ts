import { prisma } from "@/lib/prisma";

import jwt from "jsonwebtoken";

import { NextResponse } from "next/server";

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

    const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);

    const enrollments = await prisma.enrollment.findMany({
      where: {
        userId: decoded.id,
      },
    });

    return NextResponse.json({
      success: true,
      enrollments,
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
