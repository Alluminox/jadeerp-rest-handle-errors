### USE The rest-handler-errors

#### Install


```js
// OR npm i rest-handle-errors 
yarn add rest-handle-errors

```

### Use helpet


```js

const express = require('express');
const { middlewares, helpers, NotFoundError } = require('rest-handle-errors')
const app = express();


//  express routers ....
// using helpers...
app.use(helpers.catchAsync(async (req, res, next) => {
    if (true) {
        throw new NotFoundError('Your message here....')
    }
}))

app.use(helpers.catchAsync(async (req, res, next) => {
    if (true) {
        throw new NotFoundError('Your message here....')
    }
}))

app.use(helpers.catchAsync(async (req, res, next) => {
    if (true) {
        throw new NotFoundError('Your message here....')
    }
}))


// use the handler
app.use(middlewares.handleError)

```