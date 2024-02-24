import { Request, Response, NextFunction } from 'express';
import z from 'zod'

const UserSchema = z.object({
  username: z.string().min(5, 'at least 5 chars').max(50, 'at most 50 chars'),
  email: z.string().email(),
});

type User = z.infer<typeof UserSchema>;


const validateAccount = (req: Request<unknown, unknown, User>, res: Response, next: NextFunction) => {
  const validation = UserSchema.safeParse(req.body);

  if(!validation.success){
    return res.status(400).json({errors: validation.error.issues})
  }

  next();
}


export default { validateAccount }


// const validateAccount = (req: Request, res: Response, next: NextFunction) => {
//   const valid = validate(req.body);

//   if (!valid) {
//       const betterErrors = betterAjvErrors({
//           schema,
//           data: req.body,
//           errors: validate.errors,
//           basePath: '',
//       });

//       res.status(400).json({
//           error: betterErrors,
//       });
//       return;
//   }

//   next();
// };
