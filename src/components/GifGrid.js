import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';


export const GifGrid = ({ category }) => {
    const {data:images, loading} = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            <div className="card-grid">    
                {loading && <p>Loading...</p> }        
                {
                    images.map( item => (
                        //return <li key={id} >{title}</li>
                        <GifGridItem key={item.id} {...item}/>
                    ))
                }
            </div>
        </>
    )
}
