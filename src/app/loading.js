import React from 'react'
import styles from '@/app/styles/common.module.css'

// loading animation using css u can use loading.io for 
// getting animation

const loading = () => {
  return (
   <section className={styles.loading_section}>
    <div className={styles.loading}>
    </div>
   </section>
  )
}

export default loading
