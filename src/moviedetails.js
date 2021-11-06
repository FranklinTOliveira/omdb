function MovieDetails(props){
    const elementone = <MovieCard title="Ford" />;
    const elementtwo = <MovieCard rated="Ford" />;
    const elementthree = <MovieCard posterUrl="Ford" />;
    const elementfour = <MovieCard runtime="Ford" />;
    const elementfive = <MovieCard genre="Ford" />;
    const elementsix = <MovieCard plot="Ford" />;
    const elementseven = <MovieCard actors="Ford" />;
    const elementeight = <MovieCard rating="Ford" />;
    return <><h2>Peter is a {props.title}</h2><h2>Edmund is a {props.rated}</h2><h2>Susan is a {props.posterUrl}</h2>
    <h2>Lucy is a {props.runtime}</h2><h2>Rabadash is a {props.genre}</h2><h2>Aslan is a {props.plot}</h2><h2>Jadis is a {props.actors}</h2><h2>Jill is a {props.rating}</h2></>;    
}
