import "../globals.css";

export const metadata = {
  title: "Movie Search",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`mx-12 my-12 bg-[#222831]`}>{children}</body>
    </html>
  );
}
