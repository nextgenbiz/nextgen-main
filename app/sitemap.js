// app/sitemap.js
export default function sitemap() {
  const baseUrl = "https://www.nextgenbusiness.co.in";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/solution`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/sitemap`,
      lastModified: new Date().toISOString(),
    },
  ];
}
