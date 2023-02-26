import Iframe from "sanity-plugin-iframe-pane";
import type { DefaultDocumentNodeResolver } from "sanity/desk";

export const getDefaultDocumentNode: DefaultDocumentNodeResolver = (
    S,
    { schemaType }
) => {
    if(schemaType === 'post') {
        return S.document().views([
            S.view.form(),

            S.view
            .component(Iframe)
            .options({
                // Accepts a string function and is required
                url: `${
                    process.env.NEXT_PUBLIC_VERCEL_URL || "http;//localhost:3000"
                }/api/preview`,
                // Set default size
                defaultSize: `desktop`,
                // Add a reload button or reload on new document revisions
                reload: {
                    button: true,
                },
                attributes: {},
            })
            .title("Preview"),
        ]);
    }
}


