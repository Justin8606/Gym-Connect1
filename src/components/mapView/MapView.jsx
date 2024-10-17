import { MapContainer, TileLayer } from 'react-leaflet'
import './mapview.scss'
import 'leaflet/dist/leaflet.css';
import Pin from '../pin/Pin';

function Mapview({items}){
  return (
    <MapContainer center={[9.981346578939009, 76.29695901039013]} zoom={10} scrollWheelZoom={false} className='mapview'>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {items.map(item=>(
      <Pin item={item} key={item.id}/>
    ))}
  </MapContainer>
  )
}

export default Mapview