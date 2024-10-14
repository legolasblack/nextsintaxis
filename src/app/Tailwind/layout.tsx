// layout ruta tailwind
'use client'

import { SidebarItem } from "@/components/sidebar/Sidebar";
import Sidebar from "@/components/sidebar/Sidebar";


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="flex flex-row">
            <Sidebar>
                <SidebarItem text={"Dashboard"} active alert={undefined} />
                <SidebarItem text={"Tablero de Incidencias"} />
                <SidebarItem text={"Incidencias"} />
                <SidebarItem text={"Configuraciones"} />
            </Sidebar>
            {children}
        </main>
    );
}