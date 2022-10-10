import React, { useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'

const Toggler = styled.button`
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 10;
  font-size: 1.5rem;
  padding: 1rem;
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
      <span style={{ color: 'var(--gray-9)' }}>✸</span>
    </Toggler>
  )
}

export default ThemeToggle
