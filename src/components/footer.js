import * as React from 'react'
import * as styles from './footer.module.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

const Footer = () => (
  <footer className={cx('footer', 'mask')}>
    <div className="fluid">
      {/* content column */}
      <div className="g-row">
        <div className="col-12 col-lg-4">
          <h4 className="fw-bold pb-3">Contact</h4>
        </div>

        <div className="col-12 col-lg-4">
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
        </div>

        <div className="col-12 col-lg-4">
          <address className={cx('address')}>
            <a href={'mailto:lee@openfloor.kr'}>lee@openfloor.kr</a>
            <p>82 10-1234-5678</p>
          </address>
          <div className={cx('copyright')}>
            <p>
              © <strong>Openfloor, Inc.</strong> ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </div>
      {/* \\ content column */}
    </div>
  </footer>
)

export default Footer
