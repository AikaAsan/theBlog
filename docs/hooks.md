## Custom Hooks used in the project

- **useModal** - Reusable hook for modal components (drawer/modal).
- **useScrollToElement** - Custom hook that scrolls the window to the element with the provided id.
- **useTheme** - Reusable hook for switching between themes.
- **useThrottle** -  ensures that a function is not called more than once within a specified delay period.
- **useDebounce** -  enables you to debounce the execution of a callback function. It is particularly useful when you want to delay the invocation of a function until a specified amount of time has passed since the last time it was called.
- **useInitialEffect** - runs a callback function once after the initial render, provided the environment is neither 'storybook' nor 'jest'.
- **useInfiniteScroll** -  triggers a callback function when an element (trigger) intersects with a wrapper element. Commonly used for implementing infinite scrolling.
- **useHover** -  tracks whether a mouse is hovering over an element.
- **useAppDispatch** -  provides the dispatch function from Redux's store with specific type 'AppDispatch'.