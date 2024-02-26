import { RequestHandler } from "express"; 

const notFound: RequestHandler = (req, res, next) => {
  return res.status(404).send({error: 'Route Not Found, check your request'})
}

export default notFound;