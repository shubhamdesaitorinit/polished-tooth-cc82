import { html } from "hono/html";
import { LayoutProps } from "./types";

const AppLayout = ({ children, description, title }: LayoutProps) => {
  const cssUrl =
    "//cdnjs.cloudflare.com/ajax/libs/mini.css/3.0.1/mini-default.min.css";
  return html` <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${description}" />
        <title>${title}</title>
        <link rel="preload" href="${cssUrl}" as="style" />
        <script src="https://unpkg.com/htmx.org@1.9.3"></script>
        <script src="https://unpkg.com/hyperscript.org@0.9.9"></script>
        <link rel="stylesheet" href="${cssUrl}" />
        <link rel="shortcut icon" href="/assets/favicon.ico" />
        <link href="/app.css" rel="stylesheet" />
      </head>
      <body>
        <turbo-frame id="main"> ${children} </turbo-frame>
      </body>
    </html>`;
};


export default AppLayout