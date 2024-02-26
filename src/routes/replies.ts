import express from 'express';
import * as repliesController from '../controllers/repliesController.js';
// import validation from '../middleware/validation.js';


const router = express.Router();

router.get('/:id', repliesController.getReply);
router.put('/:id', repliesController.updateReply);
router.delete('/:id', repliesController.deleteReply);

export default router;