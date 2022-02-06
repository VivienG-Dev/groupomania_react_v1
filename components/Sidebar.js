import React from "react";
import SidebarRow from "./SidebarRow";
import { useSession } from "next-auth/react";
import {
  ChevronDownIcon,
  ShoppingBagIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import {
  CalendarIcon,
  ClockIcon,
  DesktopComputerIcon,
  UsersIcon,
} from "@heroicons/react/solid";

function Sidebar() {
  const { data: session } = useSession();

  return (
    <div className="p-2 mt-5 max-w[600px] xl:min-w-[300px]">
      <SidebarRow src={session.user.image} title={session.user.name} />
      
      <SidebarRow Icon={UsersIcon} title="Amis" />
      <SidebarRow Icon={UserGroupIcon} title="Groupes" />
      <SidebarRow Icon={ShoppingBagIcon} title="Marché" />
      <SidebarRow Icon={DesktopComputerIcon} title="Watch" />
      <SidebarRow Icon={CalendarIcon} title="Events" />
      <SidebarRow Icon={ClockIcon} title="Memories" />
      <SidebarRow Icon={ChevronDownIcon} title="See More" />
    </div>
  );
}

export default Sidebar;
