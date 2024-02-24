import { Request, Response, NextFunction } from "express"; 

const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  console.log('Error Message', err.message)
  console.log('Error Code', err.code)
  console.log('Error Stack', err.stack)

  // res.status(500).json({error: 'something went wrong'})
  next(err)
}

export default {
  errorHandler
}