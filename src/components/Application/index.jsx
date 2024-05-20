import { useEffect, useState } from "react";
import axios from 'axios';

import { CardCharacter } from "../CardCharacter";

import { ContainerApp, HeaderApp, ContentCharacters, PesquisarInput } from "./styles";

export function Application() {
    const [characters, setCharacters] = useState([]);
    const [page, setPage] = useState(1);
    const [countPages, setCountPages] = useState('');
    const [searchTerm, setSearchTerm] = useState('');  // State to store search term

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character?page=${page}`)
        .then(response => {
            const array = [...characters, ...response.data.results]; // Spread to maintain previous characters
            setCharacters(array);
            setCountPages(response.data.info.pages); // Total number of pages available
        });
    }, [page]);

    // Function to handle search input changes
    function handleSearchChange(event) {
        setSearchTerm(event.target.value.toLowerCase());
    }

    // Filter characters based on search term
    const filteredCharacters = characters.filter(character =>
        character.name.toLowerCase().includes(searchTerm)
    );

    return (
        <>
            <ContainerApp>
                <HeaderApp>
                    <h1>Ricky and Morty</h1>
                    <PesquisarInput>
                        <input
                            type="text"
                            placeholder="Pesquise Personagem"
                            onChange={handleSearchChange}  // Set up onChange to handle search
                        />
                    </PesquisarInput>
                    <span>Nº de Personagens {filteredCharacters.length}</span>  
                </HeaderApp>
                <ContentCharacters>
                    <div>
                        {filteredCharacters.length > 0 ? (
                            filteredCharacters.map(({ id, image, name, species, gender }) => (
                                <CardCharacter
                                    key={id}  // Use unique 'id' for key instead of index
                                    image={image}
                                    name={name}
                                    genre={gender}
                                    specie={species}
                                />
                            ))
                        ) : (
                            <div>Nada encontrado</div>  // Display message if no characters found
                        )}
                    </div>
                    {page !== countPages && (
                        <button onClick={() => setPage(page + 1)}>Carregar mais</button>
                    )}
                </ContentCharacters>
            </ContainerApp>
        </>
    );
}
