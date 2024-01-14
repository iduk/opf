import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { StaticImage } from 'gatsby-plugin-image'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import * as styles from './about.module.scss'
import classNames from 'classnames/bind'
import Seo from '../components/seo'
const cx = classNames.bind(styles)

const anim = {
  initial: { width: 0 },
  open: {
    width: 'auto',
    transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] },
  },
  closed: { width: 0 },
}

const ProjectList = ({ project, data }) => {

  const [isActive, setIsActive] = useState(false)
  const { title1, title2, src } = project
  // const posts = data.allMarkdownRemark.edges

  return (
    <div
      onMouseEnter={() => {
        setIsActive(true)
      }}
      onMouseLeave={() => {
        setIsActive(false)
      }}
      className={cx('project')}
    >
      <p>{title1}</p>

      <motion.div
        variants={anim}
        animate={isActive ? 'open' : 'closed'}
        className={cx('imgContainer')}
      >
        {/* {posts.map(post => (
          <Img
            fluid={
              post.node.frontmatter.thumbnail?.childImageSharp?.fluid
            }
          />
        ))} */}
        <img src={src} alt={src} />
      </motion.div>

      <p>{title2}</p>
    </div>
  )
}

function AboutPage() {
  const projects = [
    {
      title1: 'Jomor',
      title2: 'Design',
      src: 'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80',
    },
    {
      title1: 'La',
      title2: 'Grange',
      src: 'https://images.unsplash.com/photo-1704226769822-026a349945ba?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D',
    },

    {
      title1: 'Deux Huit',
      title2: 'Huit',
      src: 'https://images.unsplash.com/photo-1698365039593-5180c517bb96?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D',
    },

    {
      title1: 'Nothing',
      title2: 'Design Studio',
      src: 'https://images.unsplash.com/photo-1704241260682-5bb0a120cdaa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D',
    },

    {
      title1: 'Mambo',
      title2: 'Mambo',
      src: '3d_render.png',
    },
  ]

  return (
    <Layout>
      <main className={cx('main')}>
        <div className={cx('gallery')}>
          <p>Featured Work</p>

          {projects.map(project => {
            return <ProjectList project={project} />
          })}
        </div>
      </main>
    </Layout>
  )
}

export const Head = () => <Seo title="ABOUT" />

export default AboutPage