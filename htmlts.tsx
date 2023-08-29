import { html } from "hono/html";
import { HtmlEscapedString } from "hono/utils/html";
import { LayoutProps } from "./src/Layouts/types";
import { ContextType } from "./src/types";

export const view = (
  viewToRender: (
    context: ContextType,
    children?: any
  ) => Promise<HtmlEscapedString>
) => {
  return async (c: ContextType) => {
    const curBody = (await c.res.text()) as unknown as TemplateStringsArray;
    const newBody = await viewToRender(c, html(curBody));
    return c.html(newBody);
  };
};

export const rootLayout = (
  layoutToApply: ({
    children,
    description,
    title,
  }: LayoutProps) => HtmlEscapedString
) => {
  try {
    return async (c: ContextType, next: () => Promise<void>) => {
      await next();
      if (c.req.header("HX-Request") !== "true") {
        const curBody = (await c.res.text()) as unknown as TemplateStringsArray;
        c.res = undefined;
        const newBody = layoutToApply({
          children: html(curBody),
          description: "Hono",
          title: "Hono",
        });
        c.res = c.html(newBody);
      }
    };
  } catch (error) {
    console.log(error);
    return async (c: ContextType) => {
      return c.html(<div>Error from applayout</div>);
    };
  }
};
