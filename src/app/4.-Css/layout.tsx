// app/layout.tsx
import "./Style.css"; 
import type { Metadata } from "next"; // Tipado para SEO (title, description)
import { ReactNode } from "react"; // Tipo para representar children como elementos React

export const metadata: Metadata = {
  title: "Mi App Next.js",
  description: "Una plantilla con layout y TypeScript",
};

// Definimos los props del layout: debe recibir children
interface RootLayoutProps {
  children: ReactNode;
}

// El layout principal que envuelve todas las páginas
export default function Layout({ children }: RootLayoutProps) {
  return (
        <div className="container-css">
            {children}
        </div>
  );
}
