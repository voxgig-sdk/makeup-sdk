import { Context } from './Context';
declare class MakeupError extends Error {
    isMakeupError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { MakeupError };
