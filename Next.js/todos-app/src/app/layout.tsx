import "./globals.css";
import Navbar from "@/components/Navbar";
import Providers from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-gray-100">
        <Providers>
          <div className="flex min-h-screen">
            <Navbar />
            <main className="flex-1 p-6">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
