'use client';

import { postMenuItem } from './post-menu-item';

export default function CreateItemMenuForm({ menuId }: { menuId: string }) {
  return (
    <>
      <h1 className="text-center text-4xl bg-red-400">Create a menu item</h1>
      <form
        action={async formData => {
          await postMenuItem(menuId, formData);
        }}
        className="p-10 bg-slate-500 flex flex-col gap-2"
      >
        <label htmlFor="item-name">Item name:</label>
        <input id="item-name" name="item-name" />
        <label htmlFor="item-description">Item description (required):</label>
        <textarea id="item-description" name="item-description" />
        <label htmlFor="item-price">Item price:</label>
        <input id="item-price" name="item-price" />
        <input
          type="submit"
          className="border border-pink-800 bg-purple-600 text-white hover:bg-white hover:text-black"
        />
      </form>
    </>
  );
}
