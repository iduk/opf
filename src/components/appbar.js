import * as React from 'react'
import PropTypes from 'prop-types'
import { Link, useStaticQuery, graphql } from 'gatsby'
import * as styles from './appbar.module.scss'
import classNames from 'classnames/bind'
import ThemeToggle from './themeToggle'
import { motion } from 'framer-motion'
import useMediaQuery from '../hooks/useMediaQuery'
const cx = classNames.bind(styles)

const LogoImg = () => {
  return (
    <svg
      className={cx('logoSvg')}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 139.23 118.35"
    >
      <path
        className={cx('cls-1')}
        d="M134,110.46l-.18-.3L74.01,8.47l-.25-.42-4.15-7.06-4.15,7.06-.25,.42L5.4,110.16s-.05,.07-.07,.11l-.11,.19-.04,.07-4.31,7.32H138.35l-4.35-7.39Zm-69.39-2.61h-31.22l31.22-13.74v13.74Zm0-24.66l-22.05,9.7,22.05-17.64v7.94Zm0-20.74l-36.94,29.56L64.61,29.21V62.45Zm10,45.4v-13.74l31.22,13.74h-31.22Zm0-24.66V29.21l42.84,72.82-42.84-18.84Z"
      />
    </svg>
  )
}

const Appbar = ({ siteTitle }) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const isSmall = useMediaQuery('(max-width: 767px)')

  const variants = isSmall
    ? {
        open: {
          x: 0,
          transition: {
            type: 'spring',
            damping: 10,
          },
        },
        closed: {
          x: '100%',
          transition: {
            delay: 0.5,
            type: 'spring',
            damping: 40,
          },
        },
      }
    : {
        open: null,
        closed: null,
      }

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
          <LogoImg />
        </Link>

        <button
          onClick={() => setIsOpen(isOpen => !isOpen)}
          className={cx('navTrigger')}
        >
          <div className={cx('hamburger', `${isOpen ? 'active' : ''}`)}>
            <span className={cx('hamburger__bar')}></span>
            <span className={cx('hamburger__bar')}></span>
            <span className={cx('hamburger__bar')}></span>
          </div>
        </button>

        <motion.nav
          initial="hidden"
          animate={isOpen ? 'open' : 'closed'}
          variants={variants}
          className={cx('nav', `${isOpen ? 'active' : ''}`)}
        >
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
        </motion.nav>
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
