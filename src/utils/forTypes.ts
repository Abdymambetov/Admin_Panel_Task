export const isObject = (elm:unknown): object|null => {
    return elm !== null && 
        typeof elm === "object" &&
        Object.prototype.toString.call(elm) === "[object Object]"
        ? elm : null;
};