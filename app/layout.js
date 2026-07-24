
import "./globals.css";
import PublicLayout from "./(public)/layout";

export const metadata = {
  title: "Pure Physio Therapy",
  description: "Physiotherapy & Rehabilitation Website",
};

// Future: Replace with NextAuth / JWT / Laravel API
async function getCurrentUser() {
  return {
    role: "guest", // guest | customer | admin
  };
}

export default async function RootLayout({ children }) {
  const user = await getCurrentUser();

  return (
    <html lang="en">
      <body>
        <PublicLayout>{children}</PublicLayout>
      </body>
    </html>
  );
}
