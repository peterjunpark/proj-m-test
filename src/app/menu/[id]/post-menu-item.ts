'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function postMenuItem(menuId: string, formData: FormData) {
  const name = formData.get('item-name') as string;
  const description = formData.get('item-description') as string;
  const price = Number(formData.get('item-price'));

  console.log(price);

  try {
    const menuItem = await prisma.menuItem.create({
      data: {
        menuId: menuId,
        name,
        description,
        price,
      },
    });
    revalidatePath('/menu/[id]');

    return menuItem;
  } catch (err) {
    return err;
  }
}
