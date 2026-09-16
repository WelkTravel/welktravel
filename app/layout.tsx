import type { Metadata } from 'next';
import { Playfair_Display, Montserrat } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import WhatsAppFlotante from '@/components/WhatsAppFlotante';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['500', '600'],
  variable: '--font-playfair',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-montserrat',
});

const siteUrl = 'https://welktravel.com'; // TODO: reemplazar por el dominio real cuando esté definido

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Welk Travel — Explora sin límites',
    template: '%s — Welk Travel',
  },
  description: 'Vuelos, hoteles, paquetes, cruceros y circuitos turísticos hechos a tu medida.',
  openGraph: {
    title: 'Welk Travel — Explora sin límites',
    description: 'Vuelos, hoteles, paquetes, cruceros y circuitos turísticos hechos a tu medida.',
    url: siteUrl,
    siteName: 'Welk Travel',
    images: ['/logo-principal.png'],
    locale: 'es_CO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Welk Travel — Explora sin límites',
    description: 'Vuelos, hoteles, paquetes, cruceros y circuitos turísticos hechos a tu medida.',
    images: ['/logo-principal.png'],
  },
};

// GTM_ID viene de una variable de entorno pública. Si no está definida, el
// script simplemente no se renderiza — así el sitio nunca se rompe por falta
// de configuración de analítica.
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      {GTM_ID && (
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
      )}
      <body className={`${playfair.variable} ${montserrat.variable}`}>
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}
      {children}
        <WhatsAppFlotante numero="573001234567" />
      </body>
    </html>
  );
}
