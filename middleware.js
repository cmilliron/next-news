import { NextResponse } from "next/server";

export function middleware(request) {
  // console.log(request);
  console.log("In Middleware. Request: ", request.url);
  return NextResponse.next();
}

export const config = {
  matcher: "/news",
};
