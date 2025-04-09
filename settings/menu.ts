
import { MenuOption } from "@/components/nav/main-menu";
import { t } from "@/scripts/translate";

export const menuExhibitors: MenuOption[] = [
  {
    title: t("navigation.menu.exhibitors.exhibit.title"),
    href: "/exhibit",
    description: t("navigation.menu.exhibitors.exhibit.description"),
  },
  {
    title: t("navigation.menu.exhibitors.premium.title"),
    href: "/premium",
    description: t("navigation.menu.exhibitors.premium.description"),
  },
];
