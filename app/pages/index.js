import React from 'react'
import { connect } from 'react-redux'
import Button from 'antd/lib/button';

class Counter extends React.Component {
  static async getInitialProps ({ isServer }) {
    return { isServer, title: 'Welecom Ani Sekai' }
  }

  render () {
    return (
      <div>
        Hello AniSekai
        <Button>Welcome</Button>
      </div>
    )
  }
}

const mapDispatchToProps = () => {
  return {
  }
}

export default connect(null, mapDispatchToProps)(Counter)
