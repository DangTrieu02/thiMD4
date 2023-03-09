import { Request, Response } from "express";
export declare class StudentController {
    index(req: Request, res: Response): Promise<void>;
    showCreate: (req: any, res: any) => void;
    create: (req: Request, res: Response) => void;
    showInfo(req: Request, res: Response): Promise<void>;
    delete(req: Request, res: Response): Promise<void>;
    update(req: Request, res: Response): Promise<void>;
    showUpdate(req: Request, res: Response): Promise<void>;
}
