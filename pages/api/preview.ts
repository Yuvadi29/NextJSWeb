// Handle the request and reponse for the preview mode
import { NextApiRequest, NextApiResponse } from "next";


export default function preview(req: NextApiRequest, res: NextApiResponse) {
  // Enable Preview Mode by setting a preview cookie
  res.setPreviewData({ });

  // Redirect to the home page
  res.writeHead(307, { Location: "/" });
  res.end();
}
