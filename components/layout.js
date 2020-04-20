import Alert from '../components/alert'
import Footer from '../components/footer'
import Meta from '../components/meta'

import React from 'react'
import { initGA, logPageView } from '../utils/analytics'

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Alert preview={preview} />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default class Layout extends React.Component {
  componentDidMount() {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}
