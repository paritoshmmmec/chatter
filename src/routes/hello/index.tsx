import { component$, useStore } from '@builder.io/qwik';

export default component$(() => {
    const state = useStore({
        count: 0,
    });
    return (
        <>
            <h1>Number of candies I am going to eat this halloween : {state.count}</h1>
            <button onClick$={() => state.count++}>Increment</button>
            Count:
        </>)
})