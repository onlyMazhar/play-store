"use client"
import Link from "next/link";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "./ui/navigation-menu";
import Image from "next/image";
import ModeToggle from "./Mode Toggle";
import { HeartHandshake } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { usePathname } from "next/navigation";

const NavbarLarge = () => {
    const pathname = usePathname();

    const component: { name: string, href: string, description: string }[] = [
        {
            name: "Home",
            href: "/",
            description: "Home page"
        },

        {
            name: "Apps",
            href: "/apps",
            description: "Browse all the available apps"
        },
        {
            name: "My Installations",
            href: "/installations",
            description: "View your installed apps"
        }

    ]
    return (
        <nav className="container mx-auto flex  min-h-18 justify-between items-center  ">

            {/* === Logo === */}
            <div>
                <Link href="/" className="flex items-center gap-2">
                    <Image src="/logo.png" alt="Logo" width={52} height={52} />
                </Link>
            </div>

            {/* === Nav Items === */}
            <NavigationMenu>
                <NavigationMenuList className="space-x-8">

                    {component.map((item, index) => (
                        
                        <NavigationMenuItem key={index}>
                            <NavigationMenuLink className={` px-4  ${pathname === item.href && 'bg-primary text-muted hover:bg-primary'}`} href={item.href}>
                                {item.name}
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
            </NavigationMenu>

            {/* === Toggle === */}
            <div className="space-x-2 flex items-center relative">
                <ModeToggle />
                <div className="border dark:border-gray-700 border-gray-300 h-6" ></div>
                <Tooltip>
                    <TooltipTrigger render={<Link href="/">  <HeartHandshake size={20} />  </Link>} />
                    <TooltipContent>
                        <p>Contribute</p>
                    </TooltipContent>
                </Tooltip>
            </div>
       
        </nav >
    );
};

export default NavbarLarge;