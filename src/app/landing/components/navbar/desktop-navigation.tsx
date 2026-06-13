import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { MegaMenu } from "@/components/landing/mega-menu"
import { NavAnchor } from "@/components/landing/nav-anchor"
import type { LandingNavigationItem } from "@/config/landing-navigation"
type DesktopNavigationProps = {
  items: LandingNavigationItem[]
}

export function DesktopNavigation({ items }: DesktopNavigationProps) {
  return (
    <NavigationMenu className="hidden xl:flex">
      <NavigationMenuList>
        {items.map((item) => (
          <NavigationMenuItem key={item.name}>
            {item.hasMegaMenu ? (
              <>
                <NavigationMenuTrigger className="cursor-pointer bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-transparent hover:text-primary focus:bg-transparent focus:text-primary data-[active]:bg-transparent data-[state=open]:bg-transparent">
                  {item.name}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <MegaMenu />
                </NavigationMenuContent>
              </>
            ) : (
              <NavigationMenuLink
                className="group inline-flex h-10 w-max cursor-pointer items-center justify-center px-4 py-2 text-sm font-medium transition-colors hover:text-primary focus:text-primary focus:outline-none"
                asChild
              >
                <NavAnchor href={item.href}>{item.name}</NavAnchor>
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
