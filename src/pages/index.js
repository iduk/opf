import * as React from 'react'
import { graphql, Link } from 'gatsby'
// import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import * as styles from './index.module.scss'
import classNames from 'classnames/bind'
import indexData from '../api/indexData.json'
import { StaticImage } from 'gatsby-plugin-image'
const cx = classNames.bind(styles)

const IndexPage = ({ data }) => {
  // const image = data.all.edges.node

  return (
    <Layout className={cx('index')}>
      {/* intro */}
      <section>
        <Intro />
      </section>

      {/* we work */}
      <section className={cx('section', 'work')}>
        <div className="row">
          <div className="col-12 col-lg-6 px-0">
            <div className={cx('filmWrap')}>
              <ul className={cx('film')}>
                <li className={cx('film__item')}>
                  <StaticImage
                    src="https://loremflickr.com/800/1200/texture"
                    alt="Project Image"
                  />
                  <StaticImage
                    src="https://loremflickr.com/800/1000/art"
                    alt="Project Image"
                  />
                  <StaticImage
                    src="https://loremflickr.com/960/1200/texture"
                    alt="Project Image"
                  />
                </li>
                <li className={cx('film__item')}>
                  <StaticImage
                    src="https://source.unsplash.com/800x1000/?art"
                    alt="Project Image"
                  />
                  <StaticImage
                    src="https://source.unsplash.com/800x1200/?art"
                    alt="Project Image"
                  />
                  <StaticImage
                    src="https://source.unsplash.com/800x900/?textures"
                    alt="Project Image"
                  />
                  <StaticImage
                    src="https://source.unsplash.com/800x650/?textures"
                    alt="Project Image"
                  />
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-lg-6 px-0">
            <article className={cx('workContent')}>
              <div>
                <h1>
                  Creative Agency <br />
                  for the everything
                </h1>
                <p className="fw-bolder mb-1">커리어의 기회를 만들어주는곳</p>
                <p>
                  오픈플로어는 수천개의 채용공고 및 아웃소싱 프로젝트 경험을
                  통해 데이터 기반 인공지능 기술을 연구하고, 이를 활용한 응용
                  서비스 및 솔루션을 개발합니다. 기술에 대한 이해를 기반으로,
                  다양한 비즈니스 영역의 데이터를 만나는 것을 환영합니다.
                </p>
              </div>
              <div className={cx('badges')}>
                <span className={cx('badge')}>Consulting</span>
                <span className={cx('badge')}>Transformation</span>
                <span className={cx('badge')}>Strategy</span>
                <span className={cx('badge')}>WebApp</span>
                <span className={cx('badge')}>Platform</span>
                <span className={cx('badge')}>UI/UX</span>
                <span className={cx('badge')}>Technology</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className={cx('section', 'service')}>
        <h1>We Service</h1>
        <div className="row">
          <div className="col-6 col-lg-4">
            <StaticImage
              src="https://loremflickr.com/800/800?random=300"
              alt="."
            />
          </div>
          <div className="col-6 col-lg-4">
            <StaticImage
              src="https://loremflickr.com/800/800?random=400"
              alt="."
            />
          </div>
        </div>

        <div className="row justify-end my-8">
          <div className="col-12 col-lg-6">
            <h2 className={cx('headline', 'mb-4', 'fw-normal')}>
              더 유연하고 더 효율적인 소프트웨어를 개발하는 개인과 팀
            </h2>
            <p>
              작은 개인이 한계를 넘어 다양성의 가치를 인정받고, 개개인의
              성공들이 모여 우리 경제에 분수 효과를 가져오기를 기대합니다.
              수년간의 경험을 바탕으로 스틸 촬영에서 설치에 이르기까지 모든 것을
              제작했습니다. 우리 팀이 처리할 수 없는 너무 크거나 작은 작업은
              없습니다.
            </p>
          </div>
        </div>
      </section>
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
