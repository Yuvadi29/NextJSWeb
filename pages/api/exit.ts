// Handle the request and reponse for the preview mode
import type { NextApiRequest, NextApiResponse } from "next";

export default function exit(req: NextApiRequest, res: NextApiResponse) {
    res.clearPreviewData({});
    res.writeHead(307, { Location: "/" });
    res.end();
}