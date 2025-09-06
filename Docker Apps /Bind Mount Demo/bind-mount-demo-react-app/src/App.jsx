import './App.css'

function App() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Bind-Mount Docker Application</h1>
      <code style={{ padding: "0.5rem", background: "#d3d3d3", borderRadius: "0.5rem" }}>{`/dist [HOST PATH] < > /app/dist [CONATINER PATH]`}</code>
      <p>Any changes that will occur on the local <code>/dist</code> folder will get refelected in the application running in the container in real time, without need to rebuild the application image and running a new conatiner.</p>
    </>
  )
}

export default App
