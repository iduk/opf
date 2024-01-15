import React, { useRef, useEffect, useState } from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import {
  motion,
  useTransform,
  useScroll,
  useAnimation,
  useInView,
  useSpring,
} from 'framer-motion'

import Ibm from '../assets/images/logo_ibm.svg'
import Adobe from '../assets/images/logo_adobe.svg'
import Intel from '../assets/images/logo_intel.svg'
import Amazon from '../assets/images/logo_amazon.svg'
import Cisco from '../assets/images/logo_cisco.svg'
import Netflix from '../assets/images/logo_netflix.svg'
import Oracle from '../assets/images/logo_oracle.svg'
import RevealContainer from '../components/revealContainer'
import OpenfloorText from '../assets/images/openfloor-text.svg'
import ImagePng from '../assets/images/3d_render.png'
import SHBank from '../assets/images/shbank.png'
import OliveEZ from '../assets/images/olive-ez.png'
import OliveLounge from '../assets/images/olive-lounge.png'
import SBIBank from '../assets/images/sidar-bank.png'
import OlivePDA from '../assets/images/olive-pda.png'
import * as styles from './index.module.scss'
import classNames from 'classnames/bind'
import ParallaxText from '../components/parallaxText'
const cx = classNames.bind(styles)

const anim = {
  initial: { width: 0, height: 0 },
  open: {
    width: 'auto',
    height: 'auto',
    transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] },
  },
  closed: { width: 0, height: 0 },
}

const skills = [
  {
    id: 1,
    title: 'Efficieny',
    hoverTitle: '효율성',
    desc: '결과를 극대화할 수 있는 리소스를 보유하고 있으며, 불필요한 개발 과정을 줄이고 언제나 효울적인 업무 방식을 택합니다.',
  },
  {
    id: 2,
    title: 'Latest Technology',
    hoverTitle: '최신 기술력',
    desc: 'AI, 디지털 트윈 등 IT 트렌드를 선도하는 최신 동향을 파악하고, 그에 맞는 기술력을 갖추고 있습니다.',
  },
  {
    id: 3,
    title: 'Quality',
    hoverTitle: '최상의 결과물',
    desc: '다양한 경험을 통한 군더더기 없는 코드와 자체 검증 과정을 통해 프로젝트 최상의 결과물을 보장합니다.',
  },
  {
    id: 4,
    title: 'Running mate',
    hoverTitle: '러닝메이트',
    desc: '요구사항의 정확한 이해와 검증을 통해 파트너 사의 소중한 제품과 프로젝트의 시작과 끝을 책임집니다.',
  },
]
const histories = [
  {
    date: '25 Mar 2022',
    title: '올영 EZ',
    partner: '(주)CJ올리브영',  
    solution: 'UX/UI/FRONT/MAINTEANENCE',
    src: OliveEZ,
  },
  {
    date: '22 Aug 2022',
    title: '올리브 라운지',
    partner: '(주)CJ올리브영',
    solution: 'UX/UI/FRONT/MAINTEANENCE',
    src: OliveLounge,
  },
  {
    date: '04 Sept 2022',
    title: '셀프 체크아웃',
    partner: '(주)CJ올리브영',
    solution: 'DESIGN',
  },
  {
    date: '03 Feb 2022',
    title: 'SMART PDA 2.0',
    partner: '(주)CJ올리브영',
    solution: 'UX/UI/FRONT/BACKEND/MAINTEANENCE',
    src: OlivePDA,
  },
  {
    date: '30 Jan 2022',
    title: 'SBI 저축은행 개인 뱅킹',
    partner: 'SBI저축은행',
    solution: 'UX/UI/FRONT',
    src: SBIBank,
  },
  {
    date: '04 Sept 2022',
    title: '하나손해보험 시스템 고도화',
    partner: '하나손해보험',
    solution: 'FRONT/BACKEND',
  },
  {
    date: '30 Jan 2022',
    title: '광주은행 개인뱅킹/기업뱅킹',
    partner: '광주은행',
    solution: 'FRONT/BACKEND',
  },
  {
    date: '04 Sept 2022',
    title: '세탁 O2O 서비스 플랫폼',
    partner: '온디맨드랩',
    solution: 'APP/DESKTOP/WEB/SERVER',
  },
  {
    date: '04 Sept 2022',
    title: '배달 O2O 서비스 플랫폼',
    partner: '온디맨드랩',
    solution: 'APP/DESKTOP/WEB/SERVER',
  },
  {
    date: '30 Jan 2022',
    title: 'SPC 잠바주스 키오스크 서비스 플랫폼',
    partner: 'SPC',
    solution: 'APP/WEB/SERVER',
  },
  {
    date: '04 Sept 2022',
    title: '삼성중공업 모바일 무도면 시스템',
    partner: '삼성중공업',
    solution: 'APP/SERVER',
  },
]
const projectList = [
  {
    date: '25 Mar 2022',
    title: '올리브영 매장업무시스템',
    desc: 'OLIVEYOUNG',
    src: OliveEZ
  },
  {
    date: '22 Aug 2022',
    title: '올리브영 교육센터',
    desc: 'OLIVEYOUNG',
    src: OliveLounge
  },
  {
    date: '04 Sept 2022',
    title: '신협 기업 뱅킹',
    desc: 'shinhyup bank',
    src: SHBank
  },
  {
    date: '03 Feb 2022',
    title: 'SBI저축은행 사이다뱅크',
    desc: 'SBI Bank',
    src: SBIBank
  },
  
]

const partners = [
  { name: Ibm },
  { name: Intel },
  { name: Amazon },
  { name: Cisco },
  { name: Netflix },
  { name: Oracle },
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

function HistoriesList({ list }) {
  const [isActive, setIsActive] = useState(false)
  const { title, src, date, partner, solution } = list

  return (
    <Link className="g-row flex-between align-center">
      <div className="col-lg-2 col-12">
        <p>{date}</p>
      </div>

      <div
        className={cx('historiesTitle', 'col-lg-6', 'col-12')}
        onMouseEnter={() => {
          setIsActive(true)
        }}
        onMouseLeave={() => {
          setIsActive(false)
        }}
      >
        <div className='my-2 my-lg-0 h3'>
          <p className='pr-2' style={{ display: 'inline-block' }}>
            {title}
          </p>
          {src ? 
            <motion.div
              variants={anim}
              animate={isActive ? 'open' : 'closed'}
              className={cx('imgContainer')}
            >
              <img src={src} alt={src} />
            </motion.div>
            : ''
          }
          <p style={{ display: 'inline-block' }}>{solution}</p>
        </div>
      </div>
      <div className="col-lg-2 col-6">{partner}</div>
      
    </Link>
  )
}

const IndexPage = () => {
  return (
    <Layout className={cx('index')}>
      <section
        className={cx('fluid', 'stage', 'justify-center', 'text-center')}
      >

        <div className="g-row">
          <div className="col-lg-8 offset-lg-2">
            <article className={cx('stageTitle')}>
              <RevealContainer>Openfloor</RevealContainer>
              <RevealContainer>Makes</RevealContainer>
              <RevealContainer>
                Quality
                <span>.</span>
              </RevealContainer>
            </article>
          </div>
        </div>
      </section>

      <section id="whoWeAre" className={cx('section', 'whoWeAre')}>
        <div className="container">
          <article className="g-row">
            <div className={cx('col-12', 'sectionFeature')}>
              <h2 className={cx('featureTitle', 'text-lg')}>who we are</h2>
            </div>
          </article>

          <article className={cx('heading', 'g-row')}>
            <div className="col-lg-6 col-12">
              <h3 className={cx('h1')}>
                service
                <br />
                philosophy
              </h3>
            </div>
            <div className="col-lg-6 col-12 mt-3">
              <p className="mb-2" style={{ color: 'var(--gray-6)' }}>
                We help your business develop more easily and efficiently with
                technology and experience.
              </p>
              <p>
                세상의 많은 기업에는 해결하고자 하는 문제가 남아있습니다.
                오픈플로어는 기업이 겪는 어려움을 기술과 경험을 통해 풀어가고자
                합니다. 기업이 더 쉽고 효율적으로 비즈니스를 성장시킬 수 있도록,
                기업의 입장에서 문제를 탐구하고 해결해 나가고 있습니다.
              </p>
            </div>
          </article>
        </div>

        <article className={cx('workingsWrapper')}>
          <div className="container">
            <ul className={cx('workings', 'g-row')}>
              {skills.map(item => (
                <li
                  key={item.id}
                  className={cx(
                    'workingsItem',
                    'col-lg-6',
                    'col-sm-6',
                    'col-12',
                    'px-xs-1'
                  )}
                >
                  <div className={cx('flipBox')}>
                    <div className={cx('flipBoxInner')}>
                      {/* box front */}
                      <div className={cx('flipBoxFront')}>
                        <h2>{item.title}</h2>
                      </div>
                      {/* box back */}
                      <div className={cx('flipBoxBack')}>
                        <h2>{item.hoverTitle}</h2>
                        <p>{item.desc}</p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className={cx('floatingTypo')}>
              <ParallaxText baseVelocity={-1}>
                Openfloor Makes Quality
              </ParallaxText>
              <ParallaxText baseVelocity={1}>
                Openfloor Makes Quality
              </ParallaxText>
            </div>
          </div>
        </article>
      </section>

      {/* section > Who We Are > Histories */}
      <section className={cx('section', 'historiesWrapper')}>
        <div className="container">
          <article className={cx('heading', 'g-row')}>
            <div className="col-lg-6 col-12">
              <h1 className={cx('h1')}>
                openfloor
                <br />
                Histories
              </h1>
            </div>
            <div className="col-lg-6 col-12 mt-3">
              인공지능(AI), 클라우드, 검색 등 오랜 시간 동안 축적한 오픈플로어
              팀의 기술력과 서비스 경험을 결합하여 기존에 진행하던 사업을 더욱
              속도감 있게 전개하고 신규 성장 동력 확보를 위해 본격적으로
              비즈니스 파트너들과 함께하는 엔터프라이즈 IT 기업을 지향합니다.
            </div>
          </article>
        </div>

        <div className={cx('fluid')}>
          <article className="g-row justify-end">
            <div className="col-12 col-lg-12">
              <ul className={cx('histories')}>
                {histories.map((item, index) => (
                  <li key={index}>
                    <HistoriesList list={item} />
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </section>

      {/* section >  */}
      <section id="howWeWork" className={cx('section', 'howWeWork')}>
        <div className="container">
          <article className="g-row">
            <div className={cx('col-12', 'sectionFeature')}>
              <h2 className={cx('featureTitle', 'text-lg')}>How We Work</h2>
            </div>
          </article>

          <article className={cx('heading', 'g-row')}>
            <div className="col-lg-6 col-12">
              <h3 className={cx('h1')}>
                Openfloor
                <br />
                Makes Quality
              </h3>
            </div>
            <div className="col-lg-6 col-12 mt-3">
              <p style={{ color: 'var(--gray-4)'}} className='mb-2'>
                We focus on providing the best value for our results through
                development experience and diverse capabilities in various
                fields.
              </p>
              <p>
                국내 최대 e-커머스 플랫폼 부터 금융 서비스, 글로벌 기업까지
                대규모 파트너사와의 든든한 신뢰를 통한 협력을 진행해 오고
                있습니다. 다양한 분야의 개발 경험과 다채로운 역량을 통해
                불필요한 요소는 과감히 제거하고 결과물에 대한 최선의 가치에
                집중합니다.
              </p>
            </div>
          </article>
        </div>

        <div className="fluid">
          <article className={cx('projectWrapper')}>
            <ul className={cx('projectList')}>
              {projectList.map((item, index) => (
                <li key={index}>
                  <a href=''>
                    <img src={item.src} alt={item.title} />
                  </a>
                  <div className='mt-3'>
                    <h3 className='mt-2'>{item.title}</h3>
                    <p className='text-sm text-gray-4'>{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      {/* section > partners */}
      <section className={cx('section', 'partnersWrapper')}>
        <div className="container">
          <ul className={cx('g-row', 'justify-center')}>
            {partners.map((item, index) => (
              <li key={index} className="col-lg-2 col-4">
                <div className={cx('partner')}>
                  <img src={item.name} alt={item.name} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
