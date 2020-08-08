import React from 'react';
import Movie from './Movie';
import Sdata  from './Sdata';
const Bookmovie = () =>
{
    //const [total,setTotal] = useState(0)
    //const InputEvent=(props)=>{};
    const ncard=(val)=>{
        return  (<Movie 
        imgsrc= {val.imgsrc}
        moviecat={val.moviecat}
        movietitle={val.movietitle}
        link={val.link}
        />);}
        
    return <>
    <div class = "container">{Sdata.map(ncard)}</div></>;
       
} ;
export default Bookmovie;