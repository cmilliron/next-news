export function GET(request) {
  console.log(request);
  // Response.json.
  return new Response("Hello");
}
// export function POST() {}
