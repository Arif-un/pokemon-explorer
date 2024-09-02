import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import ItemsPerPage from './items-per-page'

describe('ItemsPerPage Component', () => {
  it('renders correctly and matches the snapshot', () => {
    const { asFragment } = render(<ItemsPerPage itemsPerPage={20} onItemsPerPageChange={() => void 0} />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('calls onItemsPerPageChange with the correct value when a new option is selected', () => {
    const mockOnItemsPerPageChange = vi.fn()
    render(<ItemsPerPage itemsPerPage={20} onItemsPerPageChange={mockOnItemsPerPageChange} />)

    const selectElement = screen.getByRole('combobox')

    fireEvent.change(selectElement, { target: { value: '50' } })

    expect(mockOnItemsPerPageChange).toHaveBeenCalledWith(50)
  })

  it('renders with the correct initial value', () => {
    render(<ItemsPerPage itemsPerPage={50} onItemsPerPageChange={() => void 0} />)
    const selectElement = screen.getByRole('combobox')
    expect(selectElement).toHaveValue('50')
  })
})
