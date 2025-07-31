import "./globals.css";

export const metadata = {
  title: "Quiz App",
  description: "Take this quiz and see your score!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
