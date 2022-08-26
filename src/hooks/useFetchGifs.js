import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/GetGifs';

export const useFetchgifs = ( category ) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( ()=>{
        getGifs(category)
            .then(imgs =>{
                //Ponerlo un poco mas lento a proposito
                // setTimeout( ()=> {
                //     setState({
                //         data:imgs,
                //         loading: false
                //     })
                // },3000)
                setState({
                    data:imgs,
                    loading: false
                })
            })
    }, [category]);


    return state; // {data: [], loading true}
}