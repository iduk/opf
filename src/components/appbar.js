import * as React from 'react'
import PropTypes from 'prop-types'
import { Link, useStaticQuery, graphql } from 'gatsby'
import * as styles from './appbar.module.scss'
import classNames from 'classnames/bind'
import ThemeToggle from './themeToggle'

const cx = classNames.bind(styles)

const LogoImg = ({ color }) => {
  return (
    <svg
      id={'logoSvg'}
      width="100%"
      height={'100%'}
      fill="none"
      viewBox="0 0 62 52"
    >
      <path
        d="m31.254 0 30.554 51.865H4.672a2.025 2.025 0 0 1-.535 0H.701l1.75-2.973a2.05 2.05 0 0 1 .251-.426L31.254 0ZM29.11 41.228l-14.462 6.354h14.462v-6.354Zm4.289 0v6.354H47.86l-14.462-6.354Zm0-29.142V36.55l19.443 8.541-19.443-33.005Zm-4.289 20.68-10.523 8.407L29.11 36.55v-3.784Zm0-20.679L12.201 40.789l16.908-13.507V12.087Z"
        fill-rule="nonzero"
        fill={color}
      />
    </svg>
  )
}

const Appbar = ({ siteTitle }) => {
  const [menuOpen, setMenuOpen] = React.useState(false)
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            menuLinks {
              name
              url
            }
          }
        }
      }
    `
  )
  const navLinks = data.site.siteMetadata.menuLinks

  return (
    <header>
      <ThemeToggle />
      <div className={cx('navbar', 'fluid')}>
        <Link to={'/'} className={cx('logo')} title={siteTitle} tabIndex="0">
          <LogoImg color={'var(--gray-9)'} />
        </Link>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={cx('navTrigger', 'btn', 'btn-primary')}
        >
          menu
        </button>

        <nav className={cx('nav', `${menuOpen ? 'open' : ''}`)}>
          <ul className={cx('navList')}>
            {navLinks.map((link, index) => (
              <li key={link.url}>
                <Link
                  className={cx('navLink')}
                  to={link.url}
                  activeClassName={cx('active')}
                  tabIndex={index + 1}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

Appbar.propTypes = {
  siteTitle: PropTypes.string,
}

Appbar.defaultProps = {
  siteTitle: ``,
}

export default Appbar
