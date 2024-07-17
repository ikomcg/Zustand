"use client";

import { useCounterStore } from "@/stores/counter-store";

export default function Home() {
   const { count, incrementCount, decrementCount } = useCounterStore(
      (state) => state
   );

   return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
         <div>
            Count: {count}
            <hr />
            <button type="button" onClick={() => void incrementCount()}>
               Increment Count
            </button>
            <button type="button" onClick={() => void decrementCount()}>
               Decrement Count
            </button>
         </div>
      </main>
   );
}
