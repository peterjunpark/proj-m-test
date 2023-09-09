import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="mb-10 text-4xl">Welcome, MINSU OGAY</h1>
      <Link
        href="/menu"
        className="text-4xl border border-blue-700 hover:text-green-950 hover:rotate-180 hover:bg-pink-300"
      >
        Create a menu
      </Link>
    </main>
  );
}
