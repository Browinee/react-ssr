# React SSR 
 A simple ssr framework with react, redux, redux-thunk, react-router-config, etc.
 The key point is how to handle js and css in both server side and client side.
- js:
  
  - [StaticRouter](https://reactrouter.com/web/guides/quick-start)
  - [react-router-config](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config)
  - store
    - Use static function loadData in component to query data when rendering in server side.
    - Inject to global window.
    - In client side, check if data in window exists and do query data in componentDidMount.
  - route  
    - Use staticRouter in server side and put context in it.
    - Use browserRouter in client side.
    - Use static route.
- css:
  - [isomorphic-style-loader](https://github.com/kriasoft/isomorphic-style-loader)
 

## Guide
- yarn
- set config
- npm run dev


## Reference
- [React服務器渲染原理解析與實踐](https://coding.imooc.com/learn/list/276.html)

## LICENSE

MIT
