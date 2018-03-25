import Module from 'evoozer/Module';

const setupRouter = ['routerProvider', routerProvider => {
  routerProvider
    .when('/', { Component: () => 'Hello world :-)' })
    .otherwise({
      head: {
        // [type]: [string] => { innerHTML: [string] }
        // [type]: [object]
        title: 'Page not found'
      },
      http: { statusCode: 404 },
      Component: () => 'Page not found'
    });
}];

export default new Module()
  .config(setupRouter)
  .run(() => console.log('hello world I am new here MOHAHAHA'));
