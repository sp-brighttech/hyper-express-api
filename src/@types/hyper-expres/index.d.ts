// src/@types/hyper-express/index.d.ts

import 'hyper-express';

declare module 'hyper-express' {
    export interface Response {
        response: (statusCode: number, message: string, data?: object) => void;
    }
}
