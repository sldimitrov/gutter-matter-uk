import { Head } from "vite-react-ssg";

const SITE = "https://guttermatter.com";

/**
 * Service structured data for the /services page.
 *
 * Kept in sync with the ServiceCards rendered on that page — structured data must
 * describe what is actually on the page, so if a service is added or removed there it
 * must change here too.
 *
 * `provider` points at the @id of the HomeAndConstructionBusiness declared in
 * index.html, which links these services to the business rather than leaving them as
 * free-floating entities.
 */
const SERVICES: { name: string; description: string }[] = [
  {
    name: "Internal Gutter Cleaning",
    description:
      "Internal gutter cleaning up to 4 storeys without scaffolding, including inspection camera footage, before and after photos and a full report.",
  },
  {
    name: "External Gutter Cleaning",
    description:
      "External gutter cleaning to remove debris, moss and dirt, restoring water flow and preventing overflow and water damage.",
  },
  {
    name: "Fascia & Soffit Cleaning",
    description:
      "Cleaning of fascias and soffits to maintain the appearance of the property and protect against rot and damage.",
  },
  {
    name: "Gutter Repair",
    description:
      "Repair of leaks, damage and misalignment to extend the life of an existing guttering system.",
  },
  {
    name: "Gutter Replacement",
    description:
      "Full gutter replacement and installation, working with all gutter types and materials.",
  },
  {
    name: "Fascia Repair",
    description:
      "Fascia board repair addressing damage from rot, weather or pests, protecting the roofline.",
  },
  {
    name: "Fascia Replacement",
    description:
      "Fascia board replacement and installation, available in uPVC and timber.",
  },
  {
    name: "Soffit Repair",
    description:
      "Soffit repair addressing damage and restoring proper ventilation to prevent moisture build-up.",
  },
  {
    name: "Soffit Replacement",
    description:
      "Full soffit replacement and installation in a range of materials and finishes.",
  },
  {
    name: "Gutter Guard Installation",
    description:
      "Installation of gutter guards to prevent debris build-up and reduce ongoing maintenance.",
  },
  {
    name: "SkyJac Inspection System",
    description:
      "Inspection camera surveys providing detailed visual reports on the condition of a guttering system.",
  },
  {
    name: "Commercial Services",
    description:
      "Guttering services for commercial properties with flexible scheduling and minimal disruption.",
  },
];

export default function ServicesSchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Guttering Services",
    itemListElement: SERVICES.map((service, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Service",
        name: service.name,
        description: service.description,
        serviceType: service.name,
        provider: { "@id": `${SITE}/#business` },
        areaServed: [
          { "@type": "AdministrativeArea", name: "Kent" },
          { "@type": "City", name: "London" },
        ],
      },
    })),
  };

  return (
    <Head defer={false}>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Head>
  );
}
