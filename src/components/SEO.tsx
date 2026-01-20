import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  noIndex?: boolean;
}

const SEO: React.FC<SEOProps> = ({
  title = "Drexflows - AI Automation & Workflow Solutions | Business Process Automation",
  description = "Transform your business with Drexflows AI automation solutions. Get custom workflows, process automation, and AI-powered tools. Starting at $11/month. Book a free consultation today.",
  keywords = "AI automation, workflow automation, business process automation, custom workflows, AI tools, process optimization, business automation, drexflows",
  image = "https://drexflows.in/og-image.jpg",
  url = "https://drexflows.in/",
  type = "website",
  noIndex = false
}) => {
  const siteTitle = "Drexflows";
  const fullTitle = title.includes(siteTitle) ? title : `${title} | ${siteTitle}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={siteTitle} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@drexflows" />
      
      {/* Additional SEO */}
      <meta name="author" content="Drexflows" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
    </Helmet>
  );
};

export default SEO;
