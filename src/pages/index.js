import React, { useRef, useEffect } from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import {
  motion,
  useTransform,
  useScroll,
  useAnimation,
  useInView,
  useSpring,
} from 'framer-motion'

import Ibm from '../assets/images/logo_ibm.svg'
import Adobe from '../assets/images/logo_adobe.svg'
import Intel from '../assets/images/logo_intel.svg'
import Amazon from '../assets/images/logo_amazon.svg'
import Cisco from '../assets/images/logo_cisco.svg'
import Netflix from '../assets/images/logo_netflix.svg'
import Oracle from '../assets/images/logo_oracle.svg'
import * as styles from './index.module.scss'
import classNames from 'classnames/bind'
import ParallaxText from '../components/parallaxText'
import RevealContainer from '../components/revealContainer'

const cx = classNames.bind(styles)

const workings = [
  { id: 1, title: 'Human Interface' },
  { id: 2, title: 'MarTech' },
  { id: 3, title: 'Cybersecurity' },
  { id: 4, title: 'WomenInTech' },
  { id: 5, title: 'Tech For Good' },
  { id: 6, title: 'Vertual Reality' },
]
const histories = [
  {
    date: '25 Mar 2022',
    title: '올영 EZ (UX/UI/FRONT/MAINTEANENCE)',
    partner: '(주)CJ올리브영',
    solution: 'LMS',
  },
  {
    date: '22 Aug 2022',
    title: '올리브 라운지 (UX/UI/FRONT/MAINTEANENCE)',
    partner: '(주)CJ올리브영',
    solution: 'LMS',
  },
  {
    date: '04 Sept 2022',
    title: '셀프 체크아웃 (DESIGN)',
    partner: '(주)CJ올리브영',
    solution: 'LMS',
  },
  {
    date: '03 Feb 2022',
    title: 'PDA 2.0 (UX/UI/FRONT/BACKEND/MAINTEANENCE)',
    partner: '(주)CJ올리브영',
    solution: 'LMS',
  },
  {
    date: '30 Jan 2022',
    title: 'SBI 저축은행 개인 뱅킹 (UX/UI/FRONT)',
    partner: 'SBI저축은행',
    solution: 'LMS',
  },
  {
    date: '04 Sept 2022',
    title: '하나 손해 보험 고도화 (FRONT/BACKEND)',
    partner: '하나손해보험',
    solution: 'CRM',
  },
  {
    date: '30 Jan 2022',
    title: '광주은행 개인 뱅킹 / 기업 뱅킹 (FRONT/BACKEND)',
    partner: '광주은행',
    solution: 'LMS',
  },
  {
    date: '04 Sept 2022',
    title: '세탁 O2O 플랫폼 구축 (APP / DESKTOP / WEB / SERVER)',
    partner: '온디맨드랩',
    solution: 'CRM',
  },
  {
    date: '04 Sept 2022',
    title: '배달 O2O 플랫폼 구축 (APP / DESKTOP / WEB / SERVER)',
    partner: '온디맨드랩',
    solution: 'CRM',
  },
  {
    date: '30 Jan 2022',
    title: 'SPC 잠바주스 키오스크 플랫폼 구축 (APP / WEB / SERVER)',
    partner: 'SPC',
    solution: 'APP',
  },
  {
    date: '04 Sept 2022',
    title: '삼성중공업 모바일 무도면 시스템 (APP / SERVER)',
    partner: '삼성중공업',
    solution: 'CRM',
  },
]
const projectList = [
  {
    date: '25 Mar 2022',
    title: 'Design & Human Interface',
  },
  {
    date: '22 Aug 2022',
    title: 'Website admin page redesign',
  },
  {
    date: '04 Sept 2022',
    title: 'Business Platform debt, docs, refactors and stability',
  },
  {
    date: '03 Feb 2022',
    title: 'Web UI kit automation',
  },
  {
    date: '30 Jan 2022',
    title: 'Business Platform debt, docs, refactors and stability',
  },
  {
    date: '04 Sept 2021',
    title: 'Refactors and stability',
  },
]

const partners = [
  { name: Ibm },
  { name: Intel },
  { name: Amazon },
  { name: Cisco },
  { name: Netflix },
  { name: Oracle },
]

function Text({ children, className, style }) {
  const variants = {
    visible: {
      transition: {
        duration: 1,
        staggerChildren: 0.025,
      },
    },
  }

  return (
    <motion.div
      animate={{ x: [-100, 0] }}
      variants={variants}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  )
}

const IndexPage = () => {
  // const ref = useRef(null)

  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ['end end', 'start start'],
  // })

  return (
    <Layout className={cx('index')}>
      <section
        className={cx('fluid', 'stage', 'justify-center', 'text-center')}
      >
        {/* <motion.div
          animate={{ rotateY: 360 }}
          transition={{ ease: 'linear', duration: 7, repeat: Infinity }}
          className={cx('motionTrack')}
        >
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{ ease: 'linear', duration: 15, repeat: Infinity }}
            className={cx('typoCircle')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 382.34 382.35">
              <text
                className={cx('typo')}
                transform="translate(148.5 46.29) rotate(-9.76)"
              >
                <tspan x={0} y={0}>
                  T
                </tspan>
              </text>
              <text
                className={cx('typo')}
                transform="translate(179.9 40.61) rotate(2.27)"
              >
                <tspan x={0} y={0}>
                  E
                </tspan>
              </text>
              <text
                className={cx('typo')}
                transform="translate(211.72 41.4) rotate(14.86)"
              >
                <tspan x={0} y={0}>
                  A
                </tspan>
              </text>
              <text
                className={cx('typo')}
                transform="translate(245.16 49.36) rotate(29.48)"
              >
                <tspan x={0} y={0}>
                  M
                </tspan>
              </text>
              <text
                className={cx('typo')}
                transform="translate(281.66 71.26) rotate(40.12)"
              >
                <tspan x={0} y={0}>
                  {' '}
                </tspan>
              </text>
              <text
                className={cx('typo')}
                transform="translate(292.84 79.1) rotate(49.77)"
              >
                <tspan x={0} y={0}>
                  O
                </tspan>
              </text>
              <text
                className={cx('typo')}
                transform="translate(316.8 107.37) rotate(62.84)"
              >
                <tspan x={0} y={0}>
                  P
                </tspan>
              </text>
              <text
                className={cx('typo')}
                transform="translate(331.63 135.6) rotate(75.04)"
              >
                <tspan x={0} y={0}>
                  E
                </tspan>
              </text>
              <text
                className={cx('typo')}
                transform="translate(340.44 166.18) rotate(88.12)"
              >
                <tspan x={0} y={0}>
                  N
                </tspan>
              </text>
              <text
                className={cx('typo')}
                transform="translate(341.55 203.26) rotate(100.62)"
              >
                <tspan x={0} y={0}>
                  F
                </tspan>
              </text>
              <text
                className={cx('typo')}
                transform="translate(336.41 232.15) rotate(111.86)"
              >
                <tspan x={0} y={0}>
                  L
                </tspan>
              </text>
              <text
                className={cx('typo')}
                transform="translate(326.57 258.83) rotate(124.19)"
              >
                <tspan x={0} y={0}>
                  O
                </tspan>
              </text>
              <text
                className={cx('typo')}
                transform="translate(306.08 289.65) rotate(138.17)"
              >
                <tspan x={0} y={0}>
                  O
                </tspan>
              </text>
              <text
                className={cx('typo')}
                transform="translate(278.62 314.49) rotate(151.7)"
              >
                <tspan x={0} y={0}>
                  R
                </tspan>
              </text>
              <text
                className={cx('typo')}
                transform="translate(247.64 330.42) rotate(160.98)"
              >
                <tspan x={0} y={0}>
                  {''}
                </tspan>
              </text>
              <text
                className={cx('typo')}
                transform="translate(235.02 335.72) rotate(169.78)"
              >
                <tspan x={0} y={0}>
                  T
                </tspan>
              </text>
              <text
                className={cx('typo')}
                transform="translate(203.7 341.65) rotate(-178.2)"
              >
                <tspan x={0} y={0}>
                  E
                </tspan>
              </text>
              <text
                className={cx('typo')}
                transform="translate(171.83 341.11) rotate(-165.59)"
              >
                <tspan x={0} y={0}>
                  A
                </tspan>
              </text>
              <text
                className={cx('typo')}
                transform="translate(138.35 333.43) rotate(-150.99)"
              >
                <tspan x={0} y={0}>
                  M
                </tspan>
              </text>
              <text
                className={cx('typo')}
                transform="translate(101.67 311.82) rotate(-140.34)"
              >
                <tspan x={0} y={0}>
                  {' '}
                </tspan>
              </text>
              <text
                className={cx('typo')}
                transform="translate(90.42 304.07) rotate(-130.69)"
              >
                <tspan x={0} y={0}>
                  O
                </tspan>
              </text>
              <text
                className={cx('typo')}
                transform="translate(66.22 275.98) rotate(-117.62)"
              >
                <tspan x={0} y={0}>
                  P
                </tspan>
              </text>
              <text
                className={cx('typo')}
                transform="translate(51.18 247.89) rotate(-105.43)"
              >
                <tspan x={0} y={0}>
                  E
                </tspan>
              </text>
              <text
                className={cx('typo')}
                transform="translate(42.12 217.37) rotate(-92.34)"
              >
                <tspan x={0} y={0}>
                  N
                </tspan>
              </text>
              <text
                className={cx('typo')}
                transform="translate(40.71 180.29) rotate(-79.84)"
              >
                <tspan x={0} y={0}>
                  F
                </tspan>
              </text>
              <text
                className={cx('typo')}
                transform="translate(45.63 151.37) rotate(-68.6)"
              >
                <tspan x={0} y={0}>
                  L
                </tspan>
              </text>
              <text
                className={cx('typo')}
                transform="translate(55.25 124.59) rotate(-56.26)"
              >
                <tspan x={0} y={0}>
                  O
                </tspan>
              </text>
              <text
                className={cx('typo')}
                transform="translate(75.49 93.63) rotate(-42.29)"
              >
                <tspan x={0} y={0}>
                  O
                </tspan>
              </text>
              <text
                className={cx('typo')}
                transform="translate(102.76 68.56) rotate(-28.75)"
              >
                <tspan x={0} y={0}>
                  R
                </tspan>
              </text>
            </svg>
          </motion.div>
        </motion.div> */}

        <div className="g-row">
          <div className="col-lg-8 offset-lg-2">
            <article className={cx('stageTitle')}>
              <RevealContainer>Openfloor</RevealContainer>
              <RevealContainer>Makes</RevealContainer>
              <RevealContainer>
                Quality
                <span>.</span>
              </RevealContainer>
            </article>
          </div>
        </div>
      </section>

      <section id="whoWeAre" className={cx('section', 'whoWeAre')}>
        <div className="container">
          <article className="g-row">
            <div className={cx('col-12', 'sectionFeature')}>
              <h2 className={cx('featureTitle', 'text-lg')}>who we are</h2>
            </div>
          </article>

          <article className={cx('heading', 'g-row')}>
            <div className="col-lg-6 col-12">
              <h3 className={cx('h1')}>
                service
                <br />
                philosophy
              </h3>
            </div>
            <div className="col-lg-6 col-12 mt-3">
              달 가고 밤 가고 눈물도 가고 틔어 올 밝은 하늘 빛난 아침 이르면
              향기로운 이슬밭 푸른 언덕을 총총총 달려도 와 줄 볼이 고운 나의
              사람. 푸른 산 한나절 구름은 가고 고을 너머 뻐꾸기는 우는데 눈에
              어려 흘러가는 물결 같은 사람 속 아우성쳐 흘러가는 물결 같은 사람
              속에 난 그리노라. 달 가고 밤 가고 눈물도 가고 틔어 올 밝은 하늘
              빛난 아침 이르면 향기로운 이슬밭 푸른 언덕을 총총총 달려도 와 줄
              볼이 고운 나의 사람. 푸른 산 한나절 구름은 가고 고을 너머 뻐꾸기는
              우는데 눈에 어려 흘러가는 물결 같은 사람 속 아우성쳐 흘러가는 물결
              같은 사람 속에 난 그리노라.
            </div>
          </article>
        </div>

        <article className={cx('workingsWrapper')}>
          <div className="container">
            <ul className={cx('workings', 'g-row')}>
              {workings.map(work => (
                <li
                  key={work.id}
                  className={cx('workingsItem', 'col-lg-4', 'col-6', 'px-xs-1')}
                >
                  <Link to={'.'}>
                    <h2 className="h2">{work.title}</h2>
                  </Link>
                </li>
              ))}
            </ul>
            <div className={cx('floatingTypo')}>
              <ParallaxText baseVelocity={-5}>
                Openfloor Makes Quality
              </ParallaxText>
              <ParallaxText baseVelocity={5}>
                Openfloor Makes Quality
              </ParallaxText>

              {/* <ParallaxText baseVelocity={5}>
                Openfloor Makes Quality
              </ParallaxText>
              <ParallaxText baseVelocity={-4}>
                Openfloor Makes Quality
              </ParallaxText> */}
            </div>
          </div>
        </article>
      </section>

      {/* section > Who We Are > Histories */}
      <section className={cx('section', 'historiesWrapper')}>
        <div className="container">
          <article className={cx('heading', 'g-row')}>
            <div className="col-lg-6 col-12">
              <h1 className={cx('h1')}>
                openfloor
                <br />
                Histories
              </h1>
            </div>
            <div className="col-lg-6 col-12 mt-3">
              인공지능(AI), 클라우드, 검색 등 오랜 시간 동안 축적한 오픈플로어
              팀의 기술력과 서비스 경험을 결합하여 기존에 진행하던 사업을 더욱
              속도감 있게 전개하고 신규 성장 동력 확보를 위해 본격적으로
              비즈니스 파트너들과 함께하는 엔터프라이즈 IT 기업을 지향합니다.
            </div>
          </article>
        </div>

        <div className={cx('fluid')}>
          <article className="g-row justify-end">
            <div className="col-12 col-lg-12">
              <ul className={cx('histories')}>
                {histories.map((item, index) => (
                  <li key={index}>
                    <Link to={'#'} className="g-row flex-between align-center">
                      <div className="col-lg-2 col-12">
                        <p>{item.date}</p>
                      </div>
                      <div className="col-lg-6 col-12">
                        <p className="my-2 my-lg-0 h3">{item.title}</p>
                      </div>
                      <div className="col-lg-2 col-6">{item.partner}</div>
                      <div className="col-lg-2 col-6">
                        {item.solution}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </section>

      {/* section >  */}
      <section id="howWeWork" className={cx('section', 'howWeWork')}>
        <div className="container">
          <article className="g-row">
            <div className={cx('col-12', 'sectionFeature')}>
              <h2 className={cx('featureTitle', 'text-lg')}>How We Work</h2>
            </div>
          </article>

          <article className={cx('heading', 'g-row')}>
            <div className="col-lg-6 col-12">
              <h3 className={cx('h1')}>
                Openfloor
                <br />
                Makes Quality
              </h3>
            </div>
            <div className="col-lg-6 col-12 mt-3">
              흐르는 골짜기 스며드는 물소리에 내사 줄줄줄 가슴이 울어라.
              달밤이나 새벽녘 홀로 서서 눈물 어릴 볼이 고운 나의 사람. 푸른 산
              한나절 구름은 가고 고을 너머 뻐꾸기는 우는데 눈에 어려 흘러가는
              물결 같은 사람 속 아우성쳐 흘러가는 물결 같은 사람 속에 난
              그리노라.
            </div>
          </article>
        </div>

        <div className="fluid">
          <article className={cx('projectWrapper')}>
            <ul className={cx('projectList')}>
              {projectList.map((item, index) => (
                <li key={index} className="">
                  <a href="#">{item.title}</a>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      {/* section > partners */}
      <section className={cx('section', 'partnersWrapper')}>
        <div className="container">
          <ul className={cx('g-row', 'justify-center')}>
            {partners.map((item, index) => (
              <li key={index} className="col-lg-2 col-4">
                <div className={cx('partner')}>
                  <img src={item.name} alt={item.name} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
