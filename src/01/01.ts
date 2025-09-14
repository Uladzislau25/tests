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

export type CityTape = {
    title: string
    houses: Array<string>
    governmentBuildings: string[]
    cityzensNumber: number

}
