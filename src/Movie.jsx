import React from 'react';
//import Button  from '@material-ui/core/Button onclick={props.InputEvent}';
const Movie = (props) =>{
    return <>
        <div className="movies">
            <div className="poster">
                <img src={props.imgsrc} alt="moviepic" className="movimg"/> 
                <div class="movie_info">
                    <span className="movie_category">{props.moviecat}</span>
                    <h3 className='movie_title'>{props.movietitle}</h3>
                    <a href={props.link} target="_blank">
                    <button className="btn">WATCH NOW</button></a>
                </div>
            </div>
        </div>
    </>;
} ;
export default Movie ;