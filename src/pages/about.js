import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import * as styles from './about.module.scss'
import classNames from 'classnames/bind'
import Seo from '../components/seo'
const cx = classNames.bind(styles)

const AboutPage = () => {
  return (
    <Layout className={cx('aboutPage')}>
      <div className="fluid">
        <div className="g-row">
          <div className="col-12 px-0">
            <div className={cx('myImgContainer')}>
              <div className={cx('imgText', 'fw-bolder')}>Xenon</div>
              {/* <StaticImage
                src="https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80"
                alt="author-image"
                loading="lazy"
                placeholder="tracedSVG"
                layout="fullWidth"
                className={cx('myImg')}
              /> */}
            </div>
          </div>
        </div>
      </div>
      <div className="fluid">
        <div className="g-row" data-line>
          <div className="col-12 col-lg-3">
            <h1>About</h1>
          </div>
          <div className="col-12 col-lg-9">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Inventore voluptas, excepturi consequuntur et voluptatem dolor
              possimus debitis eveniet fugiat. Soluta dolor a doloremque
              incidunt nesciunt expedita mollitia, aliquam fugiat. Nesciunt?
            </p>

            <p>
              I left the contact animation empty as a playground if you download
              the repo. Also, all animation can be optimize, changed, you can
              can make them very complex or very subtle, you can use another
              animation package and so on. But i think this is a good way to
              start implementing page transition if you are using Gatsby in your
              projects 17
            </p>
          </div>
        </div>
        <div className="g-row" data-line>
          <div className="col-6 col-lg-6"></div>
          <div className="col-6 col-lg-6">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Inventore voluptas, excepturi consequuntur et voluptatem dolor
              possimus debitis eveniet fugiat. Soluta dolor a doloremque
              incidunt nesciunt expedita mollitia, aliquam fugiat. Nesciunt?
            </p>

            <p>
              I left the contact animation empty as a playground if you download
              the repo. Also, all animation can be optimize, changed, you can
              can make them very complex or very subtle, you can use another
              animation package and so on. But i think this is a good way to
              start implementing page transition if you are using Gatsby in your
              projects 17
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="ABOUT" />

export default AboutPage
