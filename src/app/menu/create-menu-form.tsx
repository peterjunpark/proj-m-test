'use client';

import { postMenu } from './post-menu';

export default function CreateMenuForm() {
  return (
    <>
      <h1 className="text-center text-4xl bg-red-400">Create a menu</h1>
      <form
        action={async formData => {
          await postMenu(formData);
        }}
        className="p-10 bg-slate-500 flex flex-col gap-2"
      >
        <label htmlFor="menu-name">Menu name:</label>
        <input id="menu-name" name="menu-name" />
        <label htmlFor="menu-description">Menu description (optional):</label>
        <textarea id="menu-description" name="menu-description" />
        <input
          type="submit"
          className="border border-pink-800 bg-purple-600 text-white hover:bg-white hover:text-black"
        />
      </form>
    </>
  );
}
