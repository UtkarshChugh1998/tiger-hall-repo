/* eslint-disable testing-library/no-unnecessary-act */
import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import App from './App'
import { wait } from '@testing-library/user-event/dist/utils'
import { act } from 'react-dom/test-utils'

test('renders Ebook Tab link', () => {
  render(<App />)
  const linkElement = screen.getByText(/Ebook/i)
  expect(linkElement).toBeInTheDocument()
})
test('renders Podcast Tab link', () => {
  render(<App />)
  const linkElement = screen.getByText(/Podcast/i)
  expect(linkElement).toBeInTheDocument()
})

test('Searching "aditi" for Ebooks should return 2 elements', async () => {
  render(<App />)
  const input = screen.getByRole('input')
  act(() => {
    /* fire events that update state */
    fireEvent.change(input, { target: { value: 'aditi' } })
  })
  await wait(3000)

  const cards = screen.getAllByRole('card')
  expect(cards.length).toEqual(2)
})
