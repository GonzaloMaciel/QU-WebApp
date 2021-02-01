export class Planet {
    climate: string
    created: Date
    diameter: number
    edited: Date
    films: string[]
    gravity: number
    name: string
    orbital_period: number
    population: number
    residents: string[]
    rotation_period: number
    surface_water: number
    terrain: string
    url: string
}

export class PlanetList{
    count: number
    next: string
    previous: string
    results : Planet[]   
}
