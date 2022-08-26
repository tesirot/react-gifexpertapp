import React, { useState, useEffect } from 'react';
import { useFetchgifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {
    
    const { data, loading } = useFetchgifs(category);

    return (
        <>
        <h3>{ category }</h3>
        <div>
        { loading && <p>Cargando...</p>}
            {
                data.map(img =>(
                    <GifGridItem 
                    key= { img.id }
                    img= { img }
                    />
                ))
            }
        </div>
        </>
        
    )
}
