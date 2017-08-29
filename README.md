# Google's-Delhi-Public-Transport-Clone (for Connecting Cities of Rajasthan, India)

Youtube Link - https://www.youtube.com/watch?v=_XjRur3yHoA

[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/_XjRur3yHoA/0.jpg)](https://www.youtube.com/watch?v=_XjRur3yHoA)

Demo Link - https://orangebusv1-38083.firebaseapp.com
```
Accepted City Input -> 
 
 Ajmer 
 Delhi 
 Jaipur 
 Kota 
 Mount Abu 
 Udaipur
```
Ajmer -> Mount Abu --> won't show any result, Its open for further development to show up 3 buses (2-hop) indirect routes.

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


```
Algorithms - 
Dijkstra's Algorithm, Hashing Algorithm, Haversine Formula

Efficiency - 
O(1) - Direct Buses 
o(n) - Indirect Buses (n represents no. of cities connected directly to a particular city)
o(1) - Others Details (Fetching Bus Time, Next Schedule etc from DB)  
```
