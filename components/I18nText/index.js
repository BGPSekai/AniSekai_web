import React from 'react'
import { withI18next } from '../../lib/withI18next'

export default withI18next()(({ t, children }) => (
    <>
        {t(children)}
    </>
))