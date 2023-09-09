import React from 'react';
import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import CreateMenuItemForm from './create-menu-item-form';

/*
Since Server Components render on the server,
you don't need to call a Route Handler from a Server Component to fetch data.
Instead, you can fetch the data directly inside the Server Component.
*/

export default async function Menu({ params }: { params: { id: string } }) {
  const menu = await prisma.menu.findUnique({
    where: {
      id: params.id,
    },
  });
  const menuItems = await prisma.menuItem.findMany({
    where: {
      menuId: params.id,
    },
  });

  return (
    <div className="flex m-10 flex-col">
      <h1>ID: {params.id}</h1>
      <div>Menu name: {menu?.name}</div>
      <div>Menu description: {menu?.description}</div>
      <CreateMenuItemForm menuId={params.id} />
      {menuItems.map((menuItem, idx) => (
        <Link
          href={`/menu/${menuItem.id}`}
          key={idx}
          className="m-2 p-2 border border-green-800 hover:bg-orange-300"
        >
          <h2>{menuItem.name}</h2>
          <h3>${menuItem.price}</h3>
          {menuItem.description && <p>{menuItem.description}</p>}
          <small>menu_id: {menuItem.id}</small>
        </Link>
      ))}
    </div>
  );
}
