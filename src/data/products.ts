export interface Product {
  id: string;
  name: string;
  series: string;
  seriesSlug: string;
  description: string;
  features: string[];
}

export interface Series {
  name: string;
  slug: string;
  category: string;
  categorySlug: string;
  description: string;
  tagline: string;
  products: Product[];
}

export interface Category {
  name: string;
  slug: string;
  description: string;
  series: Series[];
}

// Standard products for PTMT/PPRC series (12 products each)
const createStandardProducts = (seriesName: string, seriesSlug: string, prefix: string): Product[] => [
  {
    id: `${prefix}-1001`,
    name: "Short Body Bib Cock",
    series: seriesName,
    seriesSlug: seriesSlug,
    description: "Compact and stylish short body bib cock with integrated wall flange for easy installation.",
    features: ["15MM Ceramic Spindle", "3 Years Warranty", "0% Drop", "Premium Finish"],
  },
  {
    id: `${prefix}-1002`,
    name: "Long Body Bib Cock",
    series: seriesName,
    seriesSlug: seriesSlug,
    description: "Extended body bib cock perfect for filling buckets and large containers.",
    features: ["15MM Ceramic Spindle", "3 Years Warranty", "Extended Reach", "High Flow Rate"],
  },
  {
    id: `${prefix}-1003`,
    name: "Short Body F/F Bib Cock",
    series: seriesName,
    seriesSlug: seriesSlug,
    description: "Short body bib cock with full flow design for maximum water output.",
    features: ["Full Flow Design", "3 Years Warranty", "Compact Design", "Drip-Free"],
  },
  {
    id: `${prefix}-1004`,
    name: "Long Body F/F Bib Cock",
    series: seriesName,
    seriesSlug: seriesSlug,
    description: "Long body bib cock with full flow for high water volume needs.",
    features: ["Full Flow Design", "Extended Reach", "3 Years Warranty", "High Performance"],
  },
  {
    id: `${prefix}-1005`,
    name: "Angle Cock",
    series: seriesName,
    seriesSlug: seriesSlug,
    description: "High-quality angle cock for connecting water supply to fixtures.",
    features: ["90-Degree Angle", "Wall Flange Included", "High Flow Rate", "Durable Construction"],
  },
  {
    id: `${prefix}-1006`,
    name: "Washing Machine Cock",
    series: seriesName,
    seriesSlug: seriesSlug,
    description: "Specialized cock designed for washing machine water supply connections.",
    features: ["Washing Machine Compatible", "High Flow Rate", "Easy Connect", "3 Years Warranty"],
  },
  {
    id: `${prefix}-1007`,
    name: "Nozzle Cock",
    series: seriesName,
    seriesSlug: seriesSlug,
    description: "Nozzle cock with controlled water flow for precise applications.",
    features: ["Precise Control", "Durable Nozzle", "3 Years Warranty", "Easy Install"],
  },
  {
    id: `${prefix}-1008`,
    name: "Pillar Cock",
    series: seriesName,
    seriesSlug: seriesSlug,
    description: "Elegant pillar cock designed for wash basins with smooth water flow.",
    features: ["Basin Mounted", "Premium Finish", "Smooth Operation", "Long Lasting"],
  },
  {
    id: `${prefix}-1009`,
    name: "Sink Cock",
    series: seriesName,
    seriesSlug: seriesSlug,
    description: "Swivel spout sink cock designed for kitchen use with 360-degree rotation.",
    features: ["Swivel Spout", "360° Rotation", "Kitchen Optimized", "Easy Cleaning"],
  },
  {
    id: `${prefix}-1010`,
    name: "Swan Neck",
    series: seriesName,
    seriesSlug: seriesSlug,
    description: "Graceful swan neck faucet adding elegance to your wash basin.",
    features: ["Elegant Design", "High Arc", "360° Rotation", "Premium Finish"],
  },
  {
    id: `${prefix}-1011`,
    name: "2-Way Bib Cock",
    series: seriesName,
    seriesSlug: seriesSlug,
    description: "Dual outlet bib cock for connecting multiple fixtures from single water source.",
    features: ["Dual Outlets", "Individual Controls", "Space Saving", "3 Years Warranty"],
  },
  {
    id: `${prefix}-1012`,
    name: "2-Way Angle Cock",
    series: seriesName,
    seriesSlug: seriesSlug,
    description: "Dual outlet angle cock for versatile water distribution.",
    features: ["Dual Outlets", "90-Degree Angle", "High Flow Rate", "Durable"],
  },
];

export const categories: Category[] = [
  {
    name: "PTMT Taps",
    slug: "ptmt-taps",
    description: "Premium quality PTMT taps with 15MM Ceramic Spindle and 3 Years Warranty",
    series: [
      {
        name: "Aura Series",
        slug: "aura-series",
        category: "PTMT Taps",
        categorySlug: "ptmt-taps",
        description: "Elegant and modern design with premium finish for contemporary bathrooms",
        tagline: "Elegance Redefined",
        products: createStandardProducts("Aura Series", "aura-series", "AUR"),
      },
      {
        name: "Fusion Series",
        slug: "fusion-series",
        category: "PTMT Taps",
        categorySlug: "ptmt-taps",
        description: "Perfect blend of style and functionality for modern homes",
        tagline: "Where Style Meets Function",
        products: createStandardProducts("Fusion Series", "fusion-series", "FUS"),
      },
      {
        name: "Charcoal Series",
        slug: "charcoal-series",
        category: "PTMT Taps",
        categorySlug: "ptmt-taps",
        description: "Bold charcoal finish with 15MM Ceramic Spindle and 3 Years Warranty",
        tagline: "Bold & Sophisticated",
        products: createStandardProducts("Charcoal Series", "charcoal-series", "CHR"),
      },
      {
        name: "Marble Series",
        slug: "marble-series",
        category: "PTMT Taps",
        categorySlug: "ptmt-taps",
        description: "Luxurious marble-finish taps with 15MM Rising Spindle and 3 Years Warranty",
        tagline: "Timeless Luxury",
        products: [
          {
            id: "MAR-1001",
            name: "Short Body Bib Cock",
            series: "Marble Series",
            seriesSlug: "marble-series",
            description: "Compact marble-finish short body bib cock with elegant design",
            features: ["15MM Rising Spindle", "3 Years Warranty", "0% Drop", "Marble Finish"],
          },
          {
            id: "MAR-1002",
            name: "Long Body Bib Cock",
            series: "Marble Series",
            seriesSlug: "marble-series",
            description: "Extended marble-finish bib cock perfect for filling buckets",
            features: ["15MM Rising Spindle", "3 Years Warranty", "Extended Reach", "Marble Finish"],
          },
          {
            id: "MAR-1003",
            name: "Angle Cock",
            series: "Marble Series",
            seriesSlug: "marble-series",
            description: "High-quality marble-finish angle cock for connecting water supply",
            features: ["90-Degree Angle", "Wall Flange Included", "Marble Finish", "3 Years Warranty"],
          },
          {
            id: "MAR-1004",
            name: "Pillar Cock",
            series: "Marble Series",
            seriesSlug: "marble-series",
            description: "Elegant marble-finish pillar cock for wash basins",
            features: ["Basin Mounted", "Premium Marble Finish", "Smooth Operation", "3 Years Warranty"],
          },
          {
            id: "MAR-1005",
            name: "Sink Cock",
            series: "Marble Series",
            seriesSlug: "marble-series",
            description: "Swivel spout marble-finish sink cock for kitchen use",
            features: ["Swivel Spout", "360° Rotation", "Marble Finish", "Kitchen Optimized"],
          },
          {
            id: "MAR-1006",
            name: "Swan Cock",
            series: "Marble Series",
            seriesSlug: "marble-series",
            description: "Graceful marble-finish swan neck faucet for elegant wash basins",
            features: ["Elegant Design", "High Arc", "Marble Finish", "Premium Quality"],
          },
          {
            id: "MAR-1007",
            name: "2-Way Bib Cock",
            series: "Marble Series",
            seriesSlug: "marble-series",
            description: "Dual outlet marble-finish bib cock for multiple connections",
            features: ["Dual Outlets", "Individual Controls", "Marble Finish", "3 Years Warranty"],
          },
          {
            id: "MAR-1008",
            name: "2-Way Angle Cock",
            series: "Marble Series",
            seriesSlug: "marble-series",
            description: "Dual outlet marble-finish angle cock for versatile water distribution",
            features: ["Dual Outlets", "90-Degree Angle", "Marble Finish", "Durable"],
          },
          {
            id: "MAR-1009",
            name: "Wall Mixture",
            series: "Marble Series",
            seriesSlug: "marble-series",
            description: "Premium marble-finish wall mixture for hot and cold water mixing",
            features: ["Hot & Cold Mixing", "Wall Mounted", "Marble Finish", "3 Years Warranty"],
          },
        ],
      },
      {
        name: "Royal Series",
        slug: "royal-series",
        category: "PTMT Taps",
        categorySlug: "ptmt-taps",
        description: "Premium Royal design with 15MM Ceramic Spindle and 3 Years Warranty",
        tagline: "Royalty in Every Drop",
        products: createStandardProducts("Royal Series", "royal-series", "RYL"),
      },
      {
        name: "T-Head Taps",
        slug: "t-head-taps",
        category: "PTMT Taps",
        categorySlug: "ptmt-taps",
        description: "Classic T-Head design taps with durable construction",
        tagline: "Classic Design",
        products: [
          {
            id: "TH-1001",
            name: "Short Body Bib Cock 90°",
            series: "T-Head Taps",
            seriesSlug: "t-head-taps",
            description: "Compact T-Head short body bib cock with 90-degree angle",
            features: ["T-Head Design", "90° Angle", "Durable", "Easy Grip"],
          },
          {
            id: "TH-1002",
            name: "Long Body Bib Cock",
            series: "T-Head Taps",
            seriesSlug: "t-head-taps",
            description: "Extended T-Head bib cock for convenient water access",
            features: ["T-Head Design", "Extended Reach", "Durable", "Easy Grip"],
          },
          {
            id: "TH-1003",
            name: "Angle Cock",
            series: "T-Head Taps",
            seriesSlug: "t-head-taps",
            description: "T-Head angle cock for water supply connections",
            features: ["T-Head Design", "90° Angle", "Wall Flange", "Durable"],
          },
        ],
      },
    ],
  },
  {
    name: "PPRC Taps",
    slug: "pprc-taps",
    description: "High-quality PPRC taps with 15MM Rising/Ceramic Spindle and warranty",
    series: [
      {
        name: "Hexa Series",
        slug: "hexa-series",
        category: "PPRC Taps",
        categorySlug: "pprc-taps",
        description: "PPRC Hexa Series with 15MM Rising Spindle and drop warranty",
        tagline: "Precision Engineered",
        products: createStandardProducts("Hexa Series", "hexa-series", "HEX"),
      },
      {
        name: "Charcoal Series",
        slug: "pprc-charcoal-series",
        category: "PPRC Taps",
        categorySlug: "pprc-taps",
        description: "PPRC Charcoal Series with 15MM Ceramic Spindle and premium finish",
        tagline: "Bold & Reliable",
        products: createStandardProducts("Charcoal Series", "pprc-charcoal-series", "PCH"),
      },
      {
        name: "Fusion Series",
        slug: "pprc-fusion-series",
        category: "PPRC Taps",
        categorySlug: "pprc-taps",
        description: "PPRC Fusion Series combining style with durability",
        tagline: "Fusion of Excellence",
        products: createStandardProducts("Fusion Series", "pprc-fusion-series", "PFS"),
      },
      {
        name: "Royal Series",
        slug: "pprc-royal-series",
        category: "PPRC Taps",
        categorySlug: "pprc-taps",
        description: "PPRC Royal Series with 15MM Ceramic Spindle and drop warranty",
        tagline: "Royal Performance",
        products: createStandardProducts("Royal Series", "pprc-royal-series", "PRL"),
      },
    ],
  },
  {
    name: "Shower & Faucets",
    slug: "shower-faucets",
    description: "Premium quality showers and health faucets for modern bathrooms",
    series: [
      {
        name: "Health Faucet",
        slug: "health-faucet",
        category: "Shower & Faucets",
        categorySlug: "shower-faucets",
        description: "High-quality health faucets for hygienic bathroom use with various hose lengths",
        tagline: "Hygiene First",
        products: [
          {
            id: "HF1-001",
            name: "Health Faucet Set (1 mtr)",
            series: "Health Faucet",
            seriesSlug: "health-faucet",
            description: "Complete health faucet set with 1 meter flexible hose",
            features: ["1 Meter Hose", "ABS Body", "Easy Grip", "Leak-Proof"],
          },
          {
            id: "HF2-001",
            name: "Health Faucet Set (2 mtr)",
            series: "Health Faucet",
            seriesSlug: "health-faucet",
            description: "Complete health faucet set with 2 meter flexible hose for extended reach",
            features: ["2 Meter Hose", "ABS Body", "Easy Grip", "Leak-Proof"],
          },
        ],
      },
      {
        name: "ABS Shower",
        slug: "abs-shower",
        category: "Shower & Faucets",
        categorySlug: "shower-faucets",
        description: "Durable ABS plastic showers coming soon - Stay tuned for a refreshing bathing experience",
        tagline: "Coming Soon",
        products: [],
      },
    ],
  },
  {
    name: "Pipes & Ball Cock",
    slug: "pipes-ball-cock",
    description: "Quality waste pipes, connection pipes, and ball cocks for plumbing needs",
    series: [
      {
        name: "Waste Pipe",
        slug: "waste-pipe",
        category: "Pipes & Ball Cock",
        categorySlug: "pipes-ball-cock",
        description: "High-quality waste pipes for efficient bathroom and kitchen drainage",
        tagline: "Efficient Drainage",
        products: [
          {
            id: "WP36-001",
            name: "Waste Pipe 36mm",
            series: "Waste Pipe",
            seriesSlug: "waste-pipe",
            description: "High-quality 36mm waste pipe for bathroom drainage",
            features: ["36mm Diameter", "Durable PVC", "Easy Install", "Leak-Proof"],
          },
          {
            id: "WP42-001",
            name: "Waste Pipe 42mm",
            series: "Waste Pipe",
            seriesSlug: "waste-pipe",
            description: "High-quality 42mm waste pipe for kitchen and bathroom drainage",
            features: ["42mm Diameter", "Heavy Duty", "Durable PVC", "Easy Connect"],
          },
        ],
      },
      {
        name: "Connection Pipe",
        slug: "connection-pipe",
        category: "Pipes & Ball Cock",
        categorySlug: "pipes-ball-cock",
        description: "Flexible connection pipes with brass fittings for tap installations",
        tagline: "Flexible Connection",
        products: [
          {
            id: "CP18-001",
            name: "Connection Pipe 18\"",
            series: "Connection Pipe",
            seriesSlug: "connection-pipe",
            description: "Flexible 18 inch connection pipe with brass fittings",
            features: ["18 Inch Length", "Flexible Design", "Brass Fittings", "Leak-Proof"],
          },
          {
            id: "CP24-001",
            name: "Connection Pipe 24\"",
            series: "Connection Pipe",
            seriesSlug: "connection-pipe",
            description: "Flexible 24 inch connection pipe with brass fittings",
            features: ["24 Inch Length", "Flexible Design", "Brass Fittings", "Leak-Proof"],
          },
          {
            id: "CP30-001",
            name: "Connection Pipe 30\"",
            series: "Connection Pipe",
            seriesSlug: "connection-pipe",
            description: "Flexible 30 inch connection pipe with brass fittings",
            features: ["30 Inch Length", "Flexible Design", "Brass Fittings", "Leak-Proof"],
          },
          {
            id: "CP36-001",
            name: "Connection Pipe 36\"",
            series: "Connection Pipe",
            seriesSlug: "connection-pipe",
            description: "Flexible 36 inch connection pipe with brass fittings",
            features: ["36 Inch Length", "Flexible Design", "Brass Fittings", "Leak-Proof"],
          },
          {
            id: "CP1M-001",
            name: "Connection Pipe 1 MTR",
            series: "Connection Pipe",
            seriesSlug: "connection-pipe",
            description: "Flexible 1 meter connection pipe with brass fittings",
            features: ["1 Meter Length", "Flexible Design", "Brass Fittings", "Heavy Duty"],
          },
          {
            id: "CP15M-001",
            name: "Connection Pipe 1.5 MTR",
            series: "Connection Pipe",
            seriesSlug: "connection-pipe",
            description: "Flexible 1.5 meter connection pipe with brass fittings",
            features: ["1.5 Meter Length", "Flexible Design", "Brass Fittings", "Heavy Duty"],
          },
        ],
      },
      {
        name: "Ball Cock",
        slug: "ball-cock",
        category: "Pipes & Ball Cock",
        categorySlug: "pipes-ball-cock",
        description: "High-quality ball cocks for water tank and supply control",
        tagline: "Precise Control",
        products: [
          {
            id: "BC12-001",
            name: "Ball Cock 1/2\"",
            series: "Ball Cock",
            seriesSlug: "ball-cock",
            description: "High-quality 1/2 inch ball cock for water control",
            features: ["1/2 Inch Size", "Heavy Duty", "High Pressure", "Durable"],
          },
          {
            id: "BC34-001",
            name: "Ball Cock 3/4\"",
            series: "Ball Cock",
            seriesSlug: "ball-cock",
            description: "High-quality 3/4 inch ball cock for water control",
            features: ["3/4 Inch Size", "Full Bore", "High Flow", "Durable"],
          },
          {
            id: "BC1-001",
            name: "Ball Cock 1\"",
            series: "Ball Cock",
            seriesSlug: "ball-cock",
            description: "High-quality 1 inch ball cock for high flow water control",
            features: ["1 Inch Size", "Full Bore", "Maximum Flow", "Industrial Grade"],
          },
        ],
      },
    ],
  },
  {
    name: "Ball Valve",
    slug: "ball-valve",
    description: "High-performance ball valves for water control - Coming Soon",
    series: [
      {
        name: "Coming Soon",
        slug: "ball-valve-coming-soon-1",
        category: "Ball Valve",
        categorySlug: "ball-valve",
        description: "New ball valve products coming soon. Stay tuned for exciting additions!",
        tagline: "Coming Soon",
        products: [],
      },
      {
        name: "Coming Soon",
        slug: "ball-valve-coming-soon-2",
        category: "Ball Valve",
        categorySlug: "ball-valve",
        description: "New ball valve products coming soon. Stay tuned for exciting additions!",
        tagline: "Coming Soon",
        products: [],
      },
      {
        name: "Coming Soon",
        slug: "ball-valve-coming-soon-3",
        category: "Ball Valve",
        categorySlug: "ball-valve",
        description: "New ball valve products coming soon. Stay tuned for exciting additions!",
        tagline: "Coming Soon",
        products: [],
      },
    ],
  },
];

export const getAllSeries = (): Series[] => {
  return categories.flatMap((cat) => cat.series);
};

export const getSeriesBySlug = (slug: string): Series | undefined => {
  return getAllSeries().find((series) => series.slug === slug);
};

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find((cat) => cat.slug === slug);
};

export const getProductById = (id: string): Product | undefined => {
  return getAllSeries()
    .flatMap((series) => series.products)
    .find((product) => product.id === id);
};
