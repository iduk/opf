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
      {/* header */}

      <section className="section fluid">
        <header className={cx('g-row', 'pageHeader')}>
          <div className="col-12 col-md-auto">Xenon Histories</div>
          <div className="col-12 col-lg-9">
            <h1 className={cx('pageHeader__title')}>더도말고 덜도말고</h1>
          </div>
        </header>
      </section>
      {/* article */}
      <div className="fluid">
        <section className="section g-row">
          <div className="col-12 col-md-auto">
            <p className="mb-5">Achieve</p>
          </div>

          <div className="col-12 col-md-3 col-lg-2">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              inventore possimus sed dolor, aspernatur culpa praesentium vel,
              maiores quibusdam quod doloremque a perferendis reiciendis earum
              blanditiis. Excepturi eligendi facere facilis.
            </p>
          </div>
          <div className="col-12 col-md-3 col-lg-2">
            <p>
              우는 아직 별이 풀이 별 이국 헤는 봅니다. 쓸쓸함과 밤을 그러나
              하나의 아침이 잔디가 다 까닭입니다. 다 않은 하나 된 봅니다. 둘
              지나고 까닭이요, 이 노루, 토끼, 버리었습니다. 자랑처럼 밤을
              계집애들의 봅니다. 그리워 이제 무성할 이름자 까닭입니다. 그러나
              애기 언덕 나의 내린 추억과 봅니다. 나는 쉬이 너무나 별이 겨울이
              계십니다. 어머니, 한 다 무성할 봅니다.
            </p>
          </div>
          <div className="col-12 col-md-3 col-lg-2">
            <p>
              우는 아직 별이 풀이 별 이국 헤는 봅니다. 쓸쓸함과 밤을 그러나
              하나의 아침이 잔디가 다 까닭입니다. 다 않은 하나 된 봅니다. 둘
              지나고 까닭이요, 이 노루, 토끼, 버리었습니다. 자랑처럼 밤을
              계집애들의 봅니다. 그리워 이제 무성할 이름자 까닭입니다. 그러나
              애기 언덕 나의 내린 추억과 봅니다. 나는 쉬이 너무나 별이 겨울이
              계십니다. 어머니, 한 다 무성할 봅니다. 써 그리고 한 내린 묻힌
              봅니다. 걱정도 않은 동경과 밤을 애기 위에 아름다운 못 있습니다.
              어머니 노루, 북간도에 까닭입니다. 옥 하나 가슴속에 불러 노새,
              봅니다. 파란 이름과, 아이들의 내린 북간도에 봄이 벌레는 잠,
              계십니다. 헤일 마디씩 덮어 듯합니다.
            </p>
          </div>
        </section>
        <section className="section g-row">
          <div className="col-12 col-md-auto">
            <p className="mb-5">Services</p>
          </div>

          <div className="col-12 col-md-3 col-lg-2">15</div>
          <div className="col-12 col-md-3 col-lg-2">
            <p>
              우는 아직 별이 풀이 별 이국 헤는 봅니다. 쓸쓸함과 밤을 그러나
              하나의 아침이 잔디가 다 까닭입니다. 다 않은 하나 된 봅니다. 둘
              지나고 까닭이요, 이 노루, 토끼, 버리었습니다. 자랑처럼 밤을
              계집애들의 봅니다. 그리워 이제 무성할 이름자 까닭입니다. 그러나
              애기 언덕 나의 내린 추억과 봅니다. 나는 쉬이 너무나 별이 겨울이
              계십니다. 어머니, 한 다 무성할 봅니다.
            </p>
          </div>
          <div className="col-12 col-md-3 col-lg-2">
            <p>-</p>
          </div>
        </section>
      </div>

      <div className="fluid mt-8">
        <div className="g-row">
          <div className="col-12 px-0">
            <div className={cx('myImgContainer')}>
              <StaticImage
                src="https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80"
                alt="author-image"
                loading="lazy"
                placeholder="tracedSVG"
                layout="fullWidth"
                className={cx('myImg')}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="ABOUT" />

export default AboutPage
