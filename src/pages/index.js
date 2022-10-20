import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import { motion, useTransform, useScroll } from 'framer-motion'
import * as styles from './index.module.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

const IndexPage = () => {
  const { scrollYProgress } = useScroll()
  const x = useTransform(scrollYProgress, [0, 1], ['0', '-100%'])

  const textloop1 = ['Architecture', 'Security', 'direction', 'performance']

  return (
    <Layout className={cx('index')}>
      <section className={cx('stage', 'fluid')}>
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
          <div className="py-4 g-row no-gutters">
            <div className="col-12 col-lg-6">
              <h3 className="pb-2">Essentials</h3>
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
            <div className="col-12 col-lg-6 offset-lg-6">
              <h6 className="pb-2">
                non incidunt nesciunt consequatur nisi! Qui!
              </h6>
              <p>
                Embracing the flexible nature of the web gives us powerful,
                resilient front-ends, where instead of using specific sizes, we
                give elements sensible boundaries and let them auto-fill where
                possible. I embrace this mentality as much as possible and roll
                utilities out like this one for grid layouts
              </p>
            </div>
          </div>

          <div className="pt-4 g-row no-gutters">
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

          <div className="g-row no-gutters mt-10">
            <div className="col-12">
              <StaticImage
                src="https://images.unsplash.com/photo-1611001716885-b3402558a62b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80"
                // src="https://placeimg.com/1000/1000/any"
                alt="ProjectImage"
                layout="fullWidth"
                imgClassName="mask"
              />
              <div className="pt-1 text-right">
                <p className="small ">
                  Optio explicabo distinctio laborum incidunt, assumenda
                  eligendi accusamus.
                  <copyright className="grid small">
                    @createBy. explicabo
                  </copyright>
                </p>
              </div>
            </div>
          </div>
        </article>
      </section>

      <section className={cx('section')}>
        {/* text effect */}
        <motion.div style={{ x }} className={cx('textList')}>
          {textloop1.map((item, index) => (
            <span key={index} className={cx('textOutline')}>
              {item}
            </span>
          ))}
        </motion.div>
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
