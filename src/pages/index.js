import * as React from 'react'
import { graphql, Link } from 'gatsby'
// import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import * as styles from './index.module.scss'
import classNames from 'classnames/bind'
import indexData from '../api/indexData.json'
const cx = classNames.bind(styles)

const IndexPage = ({ data }) => {
  // const image = data.all.edges.node

  return (
    <Layout className={cx('index')}>
      <div className="is-fluid">
        <section>
          <Intro />
        </section>
        <section className={cx('section', 'bg-primary', 'mask')}>
          <div className="row">
            <div className="col-12 col-lg-6">
              <h1>We work</h1>
              <p className="fw-bolder mb-1">커리어의 기회를 만들어주는곳</p>
              <p>
                오픈플로어는 수천개의 채용공고 및 아웃소싱 프로젝트 경험을 통해
                데이터 기반 인공지능 기술을 연구하고, 이를 활용한 응용 서비스 및
                솔루션을 개발합니다. 기술에 대한 이해를 기반으로, 다양한
                비즈니스 영역의 데이터를 만나는 것을 환영합니다.
              </p>
            </div>
          </div>

          <div className={cx('badges')}>
            <span className={cx('badge')}>ConsultingDigital</span>
            <span className={cx('badge')}>Transformation</span>
            <span className={cx('badge')}>Strategy</span>
            <span className={cx('badge')}>WebApp</span>
            <span className={cx('badge')}>Platform</span>
            <span className={cx('badge')}>ServiceMind</span>
            <span className={cx('badge')}>technology</span>
          </div>
        </section>

        <section className={cx('section')}>adsfasdf</section>
      </div>
    </Layout>
  )
}

export default IndexPage

function Intro() {
  return (
    <div className={cx('feature')}>
      <div className={cx('feature__header')}>
        <div className={cx('headline', 'text-uppercase')}>
          <Link href="/">
            <a>OPENFLOOR</a>
          </Link>
          <Link href="/">
            <a>Multi-Platform</a>
          </Link>
          <Link href="/">
            <a>Data to Information</a>
          </Link>
          <Link href="/">
            <a>Device Handling</a>
          </Link>
          <Link href="/">
            <a>Everyday Coding</a>
          </Link>
        </div>
        {/* \\ */}

        {/* 2 */}
        <div className="pt-6">
          <p>© New OPENFLOOR 2023 </p>
        </div>
        {/* \\ */}
      </div>
    </div>
  )
}
