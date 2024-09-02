interface ItemsPerPageProps {
  itemsPerPage: number
  onItemsPerPageChange: (itemsPerPage: number) => void
}

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
        className="p-2 rounded-full cursor-pointer border border-slate-200 bg-slate-50 text-slate-800 focus-visible:outline-1 outline-blue-500 outline-offset-1 dark:bg-slate-900 dark:text-slate-100 dark:border-slate-800"
      >
        <option value="20">20</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
      <span>items per page</span>
    </label>
  )
}
