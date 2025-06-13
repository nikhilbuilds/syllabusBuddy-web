import { type NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const tokenCookie = request.cookies.get("token");

  try {
    const apiBaseUrl =
      process.env.NEXT_PUBLIC_API_BASE_URL ||
      "https://api.syllabusbuddy.com/api/v1";
    const apiResponse = await fetch(`${apiBaseUrl}/users/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Cookie: tokenCookie ? `${tokenCookie.name}=${tokenCookie.value}` : "",
      },
    });

    if (!apiResponse.ok) {
      const errorData = await apiResponse.json();
      return NextResponse.json(errorData, { status: apiResponse.status });
    }

    const data = await apiResponse.json();
    const response = NextResponse.json(data);

    // Forward the Set-Cookie header from the API response (to clear the cookie)
    const setCookieHeader = apiResponse.headers.get("Set-Cookie");
    if (setCookieHeader) {
      response.headers.set("Set-Cookie", setCookieHeader);
    }

    return response;
  } catch (error) {
    console.error("Logout proxy error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
