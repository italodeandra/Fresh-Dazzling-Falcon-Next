import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const Header = (props) => {
  return (
    <>
      <div className={`header-container ${props.rootClassName} `}>
        <div className="header-container1">
          <img
            alt={props.pastedImage_alt}
            src={props.pastedImage_src}
            className="header-pasted-image"
          />
          <div className="header-container2">
            <Link href="/">
              <a className="header-link">{props.text}</a>
            </Link>
            <Link href="/portfolio">
              <a className="header-link1">{props.text1}</a>
            </Link>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .header-container {
            flex: 0 0 auto;
            width: 100%;
            height: 86px;
            display: flex;
            position: relative;
            align-items: flex-start;
            justify-content: center;
          }
          .header-container1 {
            flex: 0 0 auto;
            width: var(--dl-size-size-maxwidth);
            height: 100%;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .header-pasted-image {
            width: 238px;
            padding: var(--dl-space-space-unit);
          }
          .header-container2 {
            flex: 0 0 auto;
            width: var(--dl-size-size-xxlarge);
            height: 100%;
            display: flex;
            align-items: center;
            margin-left: auto;
            justify-content: center;
          }
          .header-link {
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            margin-right: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .header-link1 {
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            text-decoration: none;
          }
        `}
      </style>
    </>
  )
}

Header.defaultProps = {
  text1: 'Portfolio',
  pastedImage_alt: 'pastedImage',
  text: 'Home',
  rootClassName: '',
  pastedImage_src: '/playground_assets/pastedimage-pjhs-200h.png',
}

Header.propTypes = {
  text1: PropTypes.string,
  pastedImage_alt: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  pastedImage_src: PropTypes.string,
}

export default Header
