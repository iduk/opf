import React, { useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'

const Toggler = styled.button`
  position: fixed;
  bottom: 2rem;
  left: 2rem;
  z-index: 10;
`

const ThemeToggle = () => {
  const [theme, setTheme] = useState(null)

  const toggleTheme = useCallback(() => {
    const nextTheme = theme === 'light' ? 'dark' : 'light'
    document.body.setAttribute('data-theme', nextTheme)

    setTheme(nextTheme)
    window.__setPreferredTheme(nextTheme)
  }, [theme])

  useEffect(() => {
    if (typeof window === `undefined`) {
      setTheme(window.__theme)
    }
    window.__onThemeChange = newTheme => {
      setTheme(newTheme)
    }
  }, [])

  return (
    <Toggler onClick={toggleTheme} tabIndex="-1">
      {theme === 'dark' ? 'Light Mode 🌈' : 'Dark Mode 🌙'}
    </Toggler>
  )
}

export default ThemeToggle
