```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic: The effect only runs once after mounting.
    // Alternatively, include count to the dependency array to allow the function to run every time count changes
    const intervalId = setInterval(() => {
        setCount(prevCount => prevCount + 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return <div>Count: {count}</div>;
}
```