import { Request, Response } from 'express';
export declare const getClassrooms: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const assignClassroom: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
