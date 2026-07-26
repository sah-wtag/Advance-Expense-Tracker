# React RTK with complete CRUD operations with JSON server locally

# UI basic Implementation

1. We have made a basic setup and UI imeplementation in our project with some components
2. We have set up the server level codes

# We are creating APIs

1. Install & setup `AXIOs` to fetch/request URLs
2. We created the CRUD api calls in the `transactionAPI` file

# Creating Thunks & slice

1. Install RTK
2. in `transactionSlice` we have build all the asynchronous actions(`Create, Edit, Get, Delete`) in the extrareducer
3. Added the `store.js` & added the `transactionReducer` here in reudcer level.

# In this commit, Setup store & Add transactions in Form
1. Add the `store` over app level in `main`
2. In `Form` component, we introduced `name, type and amount` constants to take the value from form level and we `dispatch` them to `createTransaction` action to create the transaction object and also it gets the state properly and update our server. 