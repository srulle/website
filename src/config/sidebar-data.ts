import {
  LayoutPanelLeft,
  LayoutDashboard,
  Mail,
  CheckSquare,
  MessageCircle,
  Calendar,
  Shield,
  AlertTriangle,
  Settings,
  HelpCircle,
  CreditCard,
  LayoutTemplate,
  Users,
  type LucideIcon,
} from "lucide-react"

export type SidebarNavItem = {
  title: string
  url: string
  icon?: LucideIcon
  target?: string
  items?: SidebarNavItem[]
}

export type SidebarNavGroup = {
  label: string
  items: SidebarNavItem[]
}

export const sidebarUser = {
  name: "ShadcnStore",
  email: "store@example.com",
  avatar: "",
}

export const sidebarNavGroups: SidebarNavGroup[] = [
  {
    label: "Dashboards",
    items: [
      {
        title: "Dashboard 1",
        url: "/dashboard",
        icon: LayoutDashboard,
      },
      {
        title: "Dashboard 2",
        url: "/dashboard-2",
        icon: LayoutPanelLeft,
      },
    ],
  },
  {
    label: "Apps",
    items: [
      {
        title: "Mail",
        url: "/mail",
        icon: Mail,
      },
      {
        title: "Tasks",
        url: "/tasks",
        icon: CheckSquare,
      },
      {
        title: "Chat",
        url: "/chat",
        icon: MessageCircle,
      },
      {
        title: "Calendar",
        url: "/calendar",
        icon: Calendar,
      },
      {
        title: "Users",
        url: "/users",
        icon: Users,
      },
    ],
  },
  {
    label: "Pages",
    items: [
      {
        title: "Landing",
        url: "/landing",
        target: "_blank",
        icon: LayoutTemplate,
      },
      {
        title: "Auth Pages",
        url: "#",
        icon: Shield,
        items: [
          {
            title: "Sign In 1",
            url: "/sign-in",
          },
          {
            title: "Sign In 2",
            url: "/sign-in-2",
          },
          {
            title: "Sign In 3",
            url: "/sign-in-3",
          },
          {
            title: "Sign Up 1",
            url: "/sign-up",
          },
          {
            title: "Sign Up 2",
            url: "/sign-up-2",
          },
          {
            title: "Sign Up 3",
            url: "/sign-up-3",
          },
          {
            title: "Forgot Password 1",
            url: "/forgot-password",
          },
          {
            title: "Forgot Password 2",
            url: "/forgot-password-2",
          },
          {
            title: "Forgot Password 3",
            url: "/forgot-password-3",
          },
        ],
      },
      {
        title: "Errors",
        url: "#",
        icon: AlertTriangle,
        items: [
          {
            title: "Unauthorized",
            url: "/errors/unauthorized",
          },
          {
            title: "Forbidden",
            url: "/errors/forbidden",
          },
          {
            title: "Not Found",
            url: "/errors/not-found",
          },
          {
            title: "Internal Server Error",
            url: "/errors/internal-server-error",
          },
          {
            title: "Under Maintenance",
            url: "/errors/under-maintenance",
          },
        ],
      },
      {
        title: "Settings",
        url: "#",
        icon: Settings,
        items: [
          {
            title: "User Settings",
            url: "/settings/user",
          },
          {
            title: "Account Settings",
            url: "/settings/account",
          },
          {
            title: "Plans & Billing",
            url: "/settings/billing",
          },
          {
            title: "Appearance",
            url: "/settings/appearance",
          },
          {
            title: "Notifications",
            url: "/settings/notifications",
          },
          {
            title: "Connections",
            url: "/settings/connections",
          },
        ],
      },
      {
        title: "FAQs",
        url: "/faqs",
        icon: HelpCircle,
      },
      {
        title: "Pricing",
        url: "/pricing",
        icon: CreditCard,
      },
    ],
  },
]
