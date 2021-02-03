export default ({app}) => {
  // Every time the route changes (fired on initialization too)
  app.router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      console.log('Required authentication.')
      if (localStorage.getItem('jwt') == null) {
        next({
          path: '/login',
        })
      } else {
        let user = JSON.parse(localStorage.getItem('user'));
        console.log(user);
        next({name: 'timeline'})
      }
    }
  });
}
