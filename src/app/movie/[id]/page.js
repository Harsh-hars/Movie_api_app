import React from 'react'
import Image from 'next/image'

// here is type folder called slug used to create dynamic route

import styles from "@/app/styles/common.module.css"
const page = async ({ params }) => {
    const id = params.id;

    // bring the data of specific card or movie using id 
    const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '4194c7a87amshf83f720b3b9948ep155133jsn3b51d1a923b7',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };

   

    const responce = await fetch(url, options)
    const data = await responce.json();
    // data for 1 
    const maindata = data[0].details;
    console.log(maindata); 

    return (
        <div className={styles.container}>
            <h2 className={styles.movie_title} > Netflix \ <span> {maindata.type} </span></h2>
            <div>
                <Image src={maindata.backgroundImage.url} alt={maindata.title} width={600} height={300} />
            </div>
            <div>
                <h1>{maindata.title}</h1>
                <p>{maindata.synopsis}</p>
            </div>
        </div>
    )
}

export default page
