import {
  Home,
  Taxes,
  Profile,
  Settings,
  Analysis,
  Teach,
} from "../Shared/Icons";
import { paths } from "../Constant";

export const sidebarLink = [
  {
    id: 1,
    title: "All Menus",
    children: [
      { id: 1, title: "Dashboard", path: paths.APPS, icon: Home },
      { id: 2, title: "Analysis", path: paths.ANALYSIS, icon: Analysis },
      { id: 6, title: "Users", path: paths.TEACHER, icon: Teach },
      { id: 3, title: "Transactions", path: paths.INVOICE, icon: Taxes },
      { id: 4, title: "Settings", path: paths.SETTING, icon: Settings },
      { id: 5, title: "My Profile", path: paths.PROFILE, icon: Profile },
    ],
  },
];
