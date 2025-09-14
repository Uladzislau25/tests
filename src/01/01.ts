export function sum(a: number, b: number) {
    return a + b;
}

export function multiply(a: number, b: number) {
    return a * b;
}

export function splitIntoWords(sentense: string) {
    return sentense.toLowerCase().split(" ")
        .filter(w => w !== "" && w !== "-")
        .map(w => w
            .replace(",", "")
            .replace(".", "")
            .replace("!", ""));
}

export type StreetType = {
    tittle: String
}
export type AddressType = {
    number: number;
    street: StreetType
}
export type HouseType = {
    bildedAt: number
    repaired: boolean
    address: AddressType
}
export type CityTape = {
    title: string
    houses: HouseType[]
    governmentBuildings: string[]
    cityzensNumber: number
}
