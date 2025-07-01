// app/layout.tsx
// import "./globals.css"; // Importamos los estilos globales esta linea solo se usa si es el layout principal de maayor gerarquia
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
  
    <>
     <html lang="es">
      <head />
      <body className="bg-gray-100 text-gray-900">
        <main className="max-w-5xl mx-auto p-4">{children}</main>
      </body>
    </html> 


    {/* Cuando se requiere un layout principal de la aplicacion se utiliza este html de lo contrario 
        utilizamos un simple div englovando el children, junto con los elementos que se pondran dentro
        de este nuevo segmento como sidebar persinalizados.
     <html lang="es">
      <head />
      <body className="bg-gray-100 text-gray-900">
        { Aquí podrías incluir navbar, footer, etc. }
        <main className="max-w-5xl mx-auto p-4">{children}</main>
      </body>
    </html>
    
    aqui declaramos la otra opcion para la plantilla la cual no es para layouts principales

        <div>
            {children}
        </div>
    */
    }
    </>
  );
}
