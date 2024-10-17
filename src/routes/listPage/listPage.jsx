import { listData } from '../../lib/dummydata'
import './listPage.scss'
import Filter from "../../components/filter/Filter"
import Card from "../../components/Card/Card"
import Mapview from '../../components/mapview/mapview'

function ListPage(){

  const data = listData

  return (
    <div className='listPage'>
      <div className="listContainer">
        <div className="wrapper">
          <Filter/>
          {data.map(item=>(
            <Card key={item.id} item={item}/>
          ))}
        </div>
      </div>
      <div className="mapContainer">
        <Mapview items={data}/>
      </div>
    </div>
  )
}

export default ListPage