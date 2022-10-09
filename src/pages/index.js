import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import * as styles from './index.module.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

const IndexPage = () => {
  return (
    <Layout className={cx('index')}>
      <main className={cx('stage', 'fluid')}>
        <div className="g-row">
          <article className="col-12 col-lg-6">
            <p>
              오플플로어는 강력한 팀을 기반으로 혁신적인 기술에 대한 열정을
              가지고 있으며 지속가능한 솔루션으로 문제를 해결하는 것을 주력으로
              하고 있습니다. 우리의 목표는 다양한 설계기법을 통해 사용자
              경험속에서 잠재된 가치를 발굴하고 실현하는 것입니다.
            </p>
          </article>
        </div>
        <div className={cx('stage__links')}>
          <Link to={'/'}>Openfloor Histories</Link>
          <Link to={'/'}>Web Experiences</Link>
          <Link to={'/'}>Data Visualization</Link>
          <Link to={'/'}>Device Handling</Link>
          <Link to={'/'}>Creative Development</Link>
        </div>
      </main>

      <section className={cx('section', 'work')}>
        <header className={cx('head')}>
          <div class={cx('head__wrap')}>
            <h1>Hangul is Vertical Align Not Working. Shit!</h1>
            <p className="small">Create By. openfloor inc.</p>
          </div>
        </header>

        <article className={cx('art1')}>
          <div class={cx('art1__wrap')}>
            <ul className={cx('makingInfo')}>
              <li className="g-row no-gutters">
                <h6 className="col-12 col-lg-6">Client</h6>
                <p className="col-12 col-lg-6">CJ OliveZero Co,.ltd.</p>
              </li>
              <li className="g-row no-gutters">
                <h6 className="col-12 col-lg-6">Director</h6>
                <p className="col-12 col-lg-6">openfloor Inc.</p>
              </li>
              <li className="g-row no-gutters">
                <h6 className="col-12 col-lg-6">Date</h6>
                <p className="col-12 col-lg-6">Oct. 9, 2016</p>
              </li>
              <li className="g-row no-gutters">
                <h6 className="col-12 col-lg-6">Project..</h6>
                <p className="col-12 col-lg-6">
                  WEB/APP Software System Develop, UI/UX Creative Direction
                </p>
              </li>
            </ul>
          </div>
        </article>

        <article className={cx('art2')}>
          <div className="g-row no-gutters">
            <div className="col-12 col-lg-8 pb-3">
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
            <div className="col-12 col-lg-4 pb-3">
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
    </Layout>
  )
}

export default IndexPage
