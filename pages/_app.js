import React from 'react'
import { Provider } from 'react-redux'
import App, { Container } from 'next/app'
import withRedux from 'next-redux-wrapper'
import { makeStore } from '../stores'
import { fromJS } from 'immutable'
import { I18nextProvider } from 'react-i18next';
import { i18nInstance } from '../i18n'
import '../app.scss'

// const mockI18n = {
//   t(k) {
//     return k;
//   },
//   on() {
//   },
//   getFixedT(k) {
//     return (k) => k;
//   },
//   loadNamespaces(arg) {
//     return (arg) => arg;
//   }
// };

class MyApp extends App {
  static async getInitialProps ({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {}

    return { ...pageProps }
  }

  render () {
    const { Component, pageProps, store } = this.props
    return (
      <Container>
        <Provider store={store}>
          <I18nextProvider i18n={i18nInstance}>
            <Component {...pageProps} />
          </I18nextProvider>
        </Provider>
      </Container>
    )
  }
}

export default withRedux(makeStore, {
  serializeState: state => state.toJS(),
  deserializeState: state => fromJS(state)
})(MyApp)
