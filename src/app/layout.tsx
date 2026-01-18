import type { Metadata } from "next";
import "./globals.css";
import DesktopNavbar from "@/common/layer/DesktopNavbar";
import Footer from "@/common/layer/Footer";
import MobileNavbar from "@/common/layer/MobileNavbar";
import QueryProvider from "@/lib/providers/query-provider";
import DevGuard from "@/common/ui/DevGuard";

export const metadata: Metadata = {
  title: "Relisted — Global Fashion, Rooted in Heritage",
  description:
    "Relisted is a fashion brand born in Nigeria, inspired by the elegance, craftsmanship, and cultural richness of Asia and Europe. Timeless pieces that transcend borders.",
  keywords: ["Relisted", "Fashion", "Heritage", "Luxury", "Global Style"],
  authors: [{ name: "Relisted" }],
  openGraph: {
    title: "Relisted — Global Fashion, Rooted in Heritage",
    description:
      "Relisted is a fashion brand born in Nigeria, inspired by the elegance, craftsmanship, and cultural richness of Asia and Europe.",
    url: "https://www.relisted.com",
    siteName: "Relisted",
    images: [
      {
        url: "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1764859037/Gemini_Generated_Image_co76dbco76dbco76_ufwf1e.png",
        secureUrl:
          "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1764859037/Gemini_Generated_Image_co76dbco76dbco76_ufwf1e.png",
        width: 1200,
        height: 630,
        alt: "Relisted",
      },
      {
        url: "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1764859022/Screenshot_2025-11-23_182146_nrhuzi.png",
        secureUrl:
          "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1764859022/Screenshot_2025-11-23_182146_nrhuzi.png",
        width: 512,
        height: 512,
        type: "image/png",
        alt: "Relisted Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Relisted — Global Fashion, Rooted in Heritage",
    description:
      "Relisted is a fashion brand born in Nigeria, inspired by the elegance, craftsmanship, and cultural richness of Asia and Europe.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=" ">
        {" "}
        <DevGuard>
          <QueryProvider>
            <DesktopNavbar />
            <MobileNavbar />
            {children}
            <Footer />
          </QueryProvider>
        </DevGuard>
      </body>
    </html>
  );
}
