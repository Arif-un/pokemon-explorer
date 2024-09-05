import PokeballSkeleton from './pokeball-skeleton'

interface CardSkeletonLoaderProps {
  totalCard?: number
}

export default function CardSkeletonLoader({ totalCard = 1 }: CardSkeletonLoaderProps) {
  return Array.from({ length: totalCard }).map((_, index) => (
    <div
      key={index}
      data-testid="card-skeleton-loader"
      className="w-60 h-[258px] flex justify-center items-center shadow border border-slate-300 text-slate-400 bg-slate-300 dark:bg-slate-800 dark:text-slate-950 dark:border-slate-700 rounded-3xl animate-pulse "
    >
      <PokeballSkeleton />
    </div>
  ))
}
