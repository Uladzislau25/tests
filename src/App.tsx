import './App.css'
import {Table} from "./Table.tsx";

function App() {
  const topCars = [
    { manufacturer: 'BMW', model: 'm5cs' },
    { manufacturer: 'Mercedes', model: 'e63s' },
    { manufacturer: 'Audi', model: 'rs6' },
  ]
  return(
      <div>
        <Table cars={topCars} />
      </div>
  )
}

export default App
