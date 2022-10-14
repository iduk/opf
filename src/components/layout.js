import * as React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import Appbar from './appbar'
import Seo from './seo'
import { motion, AnimatePresence } from 'framer-motion'
import * as styles from './layout.module.scss'
import classNames from 'classnames/bind'
import Footer from './footer'
const cx = classNames.bind(styles)

const Layout = ({ children, className }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
          description
          siteUrl
        }
      }
    }
  `)
  const pageTitle = data.site.siteMetadata?.title

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        key={data.site.siteMetadata.siteUrl}
        initial={animate.initial}
        animate={animate.animate}
        exit={animate.exit}
        className={cx('layout', `${className}`)}
      >
        <Appbar siteTitle={pageTitle} />
        <main>{children}</main>
        <Footer />
      </motion.div>
    </AnimatePresence>
  )
}

const animate = {
  initial: {
    opacity: 0,
    transition: `transform 1s ease`,
  },
  animate: {
    opacity: 1,
    transition: `transform 1s linear`,
  },
  exit: {
    opacity: 0,
    transition: `transform 1s ease`,
  },
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export const Head = () => <Seo />

export default Layout
