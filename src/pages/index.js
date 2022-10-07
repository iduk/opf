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
        <div className={cx('stage__projects')}>
          <Link to={'/'}>OPENFLOOR</Link>
          <Link to={'/'}>Multi-Platform</Link>
          <Link to={'/'}>Data to Information</Link>
          <Link to={'/'}>Device Handling</Link>
          <Link to={'/'}>Everyday Coding</Link>
        </div>
      </main>

      <section className={cx('section', 'work')}>
        <article className={cx('g-row', 'no-gutters', 'pt-0')} data-line>
          <div className={'col-2 col-lg-1'}>
            <div class={cx('headline')}>
              <h4 className={cx('title')}>
                Hangul is Vertical Align Not Working
              </h4>
            </div>
          </div>
          <div className="col-10 col-lg-3">
            <p className="small pt-1">2019/01/15</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              cumque doloribus fuga error dolorem eveniet dolor doloremque, sit
              ipsa quas saepe itaque, qui reprehenderit quisquam voluptate
              perferendis placeat. Vitae, molestias.
            </p>
          </div>
          <div className="col-12 col-lg-8">
            <StaticImage
              src="https://images.unsplash.com/photo-1611001716885-b3402558a62b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80"
              // src="https://placeimg.com/1000/1000/any"
              alt="ProjectImage"
              layout="fullWidth"
            />
            <div className="py-10">
              <h2>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam,
                porro?
              </h2>
            </div>
          </div>
        </article>
      </section>
    </Layout>
  )
}

export default IndexPage
