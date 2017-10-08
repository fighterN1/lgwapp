import Router from 'koa-router';
const router = new Router();

// 首页
router.get('/', async (ctx, next)=>{
    await ctx.render('book/pages/book', {title: '书屋'});
    // ctx.body = '200';
});

export default router;
