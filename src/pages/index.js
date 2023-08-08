import * as React from 'react'
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
import * as styles from './index.module.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

const workings = [
  { id: 1, title: 'Design & Human Interface' },
  { id: 2, title: 'MarTech' },
  { id: 3, title: 'Cybersecurity - Narrow' },
  { id: 4, title: 'WomenInTech' },
  { id: 5, title: 'Tech For Good' },
  { id: 6, title: 'Vertual Reality - VR' },
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
  const ref = React.useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'start start'],
  })
  return (
    <Layout className={cx('index')}>
      <section className={cx('stage', 'fluid')}>
        <motion.div
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
        </motion.div>

        <div className="g-row">
          <div className="col-12">
            <p className={cx('stageTitle')}>Openfloor Makes Quality</p>
            <p className={cx('stageBody')}>
              오픈플로어는 새로운 기술을 활용해 제품 및 서비스를 개선해야 할 때,
              재무 성과를 높여야 할 때, 타임 투 마켓의 속도를 가속화할 때를 알고
              있습니다.
            </p>
          </div>
        </div>

        <div className={cx('stageBtns')}>
          <button>
            <svg
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 1L41 41" stroke="black" />
              <path d="M41 1.00018L1.00003 41.0001" stroke="black" />
            </svg>
          </button>
          <button>
            <svg
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 1L41 41" stroke="black" />
              <path d="M41 1.00018L1.00003 41.0001" stroke="black" />
            </svg>
          </button>
          <button>
            <svg
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 1L41 41" stroke="black" />
              <path d="M41 1.00018L1.00003 41.0001" stroke="black" />
            </svg>
          </button>
        </div>
      </section>

      <section className={cx('section', 'fluid')}>
        <article className="g-row">
          <div className={cx('col-12', 'sectionFeature')}>
            <h2 className={cx('featureTitle', 'text-lg')}>who we are</h2>
          </div>
        </article>

        <article className={cx('heading', 'g-row')}>
          <div className="col-lg-6 col-sm-5 col-12">
            <h3 className={cx('h1')}>service philosophy</h3>
          </div>
          <div className="col-lg-6 col-sm-7 col-12">
            달 가고 밤 가고 눈물도 가고 틔어 올 밝은 하늘 빛난 아침 이르면
            향기로운 이슬밭 푸른 언덕을 총총총 달려도 와 줄 볼이 고운 나의 사람.
            푸른 산 한나절 구름은 가고 고을 너머 뻐꾸기는 우는데 눈에 어려
            흘러가는 물결 같은 사람 속 아우성쳐 흘러가는 물결 같은 사람 속에 난
            그리노라.
          </div>
        </article>

        <ul className={cx('workings', 'g-row')}>
          {workings.map(work => (
            <li
              key={work.id}
              className={cx('workingsItem', 'col-lg-4', 'col-sm-6', 'col-12')}
            >
              <Link to="javascript:void();">{work.title}</Link>
            </li>
          ))}
        </ul>

        <h3></h3>
      </section>

      {/* section */}
      <section className={cx('section', 'fluid')}>
        <article className="g-row">
          <div className={cx('col-12', 'sectionFeature')}>
            <h2 className={cx('featureTitle', 'text-lg')}>who we are</h2>
          </div>
        </article>

        <article className={cx('heading', 'g-row')}>
          <div className="col-lg-6 col-sm-5 col-12">
            <h1 className={cx('h1')}>service philosophy</h1>
          </div>
          <div className="col-lg-6 col-sm-7 col-12">
            달 가고 밤 가고 눈물도 가고 틔어 올 밝은 하늘 빛난 아침 이르면
            향기로운 이슬밭 푸른 언덕을 총총총 달려도 와 줄 볼이 고운 나의 사람.
            푸른 산 한나절 구름은 가고 고을 너머 뻐꾸기는 우는데 눈에 어려
            흘러가는 물결 같은 사람 속 아우성쳐 흘러가는 물결 같은 사람 속에 난
            그리노라.
          </div>
        </article>
      </section>
    </Layout>
  )
}

export default IndexPage
