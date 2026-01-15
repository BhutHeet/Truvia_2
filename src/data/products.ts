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

export const categories: Category[] = [
  {
    name: "PTMT Taps",
    slug: "ptmt-taps",
    description: "Premium quality polymer taps with excellent durability and finish",
    series: [
      {
        name: "ALIVE Series (Dove Prime)",
        slug: "alive-dove-prime",
        category: "PTMT Taps",
        categorySlug: "ptmt-taps",
        description: "The best gift you can give to coming generations",
        tagline: "Elegance meets durability",
        products: [
          {
            id: "adp-1",
            name: "Short Body Bib Cock With Wall Flange",
            series: "ALIVE Series (Dove Prime)",
            seriesSlug: "alive-dove-prime",
            description: "Compact and stylish short body bib cock with integrated wall flange for easy installation.",
            features: ["Compact design", "Wall flange included", "Easy installation", "Drip-free operation"],
          },
          {
            id: "adp-2",
            name: "Pillar Cock",
            series: "ALIVE Series (Dove Prime)",
            seriesSlug: "alive-dove-prime",
            description: "Elegant pillar cock designed for wash basins with smooth water flow.",
            features: ["Premium finish", "Smooth operation", "Basin mounted", "Long lasting"],
          },
          {
            id: "adp-3",
            name: "Angle Cock With Wall Flange",
            series: "ALIVE Series (Dove Prime)",
            seriesSlug: "alive-dove-prime",
            description: "High-quality angle cock for connecting water supply to fixtures.",
            features: ["90-degree angle", "Wall flange included", "High flow rate", "Durable construction"],
          },
          {
            id: "adp-4",
            name: "Long Body Bib Cock With Wall Flange",
            series: "ALIVE Series (Dove Prime)",
            seriesSlug: "alive-dove-prime",
            description: "Extended body bib cock perfect for filling buckets and large containers.",
            features: ["Extended reach", "Wall flange included", "High flow rate", "Versatile usage"],
          },
          {
            id: "adp-5",
            name: "2 Way Bib Cock With Wall Flange",
            series: "ALIVE Series (Dove Prime)",
            seriesSlug: "alive-dove-prime",
            description: "Dual outlet bib cock for connecting multiple fixtures from single water source.",
            features: ["Dual outlets", "Wall flange included", "Individual controls", "Space saving"],
          },
          {
            id: "adp-6",
            name: "Sink Cock With Wall Flange",
            series: "ALIVE Series (Dove Prime)",
            seriesSlug: "alive-dove-prime",
            description: "Swivel spout sink cock designed for kitchen use with 360-degree rotation.",
            features: ["Swivel spout", "360° rotation", "Kitchen optimized", "Easy cleaning"],
          },
          {
            id: "adp-7",
            name: "Swan Neck",
            series: "ALIVE Series (Dove Prime)",
            seriesSlug: "alive-dove-prime",
            description: "Graceful swan neck faucet adding elegance to your wash basin.",
            features: ["Elegant design", "High arc", "360° rotation", "Premium finish"],
          },
        ],
      },
      {
        name: "ALIVE Series (Aqua Prime)",
        slug: "alive-aqua-prime",
        category: "PTMT Taps",
        categorySlug: "ptmt-taps",
        description: "Refreshing aqua finish with modern design",
        tagline: "Fresh and modern",
        products: [
          {
            id: "aap-1",
            name: "Short Body Bib Cock With Wall Flange",
            series: "ALIVE Series (Aqua Prime)",
            seriesSlug: "alive-aqua-prime",
            description: "Compact bib cock with beautiful aqua finish.",
            features: ["Aqua finish", "Compact design", "Wall flange included", "Drip-free"],
          },
          {
            id: "aap-2",
            name: "Pillar Cock",
            series: "ALIVE Series (Aqua Prime)",
            seriesSlug: "alive-aqua-prime",
            description: "Stylish pillar cock with aqua color theme.",
            features: ["Aqua color", "Smooth operation", "Premium quality", "Long lasting"],
          },
          {
            id: "aap-3",
            name: "Angle Cock With Wall Flange",
            series: "ALIVE Series (Aqua Prime)",
            seriesSlug: "alive-aqua-prime",
            description: "Quality angle cock in refreshing aqua finish.",
            features: ["Aqua finish", "High flow rate", "Wall flange", "Durable"],
          },
        ],
      },
      {
        name: "CUBIX Series",
        slug: "cubix-series",
        category: "PTMT Taps",
        categorySlug: "ptmt-taps",
        description: "Contemporary cubic design for modern bathrooms",
        tagline: "Bold and geometric",
        products: [
          {
            id: "cub-1",
            name: "Short Body Bib Cock",
            series: "CUBIX Series",
            seriesSlug: "cubix-series",
            description: "Modern cubic design short body bib cock.",
            features: ["Cubic design", "Modern look", "Easy grip", "Drip-free"],
          },
          {
            id: "cub-2",
            name: "Long Body Bib Cock",
            series: "CUBIX Series",
            seriesSlug: "cubix-series",
            description: "Extended cubic design for versatile usage.",
            features: ["Extended reach", "Cubic aesthetic", "High flow", "Durable"],
          },
          {
            id: "cub-3",
            name: "Pillar Cock",
            series: "CUBIX Series",
            seriesSlug: "cubix-series",
            description: "Basin mounted pillar cock with square design.",
            features: ["Square handle", "Basin mount", "Smooth flow", "Premium finish"],
          },
        ],
      },
      {
        name: "SQUARE Series",
        slug: "square-series",
        category: "PTMT Taps",
        categorySlug: "ptmt-taps",
        description: "Clean square lines for minimalist aesthetics",
        tagline: "Minimal and elegant",
        products: [
          {
            id: "sq-1",
            name: "Short Body Bib Cock",
            series: "SQUARE Series",
            seriesSlug: "square-series",
            description: "Minimalist square design bib cock.",
            features: ["Square design", "Clean lines", "Wall mounted", "Drip-free"],
          },
          {
            id: "sq-2",
            name: "Angle Cock",
            series: "SQUARE Series",
            seriesSlug: "square-series",
            description: "Square aesthetic angle cock for fixtures.",
            features: ["Square handle", "90° angle", "High flow", "Easy install"],
          },
        ],
      },
    ],
  },
  {
    name: "PP Taps",
    slug: "pp-taps",
    description: "Durable polypropylene taps for everyday use",
    series: [
      {
        name: "ECONOMY Series",
        slug: "economy-series",
        category: "PP Taps",
        categorySlug: "pp-taps",
        description: "Budget-friendly quality taps",
        tagline: "Quality meets affordability",
        products: [
          {
            id: "eco-1",
            name: "Short Body Bib Cock",
            series: "ECONOMY Series",
            seriesSlug: "economy-series",
            description: "Affordable yet durable short body bib cock.",
            features: ["Budget friendly", "Durable PP", "Easy install", "Good flow"],
          },
          {
            id: "eco-2",
            name: "Long Body Bib Cock",
            series: "ECONOMY Series",
            seriesSlug: "economy-series",
            description: "Extended reach at an economical price.",
            features: ["Extended body", "Affordable", "Rust-free", "Long lasting"],
          },
        ],
      },
      {
        name: "STANDARD Series",
        slug: "standard-series",
        category: "PP Taps",
        categorySlug: "pp-taps",
        description: "Standard quality for reliable performance",
        tagline: "Reliable everyday choice",
        products: [
          {
            id: "std-1",
            name: "Bib Cock",
            series: "STANDARD Series",
            seriesSlug: "standard-series",
            description: "Reliable standard bib cock for daily use.",
            features: ["Standard quality", "Reliable", "Easy maintenance", "Drip-free"],
          },
          {
            id: "std-2",
            name: "Pillar Cock",
            series: "STANDARD Series",
            seriesSlug: "standard-series",
            description: "Standard pillar cock for wash basins.",
            features: ["Basin mount", "Smooth operation", "Durable", "Affordable"],
          },
        ],
      },
    ],
  },
  {
    name: "Ball Valve",
    slug: "ball-valve",
    description: "High-performance ball valves for water control",
    series: [
      {
        name: "PREMIUM Ball Valve",
        slug: "premium-ball-valve",
        category: "Ball Valve",
        categorySlug: "ball-valve",
        description: "Heavy duty ball valves for industrial use",
        tagline: "Industrial strength",
        products: [
          {
            id: "bv-1",
            name: "15mm Ball Valve",
            series: "PREMIUM Ball Valve",
            seriesSlug: "premium-ball-valve",
            description: "15mm heavy duty ball valve for water lines.",
            features: ["15mm size", "Heavy duty", "High pressure", "Long lasting"],
          },
          {
            id: "bv-2",
            name: "20mm Ball Valve",
            series: "PREMIUM Ball Valve",
            seriesSlug: "premium-ball-valve",
            description: "20mm ball valve for main water supply.",
            features: ["20mm size", "Full bore", "High flow", "Durable"],
          },
          {
            id: "bv-3",
            name: "25mm Ball Valve",
            series: "PREMIUM Ball Valve",
            seriesSlug: "premium-ball-valve",
            description: "Large 25mm ball valve for high volume applications.",
            features: ["25mm size", "High capacity", "Industrial grade", "Reliable"],
          },
        ],
      },
    ],
  },
  {
    name: "Shower & Accessories",
    slug: "shower",
    description: "Modern shower solutions and bathroom accessories",
    series: [
      {
        name: "RAIN Shower Series",
        slug: "rain-shower",
        category: "Shower & Accessories",
        categorySlug: "shower",
        description: "Luxurious rain shower experience",
        tagline: "Rainfall comfort",
        products: [
          {
            id: "sh-1",
            name: "6 Inch Rain Shower",
            series: "RAIN Shower Series",
            seriesSlug: "rain-shower",
            description: "6 inch overhead rain shower for refreshing experience.",
            features: ["6 inch diameter", "Rain pattern", "Easy clean", "Chrome arm"],
          },
          {
            id: "sh-2",
            name: "8 Inch Rain Shower",
            series: "RAIN Shower Series",
            seriesSlug: "rain-shower",
            description: "Larger 8 inch rain shower for premium experience.",
            features: ["8 inch diameter", "Wide coverage", "Anti-limescale", "Premium finish"],
          },
        ],
      },
      {
        name: "Hand Shower Series",
        slug: "hand-shower",
        category: "Shower & Accessories",
        categorySlug: "shower",
        description: "Flexible hand showers for convenience",
        tagline: "Flexibility in your hands",
        products: [
          {
            id: "hs-1",
            name: "Multi-function Hand Shower",
            series: "Hand Shower Series",
            seriesSlug: "hand-shower",
            description: "Hand shower with multiple spray patterns.",
            features: ["Multi-function", "Easy grip", "1.5m hose", "Wall bracket"],
          },
          {
            id: "hs-2",
            name: "Telephonic Hand Shower",
            series: "Hand Shower Series",
            seriesSlug: "hand-shower",
            description: "Classic telephonic style hand shower.",
            features: ["Classic design", "Comfortable grip", "Flexible hose", "Durable"],
          },
        ],
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
