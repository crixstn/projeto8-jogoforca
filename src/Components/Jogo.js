import { useState } from 'react';
import styled from 'styled-components';

export default function Jogo({palavras, setPalavra, palavragame, setPalavragame, setlSelec, erros, setErros, setDesabilitado, respostaPalavra, setRespostaPalavra}){

    function EscolherPalavra(){
        let i = Math.floor(Math.random() * palavras.length);
        const sortPalavra = (palavras[i].split(""));
        const rendPalavra = [];
        setDesabilitado("letraHabilitada");
        setRespostaPalavra("");
        setErros(0)
        setlSelec([]);
           
        console.log(sortPalavra)
        setPalavra(sortPalavra);
        for(let i = 0; i < sortPalavra.length; i++){
            rendPalavra.push("_ ");
        }
        setPalavragame(rendPalavra);
    }


    return(
        <Main>
                <img data-test="game-image"
                src={`Assets/forca${erros}.png`}
                />

                <div>
                    <button data-test="choose-word" onClick={EscolherPalavra}>
                        Escolher Palavra
                    </button>

                    <h1 data-test="word" data-answer={palavragame} className={respostaPalavra}>
                        {palavragame}
                    </h1>
                </div>

        </Main>
    )
}

const Main = styled.div `
display: flex;
justify-content: space-between;

    img{
        width: 400px;
    }

    div{
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-end;

        button{
            width: 200px;
            height: 60px;
    
            background: #27AE60;
            border-radius: 8px;
            border: none;
    
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 700;
            font-size: 20px;
            line-height: 23px;
            color: #FFFFFF;
            cursor: pointer;
        }

        h1{
            font-family: 'Noto Sans';
            font-weight: 700;
            font-size: 50px;
            line-height: 68px;
            display: flex;
        }
    }

`;