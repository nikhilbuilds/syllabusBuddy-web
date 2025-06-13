import { type NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const tokenCookie = request.cookies.get("token");

  if (!tokenCookie) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  try {
    const apiBaseUrl =
      process.env.NEXT_PUBLIC_API_BASE_URL ||
      "https://api.syllabusbuddy.com/api/v1";
    const response = await fetch(`${apiBaseUrl}/admin/user`, {
      headers: {
        Cookie: `${tokenCookie.name}=${tokenCookie.value}`,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json(errorData, { status: response.status });
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Failed to fetch user:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
