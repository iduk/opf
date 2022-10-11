import * as React from 'react'
// import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import * as styles from './work.module.scss'
import classNames from 'classnames/bind'
import Seo from '../components/seo'
const cx = classNames.bind(styles)

const WorkPage = () => {
  return (
    <Layout className={cx('workPage')}>
      <section className="fluid">
        <article className="g-row">
          <div className="col col-lg-1">1</div>
          <div className="col col-lg-1">2</div>
          <div className="col col-lg-1">3</div>
          <div className="col col-lg-1">4</div>
          <div className="col col-lg-1">5</div>
          <div className="col col-lg-1">6</div>
          <div className="col col-lg-1">7</div>
          <div className="col col-lg-1">8</div>
          <div className="col col-lg-1">9</div>
          <div className="col col-lg-1">10</div>
          <div className="col col-lg-1">11</div>
          <div className="col col-lg-1">12</div>
        </article>
      </section>
    </Layout>
  )
}

export const Head = () => <Seo title="Work" />

export default WorkPage
