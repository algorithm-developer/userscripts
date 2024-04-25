// Dependencies импортлох
import "@/app/globals.css";
import { Inter as Sans } from "next/font/google";

// Component импортлох
import { cn } from "@/app/libraries/utilities";
import { ThemeProvider } from "@/app/components/providers/theme-provider";

// Font тохируулах
const font = Sans({
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  variable: "--font-sans",
});

// Мастер metadata тохируулах
export const metadata = {
  generator: "NextJS v14.1.3, TailwindCSS v3.3.0",
  title: "userscript цуглуулга",
  description:
    "Tampermonkey, Greasemonkey, Violentmonkey-д зориулсан usercript",
  creator: "algorithm",
  publisher: "algorithm",
  authors: {
    name: "userscripts",
    url: "https://userscripts-algorithm.vercel.app/",
  },
};

// Root Layout эхлэл
export default function RootLayout({ children }) {
  return (
    // HTML эхлэл
    <html lang="en">
      {/* Body эхлэл */}
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          font.variable
        )}
      >
        {/* ThemeProvider эхлэл */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Child component эхлэл */}
          {children}
          {/* Child component төгсгөл */}
        </ThemeProvider>
        {/* ThemeProvider төгсгөл */}
      </body>
      {/* Body төгсгөл */}
    </html>
    // HTML төгсгөл
  );
}
// Root Layout төгсгөл
