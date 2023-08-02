import { authenticate } from "../shopify.server";
import { LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = async ({ request }) => {
  await authenticate.admin(request);

  return null;
}
