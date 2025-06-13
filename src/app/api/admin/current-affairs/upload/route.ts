import { type NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const tokenCookie = request.cookies.get("token");
  if (!tokenCookie) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  try {
    const formData = await request.formData();
    const apiBaseUrl =
      process.env.NEXT_PUBLIC_API_BASE_URL ||
      "https://api.syllabusbuddy.com/api/v1";
    const apiResponse = await fetch(
      `${apiBaseUrl}/admin/current-affairs/upload`,
      {
        method: "POST",
        headers: {
          Cookie: `${tokenCookie.name}=${tokenCookie.value}`,
        },
        body: formData,
      }
    );

    if (!apiResponse.ok) {
      const errorData = await apiResponse.json();
      return NextResponse.json(errorData, { status: apiResponse.status });
    }

    const data = await apiResponse.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Upload proxy error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
