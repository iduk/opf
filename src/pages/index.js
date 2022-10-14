import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import { motion, useScroll } from 'framer-motion'
import * as styles from './index.module.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

const IndexPage = () => {
  const { scrollXProgress, scrollYProgress } = useScroll({
    offset: ['end end', 'start start'],
  })

  const marqueeVariants = {
    animate: {
      x: [0, 1000],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 10,
          ease: 'linear',
        },
      },
    },
  }

  const textloop1 = [
    'openfloor',
    'team',
    'development',
    'uxui',
    'troubleshoot',
    'business',
    'performance',
  ]

  return (
    <Layout className={cx('index')}>
      <section className={cx('stage', 'fluid')}>
        <div className="g-row">
          <div className="col-12 col-lg-4">
            <p>
              오플플로어는 강력한 팀을 기반으로 혁신적인 기술에 대한 열정을
              가지고 있으며 지속가능한 솔루션으로 문제를 해결하는 것을 주력으로
              하고 있습니다. 우리의 목표는 다양한 설계기법을 통해 사용자
              경험속에서 잠재된 가치를 발굴하고 실현하는 것입니다.
            </p>
          </div>
          <div className="col-12 offset-lg-8 col-lg-4">
            <div className={cx('stage__bg', 'mask')}>
              {/* <StaticImage
                src="../assets/images/3d_render.png"
                aspectRatio={4 / 3}
                width="600"
                alt="img"
              /> */}
            </div>
          </div>
        </div>
        <div className={cx('stage__links')}>
          <Link to={'/'}>GreatTeams</Link>
          <Link to={'/'}>Best Experiences</Link>
          <Link to={'/'}>Device Handling</Link>
          <Link to={'/'}>Data Visualization</Link>
          <Link to={'/'}>Creative Interface</Link>
        </div>
      </section>
      <section className={cx('section', 'work')}>
        <header className={cx('head')}>
          <div className={cx('head__wrap')}>
            <h1>Hangul is vertical align not working</h1>
            {/* <p className="small">NO 16454946</p> */}
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
      <div className="fluid">
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
          <article className="g-row" data-line>
            <div className="col-12 col-lg-12">
              {/* text effect */}
              <article className={cx('textSection')}>
                <motion.ul
                  initial="hidden"
                  whileInView="visible"
                  style={{ translateX: scrollYProgress }}
                  animate="animate"
                  className={cx('textList')}
                >
                  <li className={cx('move1')}>
                    {textloop1.map((item, index) => (
                      <span key={index} className={cx('textOutline')}>
                        {item}
                      </span>
                    ))}
                  </li>
                </motion.ul>
              </article>
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
      </div>
    </Layout>
  )
}

export default IndexPage
