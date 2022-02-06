import React from "react";
import Image from "next/image";
import HeaderIcon from "../components/HeaderIcon";
import logoPic from "../public/icon.png";
import { useSession, signOut } from "next-auth/react";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import {
  SearchIcon,
  FlagIcon,
  PlayIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

function Header() {
  const { data: session } = useSession();
  return (
    <div className="flex items-center sticky top-0 z-50 bg-white p-2 lg:px-5 shadow-md">
      {/* Left */}
      <div className="flex items-center">
        {/* Composant de Next.js incluant du lazy loading, optimisations/perf et une version WebP de l'image*/}
        <Image src={logoPic} width={50} height={50} layout="fixed" />
        <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
          <SearchIcon className="h-6 text-gray-600" />
          <input
            className="hidden md:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink"
            type="text"
            placeholder="Rechercher..."
          />
        </div>
      </div>
      {/* Center */}
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
          {/* Création d'un composant permettant d'appliquer le même CSS à toutes les icones et permet une réutilisation facile */}
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>
      {/* Right */}
      <div className="flex items-center sm:space-x-2 justify-end">
        {/* Profile Pic */}
        <Image
          onClick={signOut}
          className="rounded-full cursor-pointer"
          src={session.user.image}
          width={40}
          height={40}
          layout="fixed"
        />
        <p className="font-semibold pr-3 whitespace-nowrap">{session.user.name}</p>
        {/* Création d'une classe plutôt qu'un composant pour les icones (voir icones plus haut) */}
        <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </div>
  );
}

export default Header;
