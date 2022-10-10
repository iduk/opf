import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import * as styles from './work.module.scss'
import classNames from 'classnames/bind'
import Seo from '../components/seo'
const cx = classNames.bind(styles)

const WorkPage = () => {
  return (
    <Layout className={cx('workPage')}>
      <section className="fluid">
        <div className="g-row" style={{ minHeight: 400 }}>
          <div className="col-12">hahaha</div>
        </div>
      </section>
    </Layout>
  )
}

export const Head = () => <Seo title="Work" />

export default WorkPage
