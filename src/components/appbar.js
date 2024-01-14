import * as React from 'react'
import PropTypes from 'prop-types'
import { Link, useStaticQuery, graphql } from 'gatsby'
import * as styles from './appbar.module.scss'
import classNames from 'classnames/bind'
import ThemeToggle from './themeToggle'
import { motion, useScroll, useSpring } from 'framer-motion'
import useMediaQuery from '../hooks/useMediaQuery'
import { useEffect } from 'react'
const cx = classNames.bind(styles)
import smoothscroll from 'smoothscroll-polyfill';
smoothscroll.polyfill();

const LogoImg = () => {
  return (
    <svg
      className={cx('logoSvg')}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 114 96"
    >
      <path className={cx('cls-1')} d="M56.99,92.89V7.89" />
      <path
        className={cx('cls-1')}
        d="M106.99 92.89 56.99 70.89 6.99 92.89 56.99 52.89"
      />
      <path
        className={cx('cls-1')}
        d="M56.99 7.89 106.99 92.89 6.99 92.89 56.99 7.89z"
      />
    </svg>
  )
}

const Appbar = ({ siteTitle }) => {
  const { scrollYProgress } = useScroll()
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

  const handleClickScroll = () => {
    console.log('zzz')
    window.scrollTo({
      top: document.offsetTop,
      left: 0,
      behavior: 'smooth',
    })
  }

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001,
  })

  return (
    <>
      <motion.div className={cx('progressBar')} style={{ scaleX }} />
      <header>
        <ThemeToggle />
        <div className={cx('navbar')}>
          <div className="container">
            <Link to={'/'} className={cx('logo')} title={siteTitle} tabIndex="0">
              <span className={cx('symbol')}><LogoImg /></span>
              {/* <span className={cx('logoText', 'h6')}>Openfloor</span> */}
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
              // animate={isOpen ? 'open' : 'closed'}
              // variants={variants}
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
                      onClick={() => handleClickScroll(link.url)}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.nav>
          </div>
        </div>
      </header>
    </>
  )
}

Appbar.propTypes = {
  siteTitle: PropTypes.string,
}

Appbar.defaultProps = {
  siteTitle: ``,
}

export default Appbar
