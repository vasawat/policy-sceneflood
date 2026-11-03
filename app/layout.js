import '@mantine/core/styles.css';
import { ColorSchemeScript, MantineProvider, createTheme, mantineHtmlProps } from '@mantine/core';
import "./globals.css";

const theme = createTheme({
  primaryColor: 'blue',
  defaultRadius: 'md',
  fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif',
  headings: { fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif' },
});

export const metadata = {
  title: 'Privacy Policy | SceneFlood',
  description: 'How SceneFlood collects, uses, shares, retains, and protects information.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head><ColorSchemeScript defaultColorScheme="dark" /></head>
      <body><MantineProvider theme={theme} defaultColorScheme="dark">{children}</MantineProvider></body>
    </html>
  );
}
