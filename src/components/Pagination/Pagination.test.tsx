import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import Pagination from './Pagination'

describe('Pagination Component', () => {
  const defaultProps = {
    totalItems: 100,
    itemsPerPage: 10,
    offset: 0,
    onOffsetChange: vi.fn()
  }

  it('renders the correct number of page buttons when total pages <= 5', () => {
    const { asFragment } = render(<Pagination {...defaultProps} totalItems={40} />) // 4 pages total

    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('2')).toBeInTheDocument()
    expect(screen.getByText('3')).toBeInTheDocument()
    expect(screen.getByText('4')).toBeInTheDocument()
    expect(screen.queryByTitle('More pages')).not.toBeInTheDocument()
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders ellipsis and correct page numbers when currentPage <= 3', () => {
    const { asFragment } = render(<Pagination {...defaultProps} offset={0} />) // currentPage = 1

    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('2')).toBeInTheDocument()
    expect(screen.getByText('3')).toBeInTheDocument()
    expect(screen.getByTitle('More pages')).toBeInTheDocument()
    expect(screen.getByText('10')).toBeInTheDocument()
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders ellipsis and correct page numbers when currentPage >= totalPages - 2', () => {
    const { asFragment } = render(<Pagination {...defaultProps} offset={90} />) // currentPage = 10

    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByTitle('More pages')).toBeInTheDocument()
    expect(screen.getByText('8')).toBeInTheDocument()
    expect(screen.getByText('9')).toBeInTheDocument()
    expect(screen.getByText('10')).toBeInTheDocument()
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders ellipsis on both sides when currentPage is in the middle', () => {
    const { asFragment } = render(<Pagination {...defaultProps} offset={50} />) // currentPage = 6

    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.queryAllByTitle('More pages')).toHaveLength(2)
    expect(screen.getByText('5')).toBeInTheDocument()
    expect(screen.getByText('6')).toBeInTheDocument()
    expect(screen.getByText('7')).toBeInTheDocument()
    expect(screen.getByText('10')).toBeInTheDocument()
    expect(asFragment()).toMatchSnapshot()
  })

  it('calls onOffsetChange with correct offset when a page button is clicked', () => {
    const { asFragment } = render(<Pagination {...defaultProps} />)

    fireEvent.click(screen.getByText('3'))
    expect(defaultProps.onOffsetChange).toHaveBeenCalledWith(20) // Page 3 -> Offset 20
    expect(asFragment()).toMatchSnapshot()
  })

  it('calls onOffsetChange with correct offset when next button is clicked', () => {
    const { asFragment } = render(<Pagination {...defaultProps} />)

    fireEvent.click(screen.getByText(/Next/i))
    expect(defaultProps.onOffsetChange).toHaveBeenCalledWith(10) // Offset should increase by 10
    expect(asFragment()).toMatchSnapshot()
  })

  it('calls onOffsetChange with correct offset when previous button is clicked', () => {
    const { asFragment } = render(<Pagination {...defaultProps} offset={30} />) // currentPage = 4

    fireEvent.click(screen.getByLabelText(/Previous/i))
    expect(defaultProps.onOffsetChange).toHaveBeenCalledWith(20) // Offset should decrease by 10
    expect(asFragment()).toMatchSnapshot()
  })

  it('disables the previous button when on the first page', () => {
    render(<Pagination {...defaultProps} />) // currentPage = 1

    expect(screen.getByLabelText('Previous page')).toBeDisabled()
  })

  it('disables the next button when on the last page', () => {
    const { asFragment } = render(<Pagination {...defaultProps} offset={90} />) // currentPage = 10

    expect(screen.getByLabelText('Next page')).toBeDisabled()
    expect(asFragment()).toMatchSnapshot()
  })
})
