export class Film {
    title: string
    episode_id: number
    opening_crawl: string
    director: string
    producer: string
    release_date: Date
    characters: string[]
    planets: string[]
    starships: string[]
    vehicles: string[]
    species: string[]
    url: string
    created: string
    edited: string
}

export class FilmList{
    count: number
    next: string
    previous: string
    results : Film[]   
}


