// categoryData.ts
export interface Category {
  image: string;
  title: string;
  description: string;
  link: string;
  height: string;
}

export const categories: Category[] = [
  {
    image: "/category/c1.jpg",
    title: "The Dress Edit",
    description: "From chic minis to elegant gowns discover ",
    link: "/shop",
    height: "463px",
  },
  {
    image: "/category/c2.jpg",
    title: "Modern Knitwear",
    description: "Soft textures, sculpted shapes, and cozy sophistication",
    link: "/electronics",
    height: "477px",
  },
  {
    image: "/category/c3.jpg",
    title: "Step in Style",
    description: "Discover footwear designed to make an impression.",
    link: "/shop",
    height: "333px",
  },
  {
    image: "/category/c4.jpg",
    title: "Statement Layers",
    description: "Wrap yourself in luxury designed for timeless comfort.",
    link: "/shop",
    height: "607px",
  },
  {
    image: "/category/c5.jpg",
    title: "The Denim Drop",
    description: "Everyday classics redefined made to move with you",
    link: "/shop",
    height: "414px",
  },
  {
    image: "/category/c6.jpg",
    title: "Finishing Touches",
    description:
      "Complete your look with accessories that elevate your outfit ",
    link: "/shop",
    height: "526px",
  },
];
