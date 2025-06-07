import { supabaseUrl } from "../services/supabase";

const imageUrl = `${supabaseUrl}/storage/v1/object/public/cabin-images/`;

export const cabins = [
  {
    name: "001",
    maxCapacity: 2,
    regularPrice: 250,
    discount: 0,
    image: imageUrl + "cabin-001.jpg",
    description:
      "Perfect for couples, Cabin 001 is a cozy wooden hideaway nestled in a peaceful forest. Enjoy modern interiors, a fireplace, a fully-equipped kitchen, and a king-size bed with premium linens. Unwind in the spa-style bathroom or soak in the private hot tub on the deck.",
  },
  {
    name: "002",
    maxCapacity: 2,
    regularPrice: 350,
    discount: 25,
    image: imageUrl + "cabin-002.jpg",
    description:
      "Cabin 002 offers a luxurious escape for two in a tranquil woodland setting. This elegant retreat features high-quality wooden interiors, a fireplace, a modern kitchen, a king-size bed, and a spa-like shower. Relax on the private deck with a hot tub and forest views.",
  },
  {
    name: "003",
    maxCapacity: 4,
    regularPrice: 300,
    discount: 0,
    image: imageUrl + "cabin-003.jpg",
    description:
      "Ideal for families, Cabin 003 comfortably sleeps up to four guests. Enjoy stylish wooden interiors, a cozy living space with fireplace, a fully-equipped kitchen, and modern bathrooms. Step out onto the private deck with a hot tub and outdoor seating area.",
  },
  {
    name: "004",
    maxCapacity: 4,
    regularPrice: 500,
    discount: 50,
    image: imageUrl + "cabin-004.jpg",
    description:
      "Cabin 004 is a luxurious family retreat for up to four guests. Featuring premium wood design, a gourmet kitchen, elegant living areas, and spa-inspired en-suite bathrooms, this cabin promises a relaxing escape. The private deck with hot tub offers serene forest views.",
  },
  {
    name: "005",
    maxCapacity: 6,
    regularPrice: 350,
    discount: 0,
    image: imageUrl + "cabin-005.jpg",
    description:
      "Cabin 005 is a spacious, cozy getaway for groups or families of up to six. Enjoy warm wooden interiors, a fireplace, a full kitchen, and comfortable bedrooms with en-suite bathrooms. The private deck and hot tub provide the perfect setting to relax in nature.",
  },
  {
    name: "006",
    maxCapacity: 6,
    regularPrice: 800,
    discount: 100,
    image: imageUrl + "cabin-006.jpg",
    description:
      "For a luxurious forest escape, Cabin 006 offers premium comfort for up to six guests. It features elegant wooden finishes, a grand living area with fireplace, a gourmet kitchen, plush bedrooms, and spa-style bathrooms. Enjoy the private deck and hot tub with stunning views.",
  },
  {
    name: "007",
    maxCapacity: 8,
    regularPrice: 600,
    discount: 100,
    image: imageUrl + "cabin-007.jpg",
    description:
      "Designed for larger groups or families, Cabin 007 sleeps up to eight. This spacious retreat includes multiple cozy living areas with fireplaces, a fully-equipped kitchen, comfortable bedrooms with en-suites, and a private deck with a hot tub overlooking beautiful forests and hills.",
  },
  {
    name: "008",
    maxCapacity: 10,
    regularPrice: 1400,
    discount: 0,
    image: imageUrl + "cabin-008.jpg",
    description:
      "Cabin 008 offers the ultimate luxury experience for groups of up to ten. With grand living areas, a chef's kitchen, elegant dining space, and spa-inspired en-suite bedrooms, this cabin is designed for comfort and style. The large deck features a hot tub and seating with breathtaking views.",
  },
];
