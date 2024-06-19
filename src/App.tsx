import useToggle from "./hooks/Toggle"

function App() {

  const [theme, setTheme] = useToggle('theme', 'light');

  const handleToggle = () => {
    setTheme((theme:string) => theme==='light' ? 'dark' : 'light')
  }

  return (
    <div className="light-dark-theme" data-theme={theme}>
      <div className="">Change Theme</div>
      <button onClick={handleToggle}>Click Me</button>
    </div>
  )
}

export default App
