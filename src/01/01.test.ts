import {multiply, sum} from "./01.ts";
import {test, expect} from "vitest";

test('sum should be correct', () => {



    let a = 1;
    let b = 2;
    let c = 3;

    //


    const result = sum(a, b);
    const result1 = sum(a, c);
    // expect result

    expect(result).toBe(3);
    expect(result1).toBe(4);
})

test('multiply should be correct', () => {



    let a = 1;
    let b = 2;
    let c = 3;

    //


    const result = multiply(a, b);
    const result1 = multiply(a, c);
    // expect result

    expect(result).toBe(2);
    expect(result1).toBe(3);
})