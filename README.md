# React RTK with complete CRUD operations with JSON server locally

Live Project link: https://sadman-expense-tracker.netlify.app/

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

# Setup store & Add transactions in Form

1. Add the `store` over app level in `main`
2. In `Form` component, we introduced `name, type and amount` constants to take the value from form level and we `dispatch` them to `createTransaction` action to create the transaction object and also it gets the state properly and update our server.

# List Transactions: Getting list of transactions

1. `Transactions` component updated to get the instants transactions made up and passing them by loop in to `Transaction` component to show case properly.
2. We have `isLoading`, `isError` and `Transctions` state properly in the Transactions components

# Editing Transaction

1. Fetch all the available transaction in the `transactions` component initially with the `useEffect` & `dispatching` `fetchTransactions` action
2. Reset the form after creating a transaction
3. `Cancel Edit button` introduced when `EDITING` going on, and will redirect to reset the states
4. We added `editActive` & `editInActive` actions in `reducers` in `transactionSlice` which will update a new value `editing` in our `state` level.
5. `Transaction component` introduced `dispatch` the `editActive` action when we are `clicking` the `EDIT` button
6. Form component restructured dynmically

   6.1 We set the button labels `Add Transaction` and `Update Transaction` dynamicelly

   6.2 This buttons onSubmit action is also dynamic now and we added `handleUpdate` method which will `dispatch` `changeTransaction` action.

   6.3 We introduced `editMode` state here which is default `false` and is using for the dynamic places, it is getting true automatically at first when `state.transaction` is getting `editing` attribute values and also update the state of name, type and amount with the upcoming editing values.

# Delete Transaction

1. `Delete` function workable by calling `handleDelete` when pressing the `delete button`.
2. We `dispatched` `removeTransaction` action with the id

# Calculate Final Balance

1. We are calculating the `final balance` in `Balance` component
2. We introduced a function to `separate the amounts with comma`.


# In this commit, we have updated the codebase 
1. we have mocked our API responses in this server https://mockapi.io/
2. We have created this 1 endpoint for this case with the jsons provided already in our db_videos.json
```
https://6a68b87cb2789286ad701c1f.mockapi.io/api/v1/transactions
```
3. We have updated `axios.js` to fetch the `baseURL` dynamically, so when we are in localhost, we have to follow the json server starting commands and when it is not local, it will set the URL to the mock server. We set the rules in `isLocal.js`.
4. Live link: https://sadman-expense-tracker.netlify.app/
