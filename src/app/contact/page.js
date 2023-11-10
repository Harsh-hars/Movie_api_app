import React from 'react'
import styles from '@/app/styles/contact.module.css'
import Contactcard from '../components/Contactcard'
import Contactform from '../components/Contactform'

const page = () => {
  return (
    <>
      <div className={styles.container}>
            <h1>Contact Us</h1>
            <Contactcard />

                <section className={styles.contact_section}>
                    <h2>We'd love to hear <span> from you </span></h2>

                    <Contactform />
                </section>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113579.63882756351!2d77.897610732118!3d27.176303143874073!2m3!
            1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39740d857c2f41d9%3A0x784aef38a9523b4
            2!2sAgra%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1698326635512!5m2!1sen!2sin"
             width={600} height={450} style={{border:0 }}allowfullscreen="" loading="lazy" 
             referrerpolicy="no-referrer-when-downgrade" className={styles.mapping}></iframe>
    </>
  )
}

export default page
