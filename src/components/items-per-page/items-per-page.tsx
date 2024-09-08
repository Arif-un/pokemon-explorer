interface ItemsPerPageProps {
  itemsPerPage: number
  onItemsPerPageChange: (itemsPerPage: number) => void
}

export const ITEM_PER_PAGE_OPTIONS = [20, 50, 100]

export default function ItemsPerPage({ itemsPerPage, onItemsPerPageChange }: ItemsPerPageProps) {
  const handleItemsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onItemsPerPageChange(Number(e.target.value))
  }

  return (
    <label className="flex items-center gap-3 text-slate-500">
      <span>Showing</span>
      <select
        value={itemsPerPage}
        onChange={handleItemsPerPageChange}
        name="items-per-page"
        className="p-2 rounded-full cursor-pointer border border-slate-200 bg-slate-50 text-slate-800 focus:outline-none focus-visible:ring-2 ring-yellow-500  dark:bg-slate-900 dark:text-slate-100 dark:border-slate-800"
      >
        {ITEM_PER_PAGE_OPTIONS.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <span>items per page</span>
    </label>
  )
}
