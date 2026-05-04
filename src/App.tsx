import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Museo from './pages/Museo'
import MuseoStoria from './pages/MuseoStoria'
import MuseoServizi from './pages/MuseoServizi'
import MuseoContatti from './pages/MuseoContatti'
import MuseoLibreria from './pages/MuseoLibreria'
import MuseoSede from './pages/MuseoSede'
import PAU from './pages/PAU'
import Itinerari from './pages/Itinerari'
import ItinerarioPage from './pages/ItinerarioPage'
import Chiese from './pages/Chiese'
import ChiesaPage from './pages/ChiesaPage'
import Edifici from './pages/Edifici'
import EdificioPage from './pages/EdificioPage'
import Collezioni from './pages/Collezioni'
import CollezionePage from './pages/CollezionePage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/museo" element={<Museo />} />
      <Route path="/museo/storia" element={<MuseoStoria />} />
      <Route path="/museo/servizi" element={<MuseoServizi />} />
      <Route path="/museo/contatti" element={<MuseoContatti />} />
      <Route path="/museo/libreria" element={<MuseoLibreria />} />
      <Route path="/museo/sede" element={<MuseoSede />} />
      <Route path="/pau" element={<PAU />} />
      <Route path="/itinerari" element={<Itinerari />} />
      <Route path="/itinerari/:slug" element={<ItinerarioPage />} />
      <Route path="/chiesa" element={<Chiese />} />
      <Route path="/chiesa/:slug" element={<ChiesaPage />} />
      <Route path="/edifici" element={<Edifici />} />
      <Route path="/edifici/:slug" element={<EdificioPage />} />
      <Route path="/collezioni" element={<Collezioni />} />
      <Route path="/collezioni/:slug" element={<CollezionePage />} />
    </Routes>
  )
}
