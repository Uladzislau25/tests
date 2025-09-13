export function sum(a:number, b:number){
    return a + b;
}
export function multiply(a:number, b:number){
    return a * b;
}
export function splitIntoWords(sentense: string){
    return sentense.toLowerCase().split(" ")
        .filter(w=> w !== "" && w !== "-")
        .map(w =>w
            .replace(",", "")
            .replace(".", "")
            .replace("!", ""));
}

type CityTape = {
    title: string
    country: string
}
type AdressType = {
    street: string
    city: CityTape
}
type TechType = {
    id: number
    title: string

}
type StydentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    adress: AdressType
    technologies: TechType[]
}

export const student: StydentType = {
    id: 1,
    name: "Dimych",
    age: 32,
    isActive: false,
    adress: {
        street: "Surganova 2",
        city: {
            title: "Minsk",
            country: "Belarus"
        }
    },
    technologies: [
        {
            id: 1,
            title: "HTML",
        },
        {
            id: 2,
            title: "CSS",
        },
        {
            id: 3,
            title: "Javascript",
        }
    ]
}