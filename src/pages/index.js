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

const IndexPage = () => {
  const ref = React.useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'start start'],
  })
  // const scaleX = useSpring(scrollYProgress, {
  //   stiffness: 100,
  //   damping: 30,
  //   restDelta: 0.001,
  // })

  return (
    <Layout className={cx('index')}>
      <section className={cx('stage', 'fluid')}>
        <div className={cx('motionTrack')}>
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
        </div>

        <div className="g-row">
          <div className="col-12 col-lg-3 order-2 order-lg-1 mt-lg-0 mt-3">
            <p className={cx('stageText')}>
              TroubleShooter
              <br />
              openfloor team
            </p>
            <p className="mt-3 small w-100 w-lg-65">
              Mollitia veritatis perspiciatis repellat hic officia. tempore nemo
              nesciunt ipsum harum?
            </p>
          </div>
          <div className="col-12 col-lg-9 order-1 order-lg-2">
            <p className={cx('stageTitle')}>
              Experience Doesn't Count for Much Anymore.
            </p>
          </div>
        </div>
      </section>

      {/* <section>
        <motion.div className={cx('textList')}>
          {textloop1.map((item, index) => (
            <span key={index} className={cx('textOutline')}>
              {item}
            </span>
          ))}
        </motion.div>
      </section> */}

      <section className={cx('section', 'work')}>
        <header className={cx('head')}>
          <div className={cx('head__wrap')}>
            <h1>Hangul is vertical align not working</h1>
          </div>
        </header>

        <article className={cx('art1')}>
          <div className={cx('art1__wrap')}>
            <ul className={cx('makingInfo', 'g-row')}>
              <li className="col-12">
                <h6>Client</h6>
                <p>CJ OliveHyoung</p>
              </li>
              <li className="col-12">
                <h6>Direction</h6>
                <p>openfloor😎</p>
                <p>Oct. 9, 2019</p>
              </li>
              <li className="col-12">
                <h6>Performance</h6>
                <p>System Architecture, UI/UX Design</p>
              </li>

              <li className="col-12">
                <h6>Teams</h6>
                <p>
                  <small>PM</small> Hildebrant
                </p>
                <p>
                  <small>PL</small> Brett
                </p>
                <p>
                  <small>B/E</small> Lenny
                </p>
                <p>
                  <small>F/E</small> Wang
                </p>
              </li>
            </ul>
          </div>
        </article>

        <article className={cx('art2')}>
          <div className="g-row" style={{ margin: '-1rem' }}>
            <div className="col-12 col-lg-6 px-0">
              <StaticImage
                src="https://images.unsplash.com/photo-1611001716885-b3402558a62b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80"
                // src="https://placeimg.com/1000/1000/any"
                alt="ProjectImage"
                layout="fullWidth"
                imgClassName="mask"
              />
            </div>
            <div className="col-12 col-lg-6 px-0">
              <StaticImage
                src="https://images.unsplash.com/photo-1611001716885-b3402558a62b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80"
                // src="https://placeimg.com/1000/1000/any"
                alt="ProjectImage"
                layout="fullWidth"
                imgClassName="mask2"
              />
            </div>
          </div>

          <div className="pb-4 g-row">
            <div className="col-12 col-lg-6">
              <h4 className="pb-2">Essentials</h4>
              <p>
                Embracing the flexible nature of the web gives us powerful,
                resilient front-ends, where instead of using specific sizes, we
                give elements sensible{' '}
                <Link className="link" to="#">
                  boundaries
                </Link>{' '}
                and let them auto-fill where possible.
              </p>
            </div>
            <div className="col-12 col-lg-6">
              <p>
                Embracing the flexible nature of the web gives us powerful,
                resilient front-ends, where instead of using specific sizes, we
                give elements sensible boundaries and let them auto-fill where
                possible. I embrace this mentality as much.
              </p>
            </div>
          </div>

          <div className="pt-4 g-row">
            <div className="col-12 col-lg-3 offset-lg-6">
              <p>
                Embracing the flexible nature of the web gives us powerful,
                resilient front-ends, where instead of using specific sizes, we
                give elements sensible boundaries and let them auto-fill where
                possible. I embrace this mentality as much as possible and roll
                utilities out like this one for grid layouts
              </p>
            </div>
            <div className="col-12 col-lg-3">
              <p>
                Embracing the flexible nature of the web gives us powerful,
                resilient front-ends, where instead of using specific sizes, we
                give elements sensible boundaries and let them auto-fill where
                possible. I embrace this mentality as much as possible and roll
                utilities out like this one for grid layouts
              </p>
            </div>
          </div>
        </article>
      </section>

      <section className={cx('section')}>
        <div className={'marquee reverse'}>
          <ul className={'marquee__content'}>
            <li>Word1</li>
            <li>Word2</li>
            <li>Word3</li>
            <li>Word4</li>
          </ul>
          <ul className={'marquee__content'} aria-hidden="true">
            <li>Word1</li>
            <li>Word2</li>
            <li>Word3</li>
            <li>Word4</li>
          </ul>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
