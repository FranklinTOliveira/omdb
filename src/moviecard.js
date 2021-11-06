function MovieCard(props){
    const elementone = <MovieCard title="Ford" />;
    const elementtwo = <MovieCard type="Ford" />;
    const elementthree = <MovieCard posterUrl="Ford" />;
    return <><h2>Peter is a {props.title}</h2><h2>Lucy is a {props.type}</h2><h2>Susan is a {props.posterUrl}</h2></>;    
}
