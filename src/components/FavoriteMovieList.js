import React from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux'


const FavoriteMovieList = (props) => {
    
   if (props.displayFavorites) 
    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            props.favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span><span className="material-icons">remove_circle</span></span>
                    </Link> 
                </div>
            })
        }
    </div>);

    return (<></>);
}

const mapStateToProps = state => {
    return {favorites: state.favoritesReducer.favorites,
        displayFavorites: state.favoritesReducer.displayFavorites
    }
}

export default connect(mapStateToProps, {})(FavoriteMovieList);