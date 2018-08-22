import React from 'react'
import Link from 'next/link'

export default ({ linkTo }) => {
  return (
    <div>
      <nav>
        <Link href={linkTo}><a>Navigate</a></Link>
      </nav>
    </div>
  )
}
