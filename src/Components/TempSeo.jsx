import { Helmet } from "react-helmet-async";

export default function TempSeo({
  title = "AdamyaTech - Web & App Development",
  description = "AdamyaTech creates modern websites, high-performance web apps, mobile apps, and tech solutions with premium UI/UX and optimized performance.",
  keywords = "web development, app development, portfolio, UI UX, React developer, modern websites, frontend developer, AdamyaTech",
  image = "/preview.png",
  url = "https://adamyatech.in",
}) {
  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="AdamyaTech" />
      <meta name="robots" content="index, follow" />

      {/* Mobile */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#000000" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Security */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      

      {/* Performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
    </Helmet>
  );
}