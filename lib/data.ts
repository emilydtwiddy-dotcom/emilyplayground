export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  description: string;
  longDescription: string;
  tags: string[];
  image: string;
  accentColor: string;
  featured: boolean;
  liveUrl?: string;
  githubUrl?: string;
  sections: {
    heading: string;
    body: string;
  }[];
};

export const projects: Project[] = [
  {
    slug: "brand-identity-studio",
    title: "Brand Identity Studio",
    category: "Branding",
    year: "2024",
    description:
      "A comprehensive visual identity system for a boutique creative studio, spanning logo design, typography, and brand guidelines.",
    longDescription:
      "Working closely with the studio founders, I developed a flexible identity system that could adapt across print, digital, and environmental contexts — rooted in a refined typographic palette and a restrained use of color.",
    tags: ["Branding", "Typography", "System Design"],
    image: "/images/project-1.jpg",
    accentColor: "#E8E0D4",
    featured: true,
    sections: [
      {
        heading: "The Brief",
        body: "The studio needed an identity that felt established yet contemporary — something that could attract high-caliber clients while retaining a human, approachable quality. The founders emphasized restraint: no trendy flourishes, nothing that would feel dated in five years.",
      },
      {
        heading: "Process",
        body: "I started with an extensive typographic exploration, testing pairings of geometric sans-serifs with humanist serifs before landing on a custom wordmark derived from Garamond proportions. The color system was built around a warm neutral core with a single accent — flexible enough for both formal print materials and digital applications.",
      },
      {
        heading: "Outcome",
        body: "The identity launched across business cards, letterhead, a new website, and studio signage. Client acquisition increased 40% in the first quarter following the rebrand, and the studio has since been featured in several design publications.",
      },
    ],
  },
  {
    slug: "spatial-audio-app",
    title: "Spatial Audio App",
    category: "Product Design",
    year: "2024",
    description:
      "End-to-end UX and UI design for an immersive spatial audio platform targeting independent musicians and sound designers.",
    longDescription:
      "From initial discovery through shipped product, I led design on a complex spatial audio creation tool — balancing professional-grade capability with approachable, learnable interfaces.",
    tags: ["Product Design", "UX", "Audio"],
    image: "/images/project-2.jpg",
    accentColor: "#D4D8E0",
    featured: true,
    sections: [
      {
        heading: "The Challenge",
        body: "Spatial audio tools are notoriously complex — professional DAWs overwhelm new users, while consumer apps oversimplify. The goal was to find the right middle ground: powerful enough for pros, learnable enough for curious beginners.",
      },
      {
        heading: "Research & Framing",
        body: "We ran diary studies with 12 independent musicians over six weeks, watching how they currently approximated spatial audio using traditional stereo tools. Key insight: they didn't want to learn new paradigms — they wanted their existing mental models to extend into 3D space.",
      },
      {
        heading: "Design System",
        body: "I built a dense, information-rich design system optimized for dark environments — mixing strong typographic hierarchy with subtle surface variations to create depth without visual noise. Every interactive element went through at least three rounds of usability testing.",
      },
    ],
  },
  {
    slug: "editorial-magazine-redesign",
    title: "Editorial Magazine Redesign",
    category: "Editorial",
    year: "2023",
    description:
      "Complete redesign of a 30-year-old architecture and design magazine — print and digital — honoring its legacy while attracting a new generation of readers.",
    longDescription:
      "A full editorial redesign across print and digital channels for a storied architecture publication, navigating the tension between heritage and relevance.",
    tags: ["Editorial", "Print", "Typography"],
    image: "/images/project-3.jpg",
    accentColor: "#DCE8DC",
    featured: true,
    sections: [
      {
        heading: "Heritage vs. Relevance",
        body: "The magazine had a 30-year archive and a fiercely loyal readership — any redesign risked alienating existing subscribers while trying to attract younger readers. We conducted focus groups with both cohorts to understand what elements were non-negotiable versus what had simply persisted through inertia.",
      },
      {
        heading: "Grid & Typography",
        body: "The new system is built on a strict 12-column grid with generous margins — a nod to the proportions of classic Swiss editorial design. The type pairing (Canela for display, GT America for body) bridges heritage and contemporary sensibility without feeling like pastiche.",
      },
      {
        heading: "Digital Extension",
        body: "The print redesign informed a new digital template system, allowing editors to create visually consistent layouts across web and app without design involvement for every piece. The component library has since been adapted for three sister publications.",
      },
    ],
  },
  {
    slug: "fintech-dashboard",
    title: "Fintech Dashboard",
    category: "Product Design",
    year: "2023",
    description:
      "Data visualization and UX design for a B2B fintech platform helping CFOs understand cash flow across complex corporate structures.",
    longDescription:
      "Redesigning a dense financial data platform to surface clarity from complexity — making high-stakes decisions faster and more confident for finance executives.",
    tags: ["Product Design", "Data Viz", "Fintech"],
    image: "/images/project-4.jpg",
    accentColor: "#E8E4D4",
    featured: false,
    sections: [
      {
        heading: "The Problem",
        body: "Finance executives were spending 2-3 hours each morning assembling a mental picture of their company's cash position — pulling from spreadsheets, bank portals, and internal reports. The platform existed to automate this, but its interface was nearly as complex as the manual process it replaced.",
      },
      {
        heading: "Simplifying Without Losing Depth",
        body: "The challenge was creating a surface that immediately answered the CFO's morning question ('Am I okay today?') while preserving access to the full depth of data beneath. We used progressive disclosure extensively — summary cards that expand into detailed breakdowns without navigating away.",
      },
    ],
  },
  {
    slug: "type-specimen-poster",
    title: "Type Specimen Poster",
    category: "Print",
    year: "2023",
    description:
      "A limited-edition type specimen poster series for an independent type foundry, produced in a run of 500 risograph prints.",
    longDescription:
      "Designing a series of type specimen posters that function as both sales tool and collectible art object — celebrating the personality of each typeface through composition and color.",
    tags: ["Print", "Typography", "Risograph"],
    image: "/images/project-5.jpg",
    accentColor: "#E4D4E8",
    featured: false,
    sections: [
      {
        heading: "Concept",
        body: "Each poster in the series takes a single typeface and uses it exclusively — testing its range across scales, weights, and contexts. The risograph printing process introduced a beautiful imprecision: slight misregistration, ink variation, and texture that no digital rendering can replicate.",
      },
    ],
  },
  {
    slug: "wayfinding-system",
    title: "Cultural Center Wayfinding",
    category: "Environmental",
    year: "2022",
    description:
      "Environmental graphic design and wayfinding system for a new multi-building cultural center spanning 12 acres.",
    longDescription:
      "Designing a wayfinding system at the scale of a small city — coordinating across architecture, landscape, and digital touchpoints to orient visitors across a sprawling cultural campus.",
    tags: ["Environmental", "Wayfinding", "Systems"],
    image: "/images/project-6.jpg",
    accentColor: "#D4E4E8",
    featured: false,
    sections: [
      {
        heading: "Scale & Complexity",
        body: "The campus comprises seven buildings, three outdoor performance venues, and a network of paths connecting to the surrounding neighborhood. The wayfinding system needed to serve first-time visitors, season ticket holders, accessibility-focused guests, and delivery logistics simultaneously.",
      },
    ],
  },
];

export const resumeData = {
  name: "Emily Twiddy",
  title: "Designer & Creative Director",
  bio: "I design systems, experiences, and identities that last. Fifteen years across branding, product, and editorial — currently available for select projects.",
  email: "emily@example.com",
  location: "New York, NY",
  experience: [
    {
      company: "Independent Practice",
      role: "Creative Director",
      period: "2020 — Present",
      description:
        "Strategic design and creative direction for brands, products, and editorial platforms. Clients include architecture firms, fintech startups, cultural institutions, and media companies.",
    },
    {
      company: "Pentagram",
      role: "Senior Designer",
      period: "2016 — 2020",
      description:
        "Identity, environmental, and editorial design across a wide range of cultural and corporate clients. Contributed to brand systems for major institutions and led junior designers on complex multi-year projects.",
    },
    {
      company: "The New York Times",
      role: "Visual Designer",
      period: "2013 — 2016",
      description:
        "Designed for the Opinion section and T Magazine. Responsible for illustration commissioning, layout design, and the development of recurring visual formats for digital and print.",
    },
    {
      company: "Wolff Olins",
      role: "Junior Designer",
      period: "2011 — 2013",
      description:
        "Contributed to brand strategy and identity projects for global clients. Developed skills in systems thinking and large-scale brand implementation.",
    },
  ],
  education: [
    {
      school: "Yale School of Art",
      degree: "MFA Graphic Design",
      year: "2011",
    },
    {
      school: "Rhode Island School of Design",
      degree: "BFA Graphic Design",
      year: "2009",
    },
  ],
  skills: [
    "Brand Identity",
    "Design Systems",
    "Art Direction",
    "Typography",
    "Product Design",
    "Editorial Design",
    "Environmental Graphics",
    "Motion Design",
    "Figma",
    "Adobe Creative Suite",
    "Framer",
    "Webflow",
  ],
  awards: [
    { name: "D&AD Yellow Pencil", category: "Branding", year: "2023" },
    { name: "Type Directors Club", category: "Typography", year: "2022" },
    { name: "AIGA 50 Books / 50 Covers", category: "Editorial", year: "2021" },
    { name: "Cannes Lions Silver", category: "Brand Experience", year: "2019" },
  ],
};
