import axios from 'axios';

export const Products = ({dados}) => (
    <div>
        <h1>Produtos</h1>
        {console.log(dados)}
        <ul>
            {dados.map(movie => (
                <li>
                    <h2>{movie.title}</h2>
                </li>
            ))}
        </ul>
    </div>
);

Products.getInitialProps = async () => {
    const response = await axios.get(
        'http://localhost:3000/api/movies'

    );
    return{ dados : response}
}
