import * as React from 'react'
import { Link } from 'gatsby'
import * as styles from './footer.module.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

const Footer = () => (
  <section className={cx('footer', 'mask')}>
    <div className="is-fluid">
      {/* content column */}
      <article className="row justify-content-between">
        <div className="col-12 col-lg-4">
          <h5 className="fw-bolder">CONTACT US</h5>
        </div>

        <div className="col-12 col-lg-4">
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

        <div className="col-12 col-lg-4">
          <address className={cx('address')}>
            <p>lee@openfloor.kr</p>
            <p>82 10-1234-5678</p>
          </address>
          <p className={cx('copyright')}>
            <p>
              © <strong>Openfloor, Inc.</strong> ALL RIGHTS RESERVED.
            </p>
            <p>Grind hard, shine hard.</p>
          </p>
        </div>
      </article>
      {/* \\ content column */}
    </div>
  </section>
)

export default Footer
