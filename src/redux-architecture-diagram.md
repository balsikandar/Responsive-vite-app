# Redux Architecture Diagram and Explanation

## Diagram

```
+-------------------+          +------------------+          +---------------------+
|                   |          |                  |          |                     |
|  React Components +---------->  Redux Store     +---------->  Tab Slice Reducer   |
|  (App, TabPage)   |  Dispatch|  (Central State) |  State   |  (selectedTab state) |
|                   |          |                  |          |                     |
+-------------------+          +------------------+          +---------------------+
        ^                             |
        |                             |
        +-----------------------------+
               useSelector Hook
```

## Explanation

- **React Components**: Components like `App` and `TabPage` use React-Redux hooks (`useSelector` and `useDispatch`) to interact with the Redux store.
- **Dispatching Actions**: When a user selects a tab, the `App` component dispatches the `setSelectedTab` action to update the state.
- **Redux Store**: The store holds the entire application state. It is configured with the `tab` slice reducer.
- **Tab Slice Reducer**: This reducer manages the `selectedTab` state. It listens for the `setSelectedTab` action and updates the state accordingly.
- **State Subscription**: Components subscribe to the store using `useSelector` to get the current `selectedTab` value and render the appropriate UI.

This architecture ensures a unidirectional data flow and centralized state management, making the app predictable and easier to debug.
