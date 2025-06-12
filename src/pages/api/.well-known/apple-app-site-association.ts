import type { NextApiRequest, NextApiResponse } from "next";

// TODO: Replace with your actual Apple App Bundle ID
const BUNDLE_ID = "com.syllabusbuddy.app";

const association = {
  applinks: {
    apps: [],
    details: [
      {
        appID: `${BUNDLE_ID}`,
        paths: ["/verify-email/*"], // Or a more general path like "*"
      },
    ],
  },
};

export default (_: NextApiRequest, response: NextApiResponse) => {
  return response.status(200).json(association);
};
