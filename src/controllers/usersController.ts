import { RequestHandler } from 'express';
import prisma from '../prisma.js';

export const getUsers: RequestHandler = async (req, res) => {
    const users = await prisma.user.findMany();
    res.json({ users });
};

export const createUser: RequestHandler = async (req, res, next) => {
  const user = await prisma.user.create({
    data: req.body,
  });

  res.status(201).json({ user });
}
export const getUser: RequestHandler = async (req, res, next) => {
    const userId = req.params.id;
    const user = await prisma.user.findUnique({
        where: { id: parseInt(userId) },
        include: {
          posts: true,
        }
    });

    if (!user) {
        return next(new Error('404'));
    }

    res.json({ user });
};

export const updateUser: RequestHandler = async (req, res, next) => {
    const userId = parseInt(req.params.id);
    const user = await prisma.user.update({
        where: { id: userId },
        data: req.body,
    });

    res.json({ user });
};

export const deleteUser: RequestHandler = async (req, res, next) => {
    const userId = parseInt(req.params.id);

    const result = await prisma.user.delete({
        where: { id: userId },
    });

    res.sendStatus(200);
};

export const getUserPosts: RequestHandler = async (req, res, next) => {
    const userId = parseInt(req.params.id);
    const user = await prisma.user.findUnique({
        where: { id: userId },
        include: { posts: true },
    });

    if (!user) {
        return next(new Error('404'));
    }

    res.json({ posts: user.posts });
};

export const getUserLikedPosts: RequestHandler = async (req, res, next) => {
    const userId = parseInt(req.params.id);

    const user = await prisma.user.findUnique({
        where: { id: userId },
        include: {
            postsLiked: true,
        },
    });

    if (!user) {
        return next(new Error('404'));
    }

    res.json({ posts: user.postsLiked });
};

export const getUserFollowedPosts: RequestHandler = async (req, res, next) => {
    const userId = parseInt(req.params.id);
    const user = await prisma.user.findUnique({
        where: { id: userId },
        include: {
            postsFollowed: true,
        },
    });

    if (!user) {
        return next(new Error('404'));
    }

    res.json({ posts: user.postsFollowed });
};