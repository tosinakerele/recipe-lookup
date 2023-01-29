"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const path = usePathname().split("/");
  const currentPath = path[2];
  const recipeID = path[3];

  return (
    <div className="bg-slate-300 py-5 px-3 flex items-center justify-between">
      <div>
        <Link href="/">
          <h1 className="max-sm:text-3xl text-blue-700 font-bold text-5xl">
            Foode
          </h1>
        </Link>
      </div>
      {path && currentPath && (
        <Link
          className="rounded text-white p-2 bg-blue-500 font-bold"
          href={recipeID ? `/types/${currentPath}` : "/types"}
        >
          &larr; Back to {recipeID ? `${currentPath} recipes` : "cuisine types"}
        </Link>
      )}
    </div>
  );
};

export default Header;
