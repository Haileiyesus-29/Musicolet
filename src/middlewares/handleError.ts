import { NextFunction, Request, Response } from 'express'

export async function handleError(
   error: any,
   req: Request,
   res: Response,
   next: NextFunction
): Promise<void> {
   console.trace(error())
   res.status(500).send('Internal server error')
}

export default handleError
