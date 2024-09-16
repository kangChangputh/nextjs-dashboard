import SideNav from "@/app/ui/dashboard/sidenav";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Acme Dashboard",
    description: "The official Next.js Course Dashboard, built with App Router",
    metadataBase: new URL("https://nexxt-learn-dashboard.vercel.sh"),
}

export default function Layout({ children }: { children: React.ReactNode}) {
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-non md:w-64">
                <SideNav />
            </div>
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
        </div>
    );
}

export const experimental_ppr = true;