import React from 'react'
import { connect } from 'react-redux'
import Button from 'antd/lib/button'
import { withI18next } from '../lib/withI18next'

class Counter extends React.Component {
  static async getInitialProps ({ isServer, req }) {
    return { isServer, title: (typeof req.t === 'function' ? req.t('appName') : '') }
  }

  render () {
    const { t } = this.props
    return (
      <div>
        {t('appName')}
        <Button>Welcome</Button>
      </div>
    )
  }
}

const mapDispatchToProps = () => {
  return {
  }
}

export default connect(null, mapDispatchToProps)(withI18next()(Counter))
