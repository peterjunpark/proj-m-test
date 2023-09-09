'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function postMenu(formData: FormData) {
  const name = formData.get('menu-name') as string;
  const description = formData.get('menu-description') as string;

  try {
    const menu = await prisma.menu.create({
      data: {
        name,
        description,
      },
    });
    revalidatePath('/menu');
    return menu;
  } catch (err) {
    return err;
  }
}
