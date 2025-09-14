import {CityTape, multiply, splitIntoWords, sum} from "./01.ts";
import {test, expect, beforeEach} from "vitest";

let a: number;
let b: number;
let c: number;

beforeEach(() => {
    a = 1;
    b = 2;
    c = 3;
})

test('sum should be correct', () => {
    //

    const result = sum(a, b);
    const result1 = sum(a, c);
    // expect result

    expect(result).toBe(3);
    expect(result1).toBe(4);
})

test('multiply should be correct', () => {


    //


    const result = multiply(a, b);
    const result1 = multiply(a, c);
    // expect result

    expect(result).toBe(2);
    expect(result1).toBe(3);
})
test("splitting into words should be correct", () => {
    const sent1 = "Hello my friend!";
    const sent2 = "JS - the best  programming language";

    const result1 = splitIntoWords(sent1);
    const result2 = splitIntoWords(sent2);

    expect(result1.length).toBe(3);
    expect(result1[0]).toBe("hello");
    expect(result1[1]).toBe("my");
    expect(result1[2]).toBe("friend");
    expect(result2.length).toBe(5);
    expect(result2[0]).toBe("js");
    expect(result2[1]).toBe("the");
    expect(result2[2]).toBe("best");
    expect(result2[3]).toBe("programming");
    expect(result2[4]).toBe("language");
})

let countru: CityTape;

beforeEach(() => {
    countru = {
        title: "New York",
        houses: [{
            bildedAt: 2012,
            repaired: false,
            address: {
                number: 100,
                street: {
                    tittle: "White street"
                }
            }
        }, {
            bildedAt: 2008,
            repaired: false,
            address: {
                number: 100,
                street: {
                    tittle: "Happy street"
                }
            }
        }, {
            bildedAt: 2020,
            repaired: false,
            address: {
                number: 101,
                street: {
                    tittle: "Happy street"
                }
            }}],
        governmentBuildings: [{
            type: "HOSPITAL",
            budget: 200000,
            staffCount: 200,
            address: {
                street: {
                    tittle:"Central Str"
                }
            }
        },{
            type: "FIRE-STATION",
            budget: 500000,
            staffCount: 1000,
            address: {
                street: {
                    tittle:"South Str"
                }
            }
        }],
        cityzensNumber: 1000000
    }
})
test("test city should contains 3 houses", () => {
    expect(countru.houses.length).toBe(3);

    expect(countru.houses[0].bildedAt).toBe(2012);
    expect(countru.houses[0].repaired).toBe(false);
    expect(countru.houses[0].address.number).toBe(100);
    expect(countru.houses[0].address.street.tittle).toBe("White street");

    expect(countru.houses[1].bildedAt).toBe(2008);
    expect(countru.houses[1].repaired).toBe(false);
    expect(countru.houses[1].address.number).toBe(100);
    expect(countru.houses[1].address.street.tittle).toBe("Happy street");

    expect(countru.houses[2].bildedAt).toBe(2020);
    expect(countru.houses[2].repaired).toBe(false);
    expect(countru.houses[2].address.number).toBe(101);
    expect(countru.houses[2].address.street.tittle).toBe("Happy street");

})

test("test city should contains hospital and fire stations",() => {
    expect(countru.governmentBuildings.length).toBe(2);

    expect(countru.governmentBuildings[0].type).toBe("HOSPITAL");
    expect(countru.governmentBuildings[0].budget).toBe(200000);
    expect(countru.governmentBuildings[0].staffCount).toBe(200);
    expect(countru.governmentBuildings[0].address.street.tittle).toBe("Central Str");

    expect(countru.governmentBuildings[1].type).toBe("FIRE-STATION");
    expect(countru.governmentBuildings[1].budget).toBe(500000);
    expect(countru.governmentBuildings[1].staffCount).toBe(1000);
    expect(countru.governmentBuildings[1].address.street.tittle).toBe("South Str");
})