import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

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
