import Nav from './sections/Nav'
import Hero from './sections/Hero'
import ShowedProjects from './sections/ShowedProjects'
import Galery from './sections/Gallery'
import Cube from './sections/Cube'

function App() {

  

  return (
    <>
      <Nav />
      <Hero />
      <div className="h-[500px]"></div>
      <ShowedProjects /> 
      <Galery />
      <div className="h-[800px]"></div>
      <Cube />
      <div className="h-[800px]"></div>


    </>
  )
}


export default App
