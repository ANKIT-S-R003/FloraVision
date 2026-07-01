export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Plants Type", href: "#plants", hasDropdown: true },
  { label: "More", href: "#more" },
  { label: "Contact", href: "#contact" },
];

export type Plant = {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
};

export const TRENDING_PLANTS: Plant[] = [
  {
    id: "trend-1",
    name: "For Your Desks Decorations",
    description:
      "I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!",
    price: "Rs. 599/-",
    image: "/images/plant2.png",
  },
  {
    id: "trend-2",
    name: "For Your Desks Decorations",
    description:
      "The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming",
    price: "Rs. 399/-",
    image: "/images/plant3.png",
  },
];

export const TOP_SELLING_PLANTS: Plant[] = [
  {
    id: "top-1",
    name: "Aglaonema plant",
    description:
      "The Aglaonema plant, commonly known as Chinese Evergreen known for its attractive foliage and ease of care",
    price: "Rs. 300/-",
    image: "/images/plant4.png",
  },
  {
    id: "top-2",
    name: "Plantain Lilies",
    description:
      "Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes, sizes,",
    price: "Rs. 380/-",
    image: "/images/plant5.png",
  },
  {
    id: "top-3",
    name: "Cactus",
    description: "It is known for their ability to thrive in arid environments",
    price: "Rs. 259/-",
    image: "/images/plant6.png",
  },
  {
    id: "top-4",
    name: "Swiss cheese Plant",
    description:
      "It is a popular tropical houseplant known for its distinctive, perforated leaves",
    price: "Rs. 400/-",
    image: "/images/plant7.png",
  },
  {
    id: "top-5",
    name: "Sansevieria plant",
    description:
      "It is a popular indoor plant admired for its striking appearance and low-maintenance nature.",
    price: "Rs. 450/-",
    image: "/images/plant8.png",
  },
  {
    id: "top-6",
    name: "Agave plant",
    description:
      "The Agave plant is a genus of succulent plants known for their striking rosette of thick, fleshy leaves and architectural forms.",
    price: "Rs. 359/-",
    image: "/images/plant9.png",
  },
];

export type Review = {
  id: string;
  name: string;
  rating: number;
  text: string;
};

export const REVIEWS: Review[] = [
  {
    id: "rev-1",
    name: "Shelly Russel",
    rating: 4.5,
    text: "Just got my hands on some absolutely awesome plants, and I couldn't be happier!",
  },
  {
    id: "rev-2",
    name: "Lula Rolfson",
    rating: 4.5,
    text: "Each one has its own unique charm and personality, and they've already started brightening up my space. The vibrant colors and fresh greenery make such a huge difference in my home.",
  },
  {
    id: "rev-3",
    name: "Carol Huels",
    rating: 4.5,
    text: "It's like bringing a little piece of nature indoors. Definitely worth the investment—my plant collection has never looked better!",
  },
];

export const FOOTER_LINKS = {
  quickLinks: [
    { label: "Home", href: "#home" },
    { label: "Type's Of plant's", href: "#plants" },
    { label: "Contact", href: "#contact" },
    { label: "Privacy", href: "#privacy" },
  ],
};
