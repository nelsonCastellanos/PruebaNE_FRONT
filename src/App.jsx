import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddNote from './components/AddNote'
import Header from './components/Header'
import ItemNoteCount from './components/ItemNoteCount'
import ItemNoteDetail from './components/ItemNoteDetail'
import ListNoteDetail from './components/ListNoteDetaill'
import ModalAddNote from './components/ModalAddNote'
import { Provider } from 'react-redux';
import { store } from './store'


function App() {
  const [count, setCount] = useState(0)
  const itemTitle = [{ title: "primer titulo", description: "primera descripcion", icono: "primer icono" }, { title: "segundo titulo", description: "segundo descripcion", icono: "segundo icono" }, { title: "tercer titulo", description: "tercer descripcion", icono: "tercer icono" }]
  return (
    <>
    <Provider store={store}>
      <Header />
      {itemTitle.map((data, index) => (
        <ItemNoteCount
          key={index}
          title={data.title}
          description={data.description}
          icon={data.icon}
        />
      ))}
      <AddNote /> 
      <ItemNoteCount /> 
      <ItemNoteDetail />
      <ListNoteDetail />  
      <ModalAddNote />
      <h1 className='bg-red-500
      '>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      </Provider>
    </>
  )
}

export default App