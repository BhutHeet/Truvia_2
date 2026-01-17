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
        description: "Luxurious marble-finish taps for elegant bathroom aesthetics",
        tagline: "Timeless Luxury",
        products: createStandardProducts("Marble Series", "marble-series", "MRB"),
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
        description: "Classic T-Head design taps for traditional and modern bathrooms",
        tagline: "Classic Design, Modern Performance",
        products: createStandardProducts("T-Head Taps", "t-head-taps", "THD"),
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
        name: "Health Faucet (1 mtr)",
        slug: "health-faucet-1m",
        category: "Shower & Faucets",
        categorySlug: "shower-faucets",
        description: "High-quality 1 meter health faucet for hygienic bathroom use",
        tagline: "Hygiene First",
        products: [
          {
            id: "HF1-001",
            name: "Health Faucet Set (1 mtr)",
            series: "Health Faucet (1 mtr)",
            seriesSlug: "health-faucet-1m",
            description: "Complete health faucet set with 1 meter flexible hose",
            features: ["1 Meter Hose", "ABS Body", "Easy Grip", "Leak-Proof"],
          },
        ],
      },
      {
        name: "Health Faucet (2 mtr)",
        slug: "health-faucet-2m",
        category: "Shower & Faucets",
        categorySlug: "shower-faucets",
        description: "Extended 2 meter health faucet for greater reach and flexibility",
        tagline: "Extended Reach",
        products: [
          {
            id: "HF2-001",
            name: "Health Faucet Set (2 mtr)",
            series: "Health Faucet (2 mtr)",
            seriesSlug: "health-faucet-2m",
            description: "Complete health faucet set with 2 meter flexible hose",
            features: ["2 Meter Hose", "ABS Body", "Easy Grip", "Leak-Proof"],
          },
        ],
      },
      {
        name: "ABS Shower",
        slug: "abs-shower",
        category: "Shower & Faucets",
        categorySlug: "shower-faucets",
        description: "Durable ABS plastic showers for refreshing bathing experience",
        tagline: "Refreshing Experience",
        products: [
          {
            id: "ABS-001",
            name: "ABS Hand Shower",
            series: "ABS Shower",
            seriesSlug: "abs-shower",
            description: "High-quality ABS hand shower with multiple spray patterns",
            features: ["ABS Body", "Multiple Spray Patterns", "Comfortable Grip", "Durable"],
          },
          {
            id: "ABS-002",
            name: "ABS Overhead Shower",
            series: "ABS Shower",
            seriesSlug: "abs-shower",
            description: "ABS overhead shower for rainfall-like experience",
            features: ["Rainfall Pattern", "ABS Construction", "Easy Clean", "Wide Coverage"],
          },
        ],
      },
    ],
  },
  {
    name: "Pipes & Ball Cock",
    slug: "pipes-ball-cock",
    description: "Quality waste pipes, connection pipes, and ball cocks for plumbing needs",
    series: [
      {
        name: "Waste Pipe (36 mm)",
        slug: "waste-pipe-36mm",
        category: "Pipes & Ball Cock",
        categorySlug: "pipes-ball-cock",
        description: "36mm diameter waste pipe for efficient drainage",
        tagline: "Efficient Drainage",
        products: [
          {
            id: "WP36-001",
            name: "Waste Pipe 36mm",
            series: "Waste Pipe (36 mm)",
            seriesSlug: "waste-pipe-36mm",
            description: "High-quality 36mm waste pipe for bathroom drainage",
            features: ["36mm Diameter", "Durable PVC", "Easy Install", "Leak-Proof"],
          },
        ],
      },
      {
        name: "Waste Pipe (42 mm)",
        slug: "waste-pipe-42mm",
        category: "Pipes & Ball Cock",
        categorySlug: "pipes-ball-cock",
        description: "42mm diameter waste pipe for heavy-duty drainage",
        tagline: "Heavy Duty Drainage",
        products: [
          {
            id: "WP42-001",
            name: "Waste Pipe 42mm",
            series: "Waste Pipe (42 mm)",
            seriesSlug: "waste-pipe-42mm",
            description: "High-quality 42mm waste pipe for kitchen and bathroom drainage",
            features: ["42mm Diameter", "Heavy Duty", "Durable PVC", "Easy Connect"],
          },
        ],
      },
      {
        name: "Connection Pipe (18\")",
        slug: "connection-pipe-18",
        category: "Pipes & Ball Cock",
        categorySlug: "pipes-ball-cock",
        description: "18 inch flexible connection pipe for tap installations",
        tagline: "Flexible Connection",
        products: [
          {
            id: "CP18-001",
            name: "Connection Pipe 18\"",
            series: "Connection Pipe (18\")",
            seriesSlug: "connection-pipe-18",
            description: "Flexible 18 inch connection pipe with brass fittings",
            features: ["18 Inch Length", "Flexible Design", "Brass Fittings", "Leak-Proof"],
          },
        ],
      },
      {
        name: "Connection Pipe (24\")",
        slug: "connection-pipe-24",
        category: "Pipes & Ball Cock",
        categorySlug: "pipes-ball-cock",
        description: "24 inch flexible connection pipe for extended reach",
        tagline: "Extended Reach",
        products: [
          {
            id: "CP24-001",
            name: "Connection Pipe 24\"",
            series: "Connection Pipe (24\")",
            seriesSlug: "connection-pipe-24",
            description: "Flexible 24 inch connection pipe with brass fittings",
            features: ["24 Inch Length", "Flexible Design", "Brass Fittings", "Leak-Proof"],
          },
        ],
      },
      {
        name: "Connection Pipe (30\")",
        slug: "connection-pipe-30",
        category: "Pipes & Ball Cock",
        categorySlug: "pipes-ball-cock",
        description: "30 inch flexible connection pipe for longer installations",
        tagline: "Long Reach",
        products: [
          {
            id: "CP30-001",
            name: "Connection Pipe 30\"",
            series: "Connection Pipe (30\")",
            seriesSlug: "connection-pipe-30",
            description: "Flexible 30 inch connection pipe with brass fittings",
            features: ["30 Inch Length", "Flexible Design", "Brass Fittings", "Leak-Proof"],
          },
        ],
      },
      {
        name: "Connection Pipe (36\")",
        slug: "connection-pipe-36",
        category: "Pipes & Ball Cock",
        categorySlug: "pipes-ball-cock",
        description: "36 inch flexible connection pipe for maximum flexibility",
        tagline: "Maximum Flexibility",
        products: [
          {
            id: "CP36-001",
            name: "Connection Pipe 36\"",
            series: "Connection Pipe (36\")",
            seriesSlug: "connection-pipe-36",
            description: "Flexible 36 inch connection pipe with brass fittings",
            features: ["36 Inch Length", "Flexible Design", "Brass Fittings", "Leak-Proof"],
          },
        ],
      },
      {
        name: "Connection Pipe (1 MTR)",
        slug: "connection-pipe-1m",
        category: "Pipes & Ball Cock",
        categorySlug: "pipes-ball-cock",
        description: "1 meter flexible connection pipe for extended installations",
        tagline: "Professional Grade",
        products: [
          {
            id: "CP1M-001",
            name: "Connection Pipe 1 MTR",
            series: "Connection Pipe (1 MTR)",
            seriesSlug: "connection-pipe-1m",
            description: "Flexible 1 meter connection pipe with brass fittings",
            features: ["1 Meter Length", "Flexible Design", "Brass Fittings", "Heavy Duty"],
          },
        ],
      },
      {
        name: "Connection Pipe (1.5 MTR)",
        slug: "connection-pipe-1-5m",
        category: "Pipes & Ball Cock",
        categorySlug: "pipes-ball-cock",
        description: "1.5 meter flexible connection pipe for long-distance installations",
        tagline: "Extra Long Reach",
        products: [
          {
            id: "CP15M-001",
            name: "Connection Pipe 1.5 MTR",
            series: "Connection Pipe (1.5 MTR)",
            seriesSlug: "connection-pipe-1-5m",
            description: "Flexible 1.5 meter connection pipe with brass fittings",
            features: ["1.5 Meter Length", "Flexible Design", "Brass Fittings", "Heavy Duty"],
          },
        ],
      },
      {
        name: "Ball Cock (1/2\")",
        slug: "ball-cock-half",
        category: "Pipes & Ball Cock",
        categorySlug: "pipes-ball-cock",
        description: "1/2 inch ball cock for water tank and supply control",
        tagline: "Precise Control",
        products: [
          {
            id: "BC12-001",
            name: "Ball Cock 1/2\"",
            series: "Ball Cock (1/2\")",
            seriesSlug: "ball-cock-half",
            description: "High-quality 1/2 inch ball cock for water control",
            features: ["1/2 Inch Size", "Heavy Duty", "High Pressure", "Durable"],
          },
        ],
      },
      {
        name: "Ball Cock (3/4\")",
        slug: "ball-cock-3-4",
        category: "Pipes & Ball Cock",
        categorySlug: "pipes-ball-cock",
        description: "3/4 inch ball cock for medium flow water control",
        tagline: "Medium Flow Control",
        products: [
          {
            id: "BC34-001",
            name: "Ball Cock 3/4\"",
            series: "Ball Cock (3/4\")",
            seriesSlug: "ball-cock-3-4",
            description: "High-quality 3/4 inch ball cock for water control",
            features: ["3/4 Inch Size", "Full Bore", "High Flow", "Durable"],
          },
        ],
      },
      {
        name: "Ball Cock (1\")",
        slug: "ball-cock-1",
        category: "Pipes & Ball Cock",
        categorySlug: "pipes-ball-cock",
        description: "1 inch ball cock for high flow water control",
        tagline: "High Flow Control",
        products: [
          {
            id: "BC1-001",
            name: "Ball Cock 1\"",
            series: "Ball Cock (1\")",
            seriesSlug: "ball-cock-1",
            description: "High-quality 1 inch ball cock for maximum water flow control",
            features: ["1 Inch Size", "High Capacity", "Industrial Grade", "Reliable"],
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
