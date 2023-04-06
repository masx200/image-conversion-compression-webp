declare const wrapasynclimit: <T extends (...args: any[]) => Promise<any>>(fun: T) => T;
export { wrapasynclimit };
