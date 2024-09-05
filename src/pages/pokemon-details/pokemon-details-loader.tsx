export default function PokemonDetailsLoader() {
  return (
    <section
      aria-label="Loading skeleton"
      className="p-2 mt-52 container mx-auto m-auto inset-0 z-10 animate-pulse"
    >
      <div className="flex justify-center gap-14" aria-hidden="true">
        <div>
          <div className="h-11 rounded-full  bg-slate-400 dark:bg-slate-800 w-[92px] mb-3"></div>

          <div className="h-[500px] w-[426px] bg-slate-400 dark:bg-slate-800 rounded-3xl" />
        </div>

        <div className="mt-9">
          <div className="bg-slate-400 dark:bg-slate-800 mb-5 mt-3 h-8 w-36 rounded-xl"></div>

          <div className="flex mb-5 mt-12 gap-3">
            <div className="bg-slate-400 dark:bg-slate-800 h-9 w-28 rounded-full"></div>
            <div className="bg-slate-400 dark:bg-slate-800 h-9 w-28 rounded-full"></div>
          </div>

          <div className="flex mb-5 mt-12 gap-3">
            <div className="bg-slate-400 dark:bg-slate-800 h-8 w-28 rounded-full"></div>
            <div className="bg-slate-400 dark:bg-slate-800 h-8 w-28 rounded-full"></div>
          </div>

          <div className="grid grid-cols-3 gap-y-6 place-content-center gap-x-4 mb-5 mt-11 gap-3 w-[370px] bg-slate-300 dark:bg-slate-700 rounded-xl p-4">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={`loading item ${index}`}
                className="inline-flex justify-center flex-col items-center min-w-24"
              >
                <div className="bg-slate-400 dark:bg-slate-800 size-14 rounded-full"></div>
                <div className="bg-slate-400 dark:bg-slate-800 h-4 w-11 mt-4 rounded-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
