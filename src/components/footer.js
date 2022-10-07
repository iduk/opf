import * as React from 'react'
import * as styles from './footer.module.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

const Footer = () => (
  <footer className={cx('footer', 'mask')}>
    <div className="fluid">
      {/* content column */}
      <article className="g-row">
        <div className="col-12 col-lg-4">
          <h4 className="fw-bold pb-3">Contact</h4>
        </div>

        <div className="col-12 col-lg-3">
          <p className={cx('copyright')}>
            <div className={cx('socialList')}>
              <li>
                <span>Facebook</span>
                <p>opf.facebook</p>
              </li>
              <li>
                <span>Slack</span>
                <p>openfloor.dev.slack.com</p>
              </li>
              <li>
                <span>Instagram</span>
                <p>@openfloor_dev</p>
              </li>
            </div>
          </p>
        </div>

        <div className="col-12 col-lg-3">
          <address className={cx('address')}>
            <a href={'mailto:lee@openfloor.kr'}>lee@openfloor.kr</a>
            <p>82 10-1234-5678</p>
          </address>
          <div className={cx('copyright')}>
            <p>
              © <strong>Openfloor, Inc.</strong> ALL RIGHTS RESERVED.
            </p>
            <blockquote className="small pt-2 text-gray-5">
              - Grind hard, shine hard.
            </blockquote>
          </div>
        </div>
      </article>
      {/* \\ content column */}
    </div>
  </footer>
)

export default Footer
