export interface Product {
  id: string;
  name: string;
  series: string;
  seriesSlug: string;
  description: string;
  features: string[];
  image?: string;
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

// Image path helpers for different series
const getAuraImage = (productName: string): string | undefined => {
  const imageMap: Record<string, string> = {
    "Short Body Bib Cock": "/assets/products/Aura Series/Short body bib cock.jpg",
    "Long Body Bib Cock": "/assets/products/Aura Series/Long body bib cock.jpg",
    "Short Body F/F Bib Cock": "/assets/products/Aura Series/Short body foam flow.jpg",
    "Long Body F/F Bib Cock": "/assets/products/Aura Series/Long Body foam flow.png",
    "Angle Cock": "/assets/products/Aura Series/Angle cock.jpg",
    "Washing Machine Cock": "/assets/products/Aura Series/Washing machine cock.png",
    "Nozzle Cock": "/assets/products/Aura Series/Nozzle cock.jpg",
    "Pillar Cock": "/assets/products/Aura Series/Pillar cock.jpg",
    "Sink Cock": "/assets/products/Aura Series/Sink cock.png",
    "Swan Neck": "/assets/products/Aura Series/Swan neck.png",
    "2-Way Bib Cock": "/assets/products/Aura Series/2 way bib cock.jpg",
    "2-Way Angle Cock": "/assets/products/Aura Series/2 way angle cock.jpg",
  };
  return imageMap[productName];
};

const getFusionImage = (productName: string): string | undefined => {
  const imageMap: Record<string, string> = {
    "Short Body Bib Cock": "/assets/products/Fusion Series/Short body bib cock.jpg",
    "Long Body Bib Cock": "/assets/products/Fusion Series/Long body bib cock.jpg",
    "Short Body F/F Bib Cock": "/assets/products/Fusion Series/Short body foam flow.png",
    "Long Body F/F Bib Cock": "/assets/products/Fusion Series/long body foam flow.jpg",
    "Angle Cock": "/assets/products/Fusion Series/Angle cock.jpg",
    "Washing Machine Cock": "/assets/products/Fusion Series/Washing machine cock.jpg",
    "Nozzle Cock": "/assets/products/Fusion Series/Nozzle cock.jpg",
    "Pillar Cock": "/assets/products/Fusion Series/Pillar cock.jpg",
    "Sink Cock": "/assets/products/Fusion Series/Sink cock.jpg",
    "Swan Neck": "/assets/products/Fusion Series/Swan neck.png",
    "2-Way Bib Cock": "/assets/products/Fusion Series/2-way bib cock.jpg",
    "2-Way Angle Cock": "/assets/products/Fusion Series/2-way angle cock.jpg",
  };
  return imageMap[productName];
};

const getCharcoalImage = (productName: string): string | undefined => {
  const imageMap: Record<string, string> = {
    "Short Body Bib Cock": "/assets/products/Charcoal Series/Short body bib cock.jpg",
    "Long Body Bib Cock": "/assets/products/Charcoal Series/Long body.jpg",
    "Short Body F/F Bib Cock": "/assets/products/Charcoal Series/Short body foam flow.jpg",
    "Long Body F/F Bib Cock": "/assets/products/Charcoal Series/Long body foam flow.jpg",
    "Angle Cock": "/assets/products/Charcoal Series/Angle cock.jpg",
    "Washing Machine Cock": "/assets/products/Charcoal Series/Washing machine cock.jpg",
    "Nozzle Cock": "/assets/products/Charcoal Series/Nozzel cock.jpg",
    "Pillar Cock": "/assets/products/Charcoal Series/Pillar cock.jpg",
    "Sink Cock": "/assets/products/Charcoal Series/Sink cock.jpg",
    "Swan Neck": "/assets/products/Charcoal Series/Swan neck.png",
    "2-Way Bib Cock": "/assets/products/Charcoal Series/2 way bib cock.jpg",
    "2-Way Angle Cock": "/assets/products/Charcoal Series/2 way angle cock.jpg",
  };
  return imageMap[productName];
};

const getRoyalImage = (productName: string): string | undefined => {
  const imageMap: Record<string, string> = {
    "Short Body Bib Cock": "/assets/products/Royal Series/Short body bib cock.jpg",
    "Long Body Bib Cock": "/assets/products/Royal Series/Long body bib cock.jpg",
    "Short Body F/F Bib Cock": "/assets/products/Royal Series/Short body foam flow.jpg",
    "Long Body F/F Bib Cock": "/assets/products/Royal Series/Long body foam flow.jpg",
    "Angle Cock": "/assets/products/Royal Series/angle cock.jpg",
    "Washing Machine Cock": "/assets/products/Royal Series/Washing machine.png",
    "Nozzle Cock": "/assets/products/Royal Series/Nozzle cock.jpg",
    "Pillar Cock": "/assets/products/Royal Series/Pillar cock.jpg",
    "Sink Cock": "/assets/products/Royal Series/Sink cock.jpg",
    "Swan Neck": "/assets/products/Royal Series/Swan neck.jpg",
    "2-Way Bib Cock": "/assets/products/Royal Series/2 way bib cock.jpg",
    "2-Way Angle Cock": "/assets/products/Royal Series/2 way angle cock.jpg",
  };
  return imageMap[productName];
};

const getMarbleImage = (productName: string): string | undefined => {
  const imageMap: Record<string, string> = {
    "Short Body Bib Cock": "/assets/products/Marble Series/Short body.jpg",
    "Long Body Bib Cock": "/assets/products/Marble Series/Long body.png",
    "Angle Cock": "/assets/products/Marble Series/Angle.png",
    "Pillar Cock": "/assets/products/Marble Series/Pillar cock.png",
    "Sink Cock": "/assets/products/Marble Series/Sink cock.jpg",
    "Swan Cock": "/assets/products/Marble Series/Swan neck.png",
    "2-Way Bib Cock": "/assets/products/Marble Series/2-way bib cock.jpg",
    "2-Way Angle Cock": "/assets/products/Marble Series/2-way angle cock.jpg",
    "Wall Mixture": "/assets/products/Marble Series/Wall-mixture.jpg",
  };
  return imageMap[productName];
};

const getTHeadImage = (productName: string): string | undefined => {
  const imageMap: Record<string, string> = {
    "Short Body Bib Cock 90°": "/assets/products/T-Head/Short body bib cock.jpg",
    "Long Body Bib Cock": "/assets/products/T-Head/Long body bib cock.jpg",
    "Angle Cock": "/assets/products/T-Head/Angel cock.jpg",
  };
  return imageMap[productName];
};

const getHexaImage = (productName: string): string | undefined => {
  const imageMap: Record<string, string> = {
    "Short Body Bib Cock": "/assets/products/hexa/short-body.png",
    "Long Body Bib Cock": "/assets/products/hexa/long-body-bib-cock.png",
    "Short Body F/F Bib Cock": "/assets/products/hexa/short-body-foam-flow.png",
    "Long Body F/F Bib Cock": "/assets/products/hexa/long-body-foam-flow.png",
    "Angle Cock": "/assets/products/hexa/angle-cock.png",
    "Washing Machine Cock": "/assets/products/hexa/washing-machine-cock.png",
    "Nozzle Cock": "/assets/products/hexa/nozzle-cock.png",
    "Pillar Cock": "/assets/products/hexa/pillar-cock.png",
    "Sink Cock": "/assets/products/hexa/sink-cock.png",
    "Swan Neck": "/assets/products/hexa/swan-neck.png",
    "2-Way Bib Cock": "/assets/products/hexa/2 way bib cock.png",
    "2-Way Angle Cock": "/assets/products/hexa/2 way angle cock.png",
  };
  return imageMap[productName];
};

// Standard products for PTMT/PPRC series (12 products each)
const createStandardProducts = (seriesName: string, seriesSlug: string, prefix: string, getImage: (name: string) => string | undefined): Product[] => [
  {
    id: `${prefix}-1001`,
    name: "Short Body Bib Cock",
    series: seriesName,
    seriesSlug: seriesSlug,
    description: "Compact and stylish short body bib cock with integrated wall flange for easy installation.",
    features: ["15MM Ceramic Spindle", "3 Years Warranty", "0% Drop", "Premium Finish"],
    image: getImage("Short Body Bib Cock"),
  },
  {
    id: `${prefix}-1002`,
    name: "Long Body Bib Cock",
    series: seriesName,
    seriesSlug: seriesSlug,
    description: "Extended body bib cock perfect for filling buckets and large containers.",
    features: ["15MM Ceramic Spindle", "3 Years Warranty", "Extended Reach", "High Flow Rate"],
    image: getImage("Long Body Bib Cock"),
  },
  {
    id: `${prefix}-1003`,
    name: "Short Body F/F Bib Cock",
    series: seriesName,
    seriesSlug: seriesSlug,
    description: "Short body bib cock with full flow design for maximum water output.",
    features: ["Full Flow Design", "3 Years Warranty", "Compact Design", "Drip-Free"],
    image: getImage("Short Body F/F Bib Cock"),
  },
  {
    id: `${prefix}-1004`,
    name: "Long Body F/F Bib Cock",
    series: seriesName,
    seriesSlug: seriesSlug,
    description: "Long body bib cock with full flow for high water volume needs.",
    features: ["Full Flow Design", "Extended Reach", "3 Years Warranty", "High Performance"],
    image: getImage("Long Body F/F Bib Cock"),
  },
  {
    id: `${prefix}-1005`,
    name: "Angle Cock",
    series: seriesName,
    seriesSlug: seriesSlug,
    description: "High-quality angle cock for connecting water supply to fixtures.",
    features: ["90-Degree Angle", "Wall Flange Included", "High Flow Rate", "Durable Construction"],
    image: getImage("Angle Cock"),
  },
  {
    id: `${prefix}-1006`,
    name: "Washing Machine Cock",
    series: seriesName,
    seriesSlug: seriesSlug,
    description: "Specialized cock designed for washing machine water supply connections.",
    features: ["Washing Machine Compatible", "High Flow Rate", "Easy Connect", "3 Years Warranty"],
    image: getImage("Washing Machine Cock"),
  },
  {
    id: `${prefix}-1007`,
    name: "Nozzle Cock",
    series: seriesName,
    seriesSlug: seriesSlug,
    description: "Nozzle cock with controlled water flow for precise applications.",
    features: ["Precise Control", "Durable Nozzle", "3 Years Warranty", "Easy Install"],
    image: getImage("Nozzle Cock"),
  },
  {
    id: `${prefix}-1008`,
    name: "Pillar Cock",
    series: seriesName,
    seriesSlug: seriesSlug,
    description: "Elegant pillar cock designed for wash basins with smooth water flow.",
    features: ["Basin Mounted", "Premium Finish", "Smooth Operation", "Long Lasting"],
    image: getImage("Pillar Cock"),
  },
  {
    id: `${prefix}-1009`,
    name: "Sink Cock",
    series: seriesName,
    seriesSlug: seriesSlug,
    description: "Swivel spout sink cock designed for kitchen use with 360-degree rotation.",
    features: ["Swivel Spout", "360° Rotation", "Kitchen Optimized", "Easy Cleaning"],
    image: getImage("Sink Cock"),
  },
  {
    id: `${prefix}-1010`,
    name: "Swan Neck",
    series: seriesName,
    seriesSlug: seriesSlug,
    description: "Graceful swan neck faucet adding elegance to your wash basin.",
    features: ["Elegant Design", "High Arc", "360° Rotation", "Premium Finish"],
    image: getImage("Swan Neck"),
  },
  {
    id: `${prefix}-1011`,
    name: "2-Way Bib Cock",
    series: seriesName,
    seriesSlug: seriesSlug,
    description: "Dual outlet bib cock for connecting multiple fixtures from single water source.",
    features: ["Dual Outlets", "Individual Controls", "Space Saving", "3 Years Warranty"],
    image: getImage("2-Way Bib Cock"),
  },
  {
    id: `${prefix}-1012`,
    name: "2-Way Angle Cock",
    series: seriesName,
    seriesSlug: seriesSlug,
    description: "Dual outlet angle cock for versatile water distribution.",
    features: ["Dual Outlets", "90-Degree Angle", "High Flow Rate", "Durable"],
    image: getImage("2-Way Angle Cock"),
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
        products: createStandardProducts("Aura Series", "aura-series", "AUR", getAuraImage),
      },
      {
        name: "Fusion Series",
        slug: "fusion-series",
        category: "PTMT Taps",
        categorySlug: "ptmt-taps",
        description: "Perfect blend of style and functionality for modern homes",
        tagline: "Where Style Meets Function",
        products: createStandardProducts("Fusion Series", "fusion-series", "FUS", getFusionImage),
      },
      {
        name: "Charcoal Series",
        slug: "charcoal-series",
        category: "PTMT Taps",
        categorySlug: "ptmt-taps",
        description: "Bold charcoal finish with 15MM Ceramic Spindle and 3 Years Warranty",
        tagline: "Bold & Sophisticated",
        products: createStandardProducts("Charcoal Series", "charcoal-series", "CHR", getCharcoalImage),
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
            image: getMarbleImage("Short Body Bib Cock"),
          },
          {
            id: "MAR-1002",
            name: "Long Body Bib Cock",
            series: "Marble Series",
            seriesSlug: "marble-series",
            description: "Extended marble-finish bib cock perfect for filling buckets",
            features: ["15MM Rising Spindle", "3 Years Warranty", "Extended Reach", "Marble Finish"],
            image: getMarbleImage("Long Body Bib Cock"),
          },
          {
            id: "MAR-1003",
            name: "Angle Cock",
            series: "Marble Series",
            seriesSlug: "marble-series",
            description: "High-quality marble-finish angle cock for connecting water supply",
            features: ["90-Degree Angle", "Wall Flange Included", "Marble Finish", "3 Years Warranty"],
            image: getMarbleImage("Angle Cock"),
          },
          {
            id: "MAR-1004",
            name: "Pillar Cock",
            series: "Marble Series",
            seriesSlug: "marble-series",
            description: "Elegant marble-finish pillar cock for wash basins",
            features: ["Basin Mounted", "Premium Marble Finish", "Smooth Operation", "3 Years Warranty"],
            image: getMarbleImage("Pillar Cock"),
          },
          {
            id: "MAR-1005",
            name: "Sink Cock",
            series: "Marble Series",
            seriesSlug: "marble-series",
            description: "Swivel spout marble-finish sink cock for kitchen use",
            features: ["Swivel Spout", "360° Rotation", "Marble Finish", "Kitchen Optimized"],
            image: getMarbleImage("Sink Cock"),
          },
          {
            id: "MAR-1006",
            name: "Swan Cock",
            series: "Marble Series",
            seriesSlug: "marble-series",
            description: "Graceful marble-finish swan neck faucet for elegant wash basins",
            features: ["Elegant Design", "High Arc", "Marble Finish", "Premium Quality"],
            image: getMarbleImage("Swan Cock"),
          },
          {
            id: "MAR-1007",
            name: "2-Way Bib Cock",
            series: "Marble Series",
            seriesSlug: "marble-series",
            description: "Dual outlet marble-finish bib cock for multiple connections",
            features: ["Dual Outlets", "Individual Controls", "Marble Finish", "3 Years Warranty"],
            image: getMarbleImage("2-Way Bib Cock"),
          },
          {
            id: "MAR-1008",
            name: "2-Way Angle Cock",
            series: "Marble Series",
            seriesSlug: "marble-series",
            description: "Dual outlet marble-finish angle cock for versatile water distribution",
            features: ["Dual Outlets", "90-Degree Angle", "Marble Finish", "Durable"],
            image: getMarbleImage("2-Way Angle Cock"),
          },
          {
            id: "MAR-1009",
            name: "Wall Mixture",
            series: "Marble Series",
            seriesSlug: "marble-series",
            description: "Premium marble-finish wall mixture for hot and cold water mixing",
            features: ["Hot & Cold Mixing", "Wall Mounted", "Marble Finish", "3 Years Warranty"],
            image: getMarbleImage("Wall Mixture"),
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
        products: createStandardProducts("Royal Series", "royal-series", "RYL", getRoyalImage),
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
            image: getTHeadImage("Short Body Bib Cock 90°"),
          },
          {
            id: "TH-1002",
            name: "Long Body Bib Cock",
            series: "T-Head Taps",
            seriesSlug: "t-head-taps",
            description: "Extended T-Head bib cock for convenient water access",
            features: ["T-Head Design", "Extended Reach", "Durable", "Easy Grip"],
            image: getTHeadImage("Long Body Bib Cock"),
          },
          {
            id: "TH-1003",
            name: "Angle Cock",
            series: "T-Head Taps",
            seriesSlug: "t-head-taps",
            description: "T-Head angle cock for water supply connections",
            features: ["T-Head Design", "90° Angle", "Wall Flange", "Durable"],
            image: getTHeadImage("Angle Cock"),
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
        products: [
          {
            id: "HEX-1001",
            name: "Short Body Bib Cock",
            series: "Hexa Series",
            seriesSlug: "hexa-series",
            description: "Compact and stylish short body bib cock with integrated wall flange for easy installation.",
            features: ["15MM Rising Spindle", "Drop Warranty", "0% Drop", "Premium Finish"],
            image: getHexaImage("Short Body Bib Cock"),
          },
          {
            id: "HEX-1002",
            name: "Long Body Bib Cock",
            series: "Hexa Series",
            seriesSlug: "hexa-series",
            description: "Extended body bib cock perfect for filling buckets and large containers.",
            features: ["15MM Rising Spindle", "Drop Warranty", "Extended Reach", "High Flow Rate"],
            image: getHexaImage("Long Body Bib Cock"),
          },
          {
            id: "HEX-1003",
            name: "Short Body F/F Bib Cock",
            series: "Hexa Series",
            seriesSlug: "hexa-series",
            description: "Short body bib cock with foam flow design for maximum water output.",
            features: ["Foam Flow Design", "Drop Warranty", "Compact Design", "Drip-Free"],
            image: getHexaImage("Short Body F/F Bib Cock"),
          },
          {
            id: "HEX-1004",
            name: "Long Body F/F Bib Cock",
            series: "Hexa Series",
            seriesSlug: "hexa-series",
            description: "Long body bib cock with foam flow for high water volume needs.",
            features: ["Foam Flow Design", "Extended Reach", "Drop Warranty", "High Performance"],
            image: getHexaImage("Long Body F/F Bib Cock"),
          },
          {
            id: "HEX-1005",
            name: "Angle Cock",
            series: "Hexa Series",
            seriesSlug: "hexa-series",
            description: "High-quality angle cock for connecting water supply to fixtures.",
            features: ["90-Degree Angle", "Wall Flange Included", "High Flow Rate", "Durable Construction"],
            image: getHexaImage("Angle Cock"),
          },
          {
            id: "HEX-1006",
            name: "Washing Machine Cock",
            series: "Hexa Series",
            seriesSlug: "hexa-series",
            description: "Specialized cock designed for washing machine water supply connections.",
            features: ["Washing Machine Compatible", "High Flow Rate", "Easy Connect", "Drop Warranty"],
            image: getHexaImage("Washing Machine Cock"),
          },
          {
            id: "HEX-1007",
            name: "Nozzle Cock",
            series: "Hexa Series",
            seriesSlug: "hexa-series",
            description: "Nozzle cock with controlled water flow for precise applications.",
            features: ["Precise Control", "Durable Nozzle", "Drop Warranty", "Easy Install"],
            image: getHexaImage("Nozzle Cock"),
          },
          {
            id: "HEX-1008",
            name: "Pillar Cock",
            series: "Hexa Series",
            seriesSlug: "hexa-series",
            description: "Elegant pillar cock designed for wash basins with smooth water flow.",
            features: ["Basin Mounted", "Premium Finish", "Smooth Operation", "Long Lasting"],
            image: getHexaImage("Pillar Cock"),
          },
          {
            id: "HEX-1009",
            name: "Sink Cock",
            series: "Hexa Series",
            seriesSlug: "hexa-series",
            description: "Swivel spout sink cock designed for kitchen use with 360-degree rotation.",
            features: ["Swivel Spout", "360° Rotation", "Kitchen Optimized", "Easy Cleaning"],
            image: getHexaImage("Sink Cock"),
          },
          {
            id: "HEX-1010",
            name: "Swan Neck",
            series: "Hexa Series",
            seriesSlug: "hexa-series",
            description: "Graceful swan neck faucet adding elegance to your wash basin.",
            features: ["Elegant Design", "High Arc", "360° Rotation", "Premium Finish"],
            image: getHexaImage("Swan Neck"),
          },
          {
            id: "HEX-1011",
            name: "2-Way Bib Cock",
            series: "Hexa Series",
            seriesSlug: "hexa-series",
            description: "Dual outlet bib cock for connecting multiple fixtures from single water source.",
            features: ["Dual Outlets", "Individual Controls", "Space Saving", "Drop Warranty"],
            image: getHexaImage("2-Way Bib Cock"),
          },
          {
            id: "HEX-1012",
            name: "2-Way Angle Cock",
            series: "Hexa Series",
            seriesSlug: "hexa-series",
            description: "Dual outlet angle cock for versatile water distribution.",
            features: ["Dual Outlets", "90-Degree Angle", "High Flow Rate", "Durable"],
            image: getHexaImage("2-Way Angle Cock"),
          },
        ],
      },
      {
        name: "Charcoal Series",
        slug: "pprc-charcoal-series",
        category: "PPRC Taps",
        categorySlug: "pprc-taps",
        description: "PPRC Charcoal Series with 15MM Ceramic Spindle and premium finish",
        tagline: "Bold & Reliable",
        products: createStandardProducts("Charcoal Series", "pprc-charcoal-series", "PCH", getCharcoalImage),
      },
      {
        name: "Fusion Series",
        slug: "pprc-fusion-series",
        category: "PPRC Taps",
        categorySlug: "pprc-taps",
        description: "PPRC Fusion Series combining style with durability",
        tagline: "Fusion of Excellence",
        products: createStandardProducts("Fusion Series", "pprc-fusion-series", "PFS", getFusionImage),
      },
      {
        name: "Royal Series",
        slug: "pprc-royal-series",
        category: "PPRC Taps",
        categorySlug: "pprc-taps",
        description: "PPRC Royal Series with 15MM Ceramic Spindle and drop warranty",
        tagline: "Royal Performance",
        products: createStandardProducts("Royal Series", "pprc-royal-series", "PRL", getRoyalImage),
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
            image: "/assets/products/Other Products/Health faucet.png",
          },
          {
            id: "HF2-001",
            name: "Health Faucet Set (2 mtr)",
            series: "Health Faucet",
            seriesSlug: "health-faucet",
            description: "Complete health faucet set with 2 meter flexible hose for extended reach",
            features: ["2 Meter Hose", "ABS Body", "Easy Grip", "Leak-Proof"],
            image: "/assets/products/Other Products/Health Faucet 2.png",
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
            id: "SH-01",
            name: "ABS Shower 4X4",
            series: "ABS Shower",
            seriesSlug: "abs-shower",
            description: "High-quality 4X4 ABS shower head for refreshing bathing experience",
            features: ["4X4 Size", "ABS Construction", "Multiple Spray", "Easy Clean"],
            image: "/assets/products/Other Products/Shower.png",
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
            image: "/assets/products/Other Products/Waste pipe.jpg",
          },
          {
            id: "WP42-001",
            name: "Waste Pipe 42mm",
            series: "Waste Pipe",
            seriesSlug: "waste-pipe",
            description: "High-quality 42mm waste pipe for kitchen and bathroom drainage",
            features: ["42mm Diameter", "Heavy Duty", "Durable PVC", "Easy Connect"],
            image: "/assets/products/Other Products/Waste pipe.jpg",
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
            image: "/assets/products/Other Products/Connection pipe.jpg",
          },
          {
            id: "CP24-001",
            name: "Connection Pipe 24\"",
            series: "Connection Pipe",
            seriesSlug: "connection-pipe",
            description: "Flexible 24 inch connection pipe with brass fittings",
            features: ["24 Inch Length", "Flexible Design", "Brass Fittings", "Leak-Proof"],
            image: "/assets/products/Other Products/Connection pipe.jpg",
          },
          {
            id: "CP30-001",
            name: "Connection Pipe 30\"",
            series: "Connection Pipe",
            seriesSlug: "connection-pipe",
            description: "Flexible 30 inch connection pipe with brass fittings",
            features: ["30 Inch Length", "Flexible Design", "Brass Fittings", "Leak-Proof"],
            image: "/assets/products/Other Products/Connection pipe.jpg",
          },
          {
            id: "CP36-001",
            name: "Connection Pipe 36\"",
            series: "Connection Pipe",
            seriesSlug: "connection-pipe",
            description: "Flexible 36 inch connection pipe with brass fittings",
            features: ["36 Inch Length", "Flexible Design", "Brass Fittings", "Leak-Proof"],
            image: "/assets/products/Other Products/Connection pipe.jpg",
          },
          {
            id: "CP1M-001",
            name: "Connection Pipe 1 MTR",
            series: "Connection Pipe",
            seriesSlug: "connection-pipe",
            description: "Flexible 1 meter connection pipe with brass fittings",
            features: ["1 Meter Length", "Flexible Design", "Brass Fittings", "Heavy Duty"],
            image: "/assets/products/Other Products/Connection pipe.jpg",
          },
          {
            id: "CP15M-001",
            name: "Connection Pipe 1.5 MTR",
            series: "Connection Pipe",
            seriesSlug: "connection-pipe",
            description: "Flexible 1.5 meter connection pipe with brass fittings",
            features: ["1.5 Meter Length", "Flexible Design", "Brass Fittings", "Heavy Duty"],
            image: "/assets/products/Other Products/Connection pipe.jpg",
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
            image: "/assets/products/Other Products/PTMT BALL COCK.png",
          },
          {
            id: "BC34-001",
            name: "Ball Cock 3/4\"",
            series: "Ball Cock",
            seriesSlug: "ball-cock",
            description: "High-quality 3/4 inch ball cock for water control",
            features: ["3/4 Inch Size", "Full Bore", "High Flow", "Durable"],
            image: "/assets/products/Other Products/PTMT BALL COCK.png",
          },
          {
            id: "BC1-001",
            name: "Ball Cock 1\"",
            series: "Ball Cock",
            seriesSlug: "ball-cock",
            description: "High-quality 1 inch ball cock for high flow water control",
            features: ["1 Inch Size", "Full Bore", "Maximum Flow", "Industrial Grade"],
            image: "/assets/products/Other Products/PTMT BALL COCK.png",
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
