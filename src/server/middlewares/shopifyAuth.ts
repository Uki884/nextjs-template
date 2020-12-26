import shopifyAuth from '@shopify/koa-shopify-auth'

const { SHOPIFY_API_KEY, SHOPIFY_API_SECRET, SCOPES } = process.env

export default () => {
  return shopifyAuth({
    apiKey: SHOPIFY_API_KEY as string,
    secret: SHOPIFY_API_SECRET as string,
    scopes: [SCOPES as string],
    afterAuth(ctx) {
      ctx.redirect('/')
    }
  })
}
