export function withBase(path: string): string {
  if (path.startsWith("http") || path.startsWith("mailto:")) {
    return path;
  }

  const rawBase = import.meta.env.BASE_URL || "/";
  const base = rawBase === "/" ? "" : rawBase.replace(/\/$/, "");

  if (path === "/") {
    return `${base}/`;
  }

  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export function alternateLocalePath(path: string, locale: "en" | "ru"): string {
  if (locale === "ru") {
    const withoutRu = path.replace(/^\/ru/, "");
    return withoutRu === "" ? "/" : withoutRu;
  }

  return path === "/" ? "/ru/" : `/ru${path}`;
}
