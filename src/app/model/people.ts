export class People {
    birth_year: string
    eye_color: string
    films: string[]
    gender: string
    hair_color: string
    height: number
    homeworld: string
    mass: number
    name: string
    skin_color: string
    created: Date
    edited: Date
    species: string[]
    starships: string[]
    url:string
    vehicles: string[]
}

export class PeopleList{
    count: number
    next: string
    previous: string
    results : People[]   
}
