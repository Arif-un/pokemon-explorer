import { Fragment, useMemo } from 'react'

import { ChevronLeft, ChevronRight, Ellipsis } from 'lucide-react'

import Button from '@/components/ui/button'

interface PaginationProps {
  totalItems: number
  itemsPerPage: number
  offset: number
  onOffsetChange: (offset: number) => void
}

const range = (start: number, end: number) =>
  Array.from({ length: end - start + 1 }, (_, i) => start + i)

export default function Pagination({
  totalItems,
  itemsPerPage,
  offset,
  onOffsetChange
}: PaginationProps) {
  const totalPages = Math.ceil(totalItems / itemsPerPage)
  const currentPage = Math.floor(offset / itemsPerPage) + 1

  const getPageNumbers = useMemo(() => {
    if (totalPages <= 5) return range(1, totalPages)

    const nearStart = currentPage <= 3
    const nearEnd = currentPage >= totalPages - 2

    if (nearStart) return [...range(1, 3), '...', totalPages]
    if (nearEnd) return [1, '...', ...range(totalPages - 2, totalPages)]

    return [1, '...', ...range(currentPage - 1, currentPage + 1), '...', totalPages]
  }, [currentPage, totalPages])

  const handlePageChange = (page: number | string) => {
    if (typeof page !== 'number') return

    const newOffset = (page - 1) * itemsPerPage
    onOffsetChange(newOffset)
  }

  return (
    <div className="flex items-center justify-center space-x-2 sm:flex-wrap sm:gap-y-3">
      <Button
        rounded
        onClick={() => onOffsetChange(Math.max(0, offset - itemsPerPage))}
        disabled={offset === 0}
        aria-label="Previous page"
      >
        <ChevronLeft size={20} /> Prev
      </Button>

      {getPageNumbers.map((page, index) => (
        <Fragment key={index}>
          {page === '...' ? (
            <span title="More pages" className="px-2 dark:text-slate-100">
              <Ellipsis />
            </span>
          ) : (
            <Button
              onClick={() => handlePageChange(page)}
              rounded
              className={page === currentPage ? 'font-semibold' : ''}
              variant={currentPage === page ? 'primary' : 'default'}
            >
              {page}
            </Button>
          )}
        </Fragment>
      ))}

      <Button
        rounded
        onClick={() => onOffsetChange(Math.min((totalPages - 1) * itemsPerPage, offset + itemsPerPage))}
        disabled={offset + itemsPerPage >= totalItems}
        aria-label="Next page"
      >
        Next <ChevronRight size={20} />
      </Button>
    </div>
  )
}
