import React from 'react';
import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import CreateMenuForm from '@/app/menu/create-menu-form';

export default async function CreateMenu() {
  const menus = await prisma.menu.findMany();
  return (
    <div className="flex m-10 flex-col">
      <CreateMenuForm />
      <h1 className="text-center text-3xl">Your menus</h1>
      {menus.map((menu, idx) => (
        <Link
          href={`/menu/${menu.id}`}
          key={idx}
          className="m-2 p-2 border border-green-800 hover:bg-orange-300"
        >
          <h2>{menu.name}</h2>
          {menu.description && <p>{menu.description}</p>}
          <small>menu_id: {menu.id}</small>
        </Link>
      ))}
    </div>
  );
}
