import {atom} from  'recoil'


export interface movies {
    id:string
    movie_id: number,
    original_title: string,
    original_language:string,
    overview:string
    popularity: number,
    poster_path: string,
    backdrop_path:string,
    release_date: string,
    vote_average: number,
    vote_count: number,
    adult: number,
    created_at:string,
    updated_at: string,
    casts:string[]
}

export let moviesData = atom<movies[]>({
    key:'moviesData',
    default:undefined
})

