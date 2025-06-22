// app/sitemap.xml/route.js
export const dynamic = 'force-dynamic';
import BASE_URL from "@/api/baseUrl";
export async function GET() {
    const baseUrl = 'https://aigeneratedimagess.com';
    
    try {
      // Fetch pages with slug and updatedAt from your Express backend
      const response = await fetch(`${BASE_URL}/image/slugs`, {
        cache: 'no-store'
      });
      
      if (!response.ok) {
        throw new Error(`API responded with status: ${response.status}`);
      }
      
      const pages = await response.json();
      
      // Generate sitemap with real MongoDB timestamps
      const sitemap = generateSitemap(pages.data, baseUrl);
      
      return new Response(sitemap, {
        headers: {
          'Content-Type': 'application/xml',
          'Cache-Control': 'public, max-age=3600'
        }
      });
      
    } catch (error) {
      console.error('Error generating sitemap:', error);
      return new Response('Error generating sitemap', { status: 500 });
    }
  }


  const categoryMap = [
    { fullCategory: "Business", shortCategory: "business" },
    { fullCategory: "Finance", shortCategory: "finance" },
    { fullCategory: "Education & Learning", shortCategory: "education" },
    { fullCategory: "Technology", shortCategory: "technology" },
    { fullCategory: "Festivals & occasions", shortCategory: "festivals" },
    { fullCategory: "Fashion & beauty", shortCategory: "fashion" },
    { fullCategory: "Travel, Lifestyle & Nature", shortCategory: "nature" },
    {
      fullCategory: "Home Design & Real Estate",
      shortCategory: "real-estate",
    },
    { fullCategory: "Food & Drink", shortCategory: "food" },
  ];

  // Utility: Pass long category, get short categoryy
  
  function getShortCategory(fullCategory) {
    const found = categoryMap.find((c) => c.fullCategory === fullCategory);
    return found ? found.shortCategory : null;
  }
  
  function generateSitemap(pages, baseUrl) {
    return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>${baseUrl}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
    </url>
  ${pages.map(page => `  <url>
      <loc>${baseUrl}/${getShortCategory(page.Category)}/${page.PageSlug}</loc>
      <lastmod>${new Date(page.updatedAt).toISOString()}</lastmod>
    </url>`).join('\n')}
  </urlset>`;
  }