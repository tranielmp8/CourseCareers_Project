import { Request, Response, NextFunction } from "express"; 

const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  if(err.message === '404' || err.code === 'P2025'){
    return res.status(404).json({error: "Resource Not Found"})
  }
//   if (err.code === 'P2025') {
//     return res.status(404).json({ error: 'Resource to modify/delete not found' });
// }

  console.log('Error Message', err.message)
  console.log('Error Code', err.code)
  console.log('Error Stack', err.stack)

  // res.status(500).json({error: 'something went wrong'})
  next(err)
}

export default {
  errorHandler
}