# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React's `useEffect` hook: creating an infinite loop by modifying state variables within the effect without proper dependency management.

## Bug Description
The `MyComponent` function uses `useEffect` to increment a counter.  However, the dependency array is empty (`[]`), causing the effect to run on every render. Each time the effect runs, it updates the `count` state, triggering another render, resulting in an infinite loop and crashing the application.

## Solution
The solution involves correctly specifying dependencies in the `useEffect` dependency array.  If the effect depends on `count`, `count` should be included in the dependency array. Alternatively, if the effect should only run once, add the empty array [ ] to run once after the component mounts. 

## How to Reproduce
1. Clone this repository.
2. Run `npm install`.
3. Run `npm start`.
4. Observe the infinite loop in your browser's console.