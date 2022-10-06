import * as React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import Appbar from './appbar'
import Seo from './seo'
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
    <div className={cx('layout', `${className}`)}>
      <Appbar siteTitle={pageTitle} />

      <main>{children}</main>

      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export const Head = () => <Seo />

export default Layout
