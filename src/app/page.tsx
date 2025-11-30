import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
          knew
        </h1>

        <div className="mt-8 w-full">
          <textarea
            className="w-full h-64 p-4 text-lg bg-zinc-100 dark:bg-zinc-900 rounded-lg focus:ring-2 focus:ring-zinc-400 focus:outline-none"
            placeholder="Write something..."
          />
          <button className="mt-4 px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700">
            Save
          </button>
        </div>
      </main>
    </div>
  );
}
