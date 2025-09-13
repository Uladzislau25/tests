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

export const student = {
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
    techologies: [
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