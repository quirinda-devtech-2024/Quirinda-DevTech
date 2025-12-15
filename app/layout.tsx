import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Quirinda DevTech - Engenharia de Software para Produtos Digitais Escaláveis",
  description:
    "Desenvolvemos aplicações, sistemas e infraestruturas modernas, seguras e preparadas para crescer. Tecnologia sólida com foco em Angola e visão global.",
  keywords: [
    "engenharia de software",
    "desenvolvimento web",
    "aplicações escaláveis",
    "infraestrutura cloud",
    "Angola",
    "tecnologia",
  ],
  generator: "Next.js",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "pt_AO",
    siteName: "Quirinda DevTech",
    title: "Quirinda DevTech - Engenharia de Software Escalável",
    description: "Desenvolvemos aplicações, sistemas e infraestruturas modernas, seguras e preparadas para crescer.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
