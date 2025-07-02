import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddNote from './components/AddNote'
import Header from './components/Header'
import ItemNoteCount from './components/ItemNoteCount'
import ListNoteDetail from './components/ListNoteDetaill'
import ModalAddNote from './components/ModalAddNote';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import DescriptionIcon from '@mui/icons-material/Description';
import { Provider } from 'react-redux';
import { store } from './store'


function App() {
  const [count, setCount] = useState(0)
  const [showModal, setShowModal] = useState(false)
  const itemTitle = [
    { title: "Total Recaudado", description: "$0", icon: <MonetizationOnIcon fontSize="large" /> },
    { title: "Incidencias", description: "0", icon: <WarningAmberIcon fontSize="large" /> },
    { title: "Total Notas", description: "0", icon: <DescriptionIcon fontSize="large" /> },
  ];
  return (
    <>
    <Provider store={store}>
      <Header />
      <div className="main-grid-container flex flex-col gap-8 max-w-[1550px] mx-auto my-4 px-0 pt-12">
        <div className="flex flex-row gap-6 justify-between items-center flex-wrap">
          {itemTitle.map((data, index) => (
            <ItemNoteCount
              key={index}
              title={data.title}
              description={data.description}
              icon={data.icon}
              index={index}
            />
          ))}
        </div>
        <div className="flex flex-row gap-6 items-center flex-nowrap w-full justify-between">
          <div className="shrink-0 h-full flex items-stretch">
            <div className="h-full flex items-stretch">
              <AddNote onOpenModal={() => setShowModal(true)} />
            </div>
          </div>
          <div className="flex-1 flex justify-end min-w-[350px] max-w-[600px]">
            <ListNoteDetail />
          </div>
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-white bg-opacity-40 flex items-center justify-center z-50">
            <ModalAddNote onClose={() => setShowModal(false)} />
        </div>
      )}
    </Provider>
    </>
  )
}

export default App