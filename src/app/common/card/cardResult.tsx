import { Pokemon } from '@/app/types/Pokemons';
import  './styles.css'



export const  CardResults = (pokemon:Pokemon) => {



  return (
    <>
        <div>

            <img src={pokemon.url} alt={pokemon.name} />

            <div>

                <div>

                    <h2>{pokemon.name}</h2>
                    <p>N.° {pokemon.id}</p>

                </div>

                <div>

                    <span>

                        {/*<img src="" alt="" />*/}
                        <p>{pokemon.type?.type?.name}</p>
                        
                    </span>
                    
                </div>

                <a href={pokemon.id}>
                    
                    <span>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_251_2455)">
                                <path d="M20 10C20 9.875 20 9.75 20 9.625C19.75 4.25 15.375 0 10 0V10H20Z" fill="#D32F2F"/>
                                <path d="M10 10V0C9.875 0 9.75 0 9.625 0C4.25 0.25 0 4.625 0 10H10Z" fill="#EF5350"/>
                                <path d="M0 10V10.375C0.25 15.75 4.625 20 10 20V10H0Z" fill="#F0F0F0"/>
                                <path d="M10 10V20H10.375C15.75 19.75 20 15.375 20 10H10Z" fill="#CFD3D4"/>
                                <path d="M10 9.375V10.625H0C0 10.375 0 10.25 0 10C0 9.75 0 9.625 0 9.375H10Z" fill="#5B5C5F"/>
                                <path d="M20 10V10.625H10V9.375H20V10Z" fill="#212121"/>
                                <path d="M10 15C12.75 15 15 12.75 15 10C15 7.25 12.75 5 10 5V15Z" fill="#212121"/>
                                <path d="M10 5C7.25 5 5 7.25 5 10C5 12.75 7.25 15 10 15V5Z" fill="#5B5C5F"/>
                                <path d="M10 7.5C11.375 7.5 12.5 8.625 12.5 10C12.5 11.375 11.375 12.5 10 12.5V7.5Z" fill="#CFD3D4"/>
                                <path d="M10 12.5C8.625 12.5 7.5 11.375 7.5 10C7.5 8.625 8.625 7.5 10 7.5V12.5Z" fill="#F0F0F0"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_251_2455">
                                <rect width="20" height="20" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                    </span>

                    View Details

                </a>

            </div>

        </div>
    </>
  );
}
