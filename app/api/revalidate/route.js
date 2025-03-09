import { revalidateTag } from "next/cache";

export async function GET() {
  revalidateTag("cms");
}
