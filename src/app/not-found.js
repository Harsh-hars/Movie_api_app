import React from 'react'
import styles from '@/app/styles/common.module.css'
import Link from 'next/link'
const notfound = () => {
  return (
   <section className={styles.container}>
   <div className={styles.error_page}>
<h1>404</h1>
<h2>Not Found</h2>
   </div>
   <Link href='/'>
    <button>Go-To-Home</button>
   </Link>
   </section>
  )
}

export default notfound
