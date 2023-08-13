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
        <article>
          <h1>달 가고 밤 가고 눈물도 가고 틔어 올 밝은 하늘 빛난 아침 이르면 향기로운 이슬밭 푸른 언덕을 총총총</h1>
          <h2>달 가고 밤 가고 눈물도 가고 틔어 올 밝은 하늘 빛난 아침 이르면 향기로운 이슬밭 푸른 언덕을 총총총</h2>
          <h3>달 가고 밤 가고 눈물도 가고 틔어 올 밝은 하늘 빛난 아침 이르면 향기로운 이슬밭 푸른 언덕을 총총총</h3>
          <h4>달 가고 밤 가고 눈물도 가고 틔어 올 밝은 하늘 빛난 아침 이르면 향기로운 이슬밭 푸른 언덕을 총총총</h4>
          <h5>달 가고 밤 가고 눈물도 가고 틔어 올 밝은 하늘 빛난 아침 이르면 향기로운 이슬밭 푸른 언덕을 총총총</h5>
          <h6>달 가고 밤 가고 눈물도 가고 틔어 올 밝은 하늘 빛난 아침 이르면 향기로운 이슬밭 푸른 언덕을 총총총</h6>
        </article>
        <article className="g-row">
          <div className="col">1</div>
          <div className="col">2</div>
          <div className="col">3</div>
          <div className="col">4</div>
          <div className="col">5</div>
          <div className="col">6</div>
          <div className="col">7</div>
          <div className="col">8</div>
          <div className="col">9</div>
          <div className="col">10</div>
          <div className="col">11</div>
          <div className="col">12</div>
        </article>
      </section>
    </Layout>
  )
}

export const Head = () => <Seo title="Work" />

export default WorkPage
