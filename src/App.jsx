//componenetes
import { Button } from "./componentes/Button"

import { Carta } from "./componentes/Carta";
//iconos
import { TiArrowLeftOutline, TiArrowRightOutline } from "react-icons/ti";
//estilos
import './sass/App.scss'
//hooks
import { useState, useEffect } from "react";

///es para lo de la api


///crear una funcion que retorne algo
//aqui se crea la pagina 
const App = () => {

    const [pokemonID, SetPokemonID] = useState(1);
    const [pokemonName, SetPokemonName] = useState('');
    const [pokemonEvolution, setPokemonEvolution] = useState([]);
    //PARA USAR LOS VALORES NECESITAMOS VARIABLES DE ESTADO


    //se usa el api se pude usar varias formas 
    useEffect(() => {
        console.log(pokemonID);
        getEvolution(pokemonID);
        console.log('useEfect se ejecuta')
    }
        , [pokemonID]//para que no se ejecute 2 veces el arreglo optimizando el codigp
    )
    //https://pokeapi.co/api/v2/evolution-chain/{id}/




    async function getEvolution(id) {
        const Response = await fetch(`https://pokeapi.co/api/v2/evolution-chain/${id}/`);
        console.log(Response);
        const data = await Response.json();
        console.log(data.chain.species.name);//muestra el nombre primerp

        // areeglloo de las evoluviones
        let PokemonEvoArray = []
        let pokemonLv1 = data.chain.species.name;
        let pokemonlv1Img = await getPokemonImgs(pokemonLv1);
        SetPokemonName(data.chain.species.name)
        PokemonEvoArray.push([pokemonLv1, pokemonlv1Img]);
        //  getPokemonImgs(pokemonLv1)
        // preguntar si existen mas evoluciones 
        if (data.chain.evolves_to.length !== 0) {
            let pokemonLv2 = data.chain.evolves_to[0].species.name;
            let pokemonlv2Img = await getPokemonImgs(pokemonLv2)
            PokemonEvoArray.push([pokemonLv2, pokemonlv2Img])
            console.log(PokemonEvoArray)
            if (data.chain.evolves_to[0].evolves_to.length !== 0) {
                let pokemonLv3 = data.chain.evolves_to[0].evolves_to[0].species.name;
                let pokemonLv3Img = await getPokemonImgs(pokemonLv3)
                PokemonEvoArray.push([pokemonLv3, pokemonLv3Img])

            }

        }
        setPokemonEvolution(PokemonEvoArray)

    }



    ///pedir la imagen 
    async function getPokemonImgs(name) {
        const Response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`)
        const data = await Response.json()
        console.log(data.sprites.other['official-artwork'].front_default)
        return data.sprites.other['official-artwork'].front_default
    }



    /////// 
    function prevClick() {
        if (pokemonID === 1) {
            SetPokemonID(1)
        } else {
            SetPokemonID(pokemonID - 1)
        }
    }
    /// 
    function afterClick() {
        SetPokemonID(pokemonID + 1)
    }


    ///
    return (

        <div className="app">

            {/*tarjetas*/}
            <div className={`card-containeer card${pokemonEvolution.length}`}>
                {/*pokemonEvolution.map(pokemon=> <Carta />)*/}

                {pokemonEvolution.map(pokemon =>
                    // eslint-disable-next-line react/jsx-key
                    <Carta
                        key={pokemon[0]}
                        name={pokemon[0]}
                        img={pokemon[1]}
                    />
                )}

            </div>
            {/*configuracion de los botones*/}
            <div className="buttons-container">
                <Button
                    icon={<TiArrowLeftOutline />}
                    //crear el evento del boton
                    handleClick={prevClick}
                />
                {pokemonID}
              {pokemonName}
                <Button
                    icon={<TiArrowRightOutline />}
                    handleClick={afterClick} />
            </div>
        </div>
    )

}
export { App }