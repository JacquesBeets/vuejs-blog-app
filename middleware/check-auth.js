export default function (context) {
    console.log('Middlware Check Auth!')
    context.store.dispatch('initAuth', context.req)
}