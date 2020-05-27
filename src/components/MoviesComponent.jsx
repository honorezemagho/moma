import React, {Component} from 'react';
import {getMovies} from "../services/fakeMovieService";
import Like from './common/like';
import Pagination from "./common/pagination";

class Movies extends Component{
state = {
    movies : getMovies(),
}

    handleDelete  = (movie) => {
    const movies = this.state.movies.filter(m => m._id !== movie._id)
        this.setState({movies})
    }

    handleLike  = (movie) => {
   /* const movies = this.state.movies.map(m => !(m._id.liked));*/
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = {...movies}
        movies[index].liked = !movies[index].liked;
        this.setState({movies})
    }

    render() {
    const {length: MoviesCount} = this.state.movies;
if(MoviesCount === 0)
    return <p> There are no movies in the database</p>;

        return( <React.Fragment>
        <table className="table">
            <p> Showing {MoviesCount} movies in the database</p>
            <thead>
            <tr>
                <th>Title</th>
                <th>Genre</th>
                <th>Stock</th>
                <th>Rate</th>
                <th/>
                <th/>
            </tr>
            </thead>
            <tbody>
            {this.state.movies.map(movie => {
                return <tr key={movie._id}>
                    <td>{movie.title} </td>
                    <td>{movie.genre.name} </td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate} </td>
                    <td> <Like liked={movie.liked}
                    onClick={() => this.handleLike(movie)}/> </td>
                    <td><button className="btn btn-danger btn-sm"
            onClick={() => this.handleDelete(movie)}>Delete</button></td>
                </tr>
            })}
            </tbody>
        </table>
       <Pagination/>
        </React.Fragment>
        );
    }
}

export default Movies;