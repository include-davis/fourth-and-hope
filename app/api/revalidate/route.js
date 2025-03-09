import { revalidateTag } from "next/cache";

export default function GET(req) {
  if (req.method !== "GET") {
    return new Response("Method not allowed", { status: 405 });
  }
  revalidateTag("cms");
}
