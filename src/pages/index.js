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

  const textloop1 = ['openfloor', 'team', 'troubleshoot', 'uxui', 'performance']

  return (
    <Layout className={cx('index')}>
      <section className={cx('stage', 'fluid')}>
        <div className={cx('stage__links')}>
          <Link to={'/'}>Team Openfloor</Link>
          <Link to={'/'}>Device Handling</Link>
          <Link to={'/'}>Data Visualization</Link>
          <Link to={'/'}>Creative Interface</Link>
          <Link to={'/'}>Optimal Code</Link>
          <Link to={'/'}>User First</Link>
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
              <li className="col-6">
                <h6>Client</h6>
                <p>CJ OliveHyoung</p>
              </li>
              <li className="col-6">
                <h6>Direction</h6>
                <p>openfloor😎</p>
                <p>Oct. 9, 2019</p>
              </li>
              <li className="col-6">
                <h6>Performance</h6>
                <p>System Architecture, UI/UX Design</p>
              </li>

              <li className="col-6">
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
          <div className="g-row no-gutters">
            <div className="col-12 col-lg-6 pb-3">
              <StaticImage
                src="https://images.unsplash.com/photo-1611001716885-b3402558a62b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80"
                // src="https://placeimg.com/1000/1000/any"
                alt="ProjectImage"
                layout="fullWidth"
                imgClassName="mask"
              />
              <div className="pt-1">
                <p className="h6">Lorem ipsum dolor sit</p>
                <p className="small">Lorem ipsum dolor sit</p>
              </div>
            </div>
            <div className="col-12 col-lg-6 pb-3">
              <StaticImage
                src="https://images.unsplash.com/photo-1574882225038-3988bebf5ed2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2360&q=80"
                // src="https://placeimg.com/1000/1000/any"
                alt="ProjectImage"
                layout="fullWidth"
                imgClassName="mask"
              />
              <div className="pt-1">
                <p className="h6">Lorem ipsum dolor sit</p>
                <p className="small">Lorem ipsum dolor sit</p>
              </div>
            </div>
          </div>

          <div className="py-4 g-row no-gutters">
            <div className="col-12 col-lg-6">
              <h3 className="pb-2">Essentials</h3>
              <p>
                Embracing the flexible nature of the web gives us powerful,
                resilient front-ends, where instead of using specific sizes, we
                give elements sensible boundaries and let them auto-fill where
                possible. I embrace this mentality as much as possible and roll
                utilities out like this one for grid layouts
              </p>
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
            <div className="col-12 col-lg-4 offset-lg-8">
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
            <div className="col-12 col-lg-4 offset-lg-8">
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
        </article>
      </section>

      <section className={cx('section')}>
        <div className={'marquee'}>
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

      <section className={cx('section')}>
        <div className="fluid">
          <article className="g-row" data-line>
            <div className="col-12 col-lg-12">
              {/* text effect */}
              <motion.div
                whileInView="visible"
                style={{ x }}
                className={cx('textList')}
              >
                {textloop1.map((item, index) => (
                  <span key={index} className={cx('textOutline')}>
                    {item}
                  </span>
                ))}
              </motion.div>
            </div>
            {/* <div className="col-6 col-lg-1">2</div> */}
            <div className="col-12 col-lg-6">3</div>
            <div className="col-12 col-lg-6">4</div>
            <div className="col-12 col-lg-6">5</div>
            <div className="col-12 col-lg-6">6</div>
            <div className="col-12 col-lg-6">7</div>
            <div className="col-12 col-lg-6">8</div>
            <div className="col-12 col-lg-6">9</div>
            <div className="col-12 col-lg-6">10</div>
            <div className="col-12 col-lg-6">11</div>
            <div className="col-12 col-lg-6">12</div>
          </article>
        </div>
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
