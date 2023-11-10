import React from 'react'
import Link from 'next/link'
import Moviecard from '../components/Moviecard';
import styles from '@/app/styles/common.module.css'
import { resolve } from 'styled-jsx/css';

// bring the data from api
const page = async () => {
   
    // added to show loading page for 3 sec
     await new Promise(resolve=>setTimeout(resolve,3000));


    const url = process.env.RAPID_KEY;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '4194c7a87amshf83f720b3b9948ep155133jsn3b51d1a923b7',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };

    const responce = await fetch(url, options)
    const data = await responce.json();
    const maindata = data.titles;
    console.log(data);



    return (
        <>
            <section className={styles.movieSection}>
                <div className={styles.container}>
                <h2>series and movies</h2>
                <div className={styles.card_section}>  
                    {
                        maindata.map((curr) => {
                            return <Moviecard key={curr.id} {...curr} />
                        })
                    }
                    </div>
                </div>
            </section>
        </>

    )
}

export default page
