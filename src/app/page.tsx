"use client";

import { useState } from "react";

export default function Home() {
  const [note, setNote] = useState("");

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-3xl flex-col items-start py-16 px-8 bg-white dark:bg-black sm:py-32">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
          knew
        </h1>

        <div className="mt-12 w-full">
          <textarea
            className="w-full h-64 p-4 text-lg bg-zinc-100 dark:bg-zinc-900 rounded-lg focus:ring-2 focus:ring-zinc-400 focus:outline-none transition-colors"
            placeholder="Write something..."
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
          <button className="mt-4 px-6 py-2 bg-zinc-900 text-white rounded-lg font-semibold hover:bg-zinc-700 transition-colors">
            Save
          </button>
        </div>
      </main>
    </div>
  );
}
