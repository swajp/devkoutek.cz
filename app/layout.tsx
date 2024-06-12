import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import DotPattern from "@/components/magicui/dot-pattern";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Discord komunita vývojářů | devkoutek.cz",
  metadataBase: new URL("https://devkoutek.cz"),
  description:
    "Přidej se k nám mezi vývojáře a sdílej své zkušenosti s ostatními. Najdeš zde pomoc, rady a tipy pro vývojáře.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body className={cn("antialiased", inter.className)}>
        <Analytics />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <DotPattern
            width={20}
            height={20}
            cx={1}
            cy={1}
            cr={1}
            className={cn(
              "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
            )}
          />
          <MaxWidthWrapper>
            <Navbar />
            {children}
            <Footer />
          </MaxWidthWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
