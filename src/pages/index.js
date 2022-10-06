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
      <Intro />

      <section className={cx('section', 'worklist')}>
        <div className="is-fluid">
          <article className={cx('grid-row')} data-grid="true">
            <div className="col-12 col-lg-2">
              <h5>ProjectName, BlaBla Solution</h5>
            </div>
            <div className="col-12 col-lg-3">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                cumque doloribus fuga error dolorem eveniet dolor doloremque,
                sit ipsa quas saepe itaque, qui reprehenderit quisquam voluptate
                perferendis placeat. Vitae, molestias.
              </p>
            </div>
            <div className="col-12 col-lg-7 p-0">
              <ul className="proj">
                <li>
                  <StaticImage
                    src="https://images.unsplash.com/photo-1611001716885-b3402558a62b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80"
                    // src="https://placeimg.com/1000/1000/any"
                    alt="ProjectImage"
                    layout="fullWidth"
                  />
                  <p className="p-4">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ipsam, porro?
                  </p>
                </li>
                <li>
                  <div className="grid-row no-gutters" data-grid="false">
                    <div className="col-8 col-lg-6">
                      <StaticImage
                        src="https://images.unsplash.com/photo-1585993710444-aad7a0016901?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1636&q=80"
                        // src="https://placeimg.com/1000/1000/any"
                        layout="fullWidth"
                        alt="ProjectImage"
                      />
                    </div>
                    <div className="col-12 col-lg-6">
                      <p className="py-4">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Asperiores soluta eligendi ipsum exercitationem
                        saepe obcaecati excepturi harum nostrum! Quam autem
                        architecto tempora excepturi exercitationem debitis
                        reiciendis temporibus eius molestiae maxime.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="grid-row no-gutters" data-grid="false">
                    <div className="col-12 col-lg-6">
                      <p className="py-4">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Asperiores soluta eligendi ipsum exercitationem
                        saepe obcaecati excepturi harum nostrum! Quam autem
                        architecto tempora excepturi exercitationem debitis
                        reiciendis temporibus eius molestiae maxime.
                      </p>
                    </div>
                    <div className="col-12 col-lg-6">
                      <StaticImage
                        src="https://images.unsplash.com/photo-1623184169148-d872f5f1f034?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3273&q=80"
                        // src="https://placeimg.com/1000/1000/any"
                        layout="fullWidth"
                        alt="ProjectImage"
                      />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage

function Intro() {
  return (
    <div className={cx('feature', 'is-fluid')}>
      <div className="grid-row">
        <div className="col-12 col-md-6 col-lg-6">
          <p className="small">
            오플플로어는 강력한 팀을 기반으로 혁신적인 기술에 대한 열정을 가지고
            있으며 지속가능한 솔루션으로 문제를 해결하는 것에 주력하고 있습니다.
            우리는 다양한 설계기법을 통해 사용자 경험속에서 잠재된 가치를
            발굴하고 실현시키고자 합니다.
          </p>
        </div>
      </div>

      <div className={cx('keywords', 'text-uppercase')}>
        <Link to={'/'}>OPENFLOOR</Link>
        <Link to={'/'}>Multi-Platform</Link>
        <Link to={'/'}>Data to Information</Link>
        <Link to={'/'}>Device Handling</Link>
        <Link to={'/'}>Everyday Coding</Link>
      </div>
    </div>
  )
}
