import prisma from './prisma.js';

await prisma.post.deleteMany();
await prisma.user.deleteMany();

await prisma.user.createMany({
  data: [
    {name: "kakashi", email: 'kakashi@gmai.com', username: 'kakashi'},
    {name: "sasuke", email: 'sasuke@gmai.com', username: 'sasuke'},
    {name: "itachi", email: 'itachi@gmai.com', username: 'itatchi'},
  ]
});

const user = await prisma.user.findFirst();

await prisma.post.createMany({
  data: [
    {title: '1st post title', body: 'first post body', userId: user?.id!},
    {title: '2nd post title', body: 'second post body', userId: user?.id!}
  ]
})