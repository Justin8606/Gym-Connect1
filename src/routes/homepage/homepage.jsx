import { useContext } from 'react'
import SearchBar from '../../components/searchBar/SearchBar'
import './homepage.scss'
import { AuthContext } from '../../context/AuthContext'


function Homepage(){

const {currentUser} = useContext(AuthContext)

console.log(currentUser)

  return (
    <div className='homepage'>
        <div className="textContainer">
            <div className="wrapper">
                <h1 className="title">
                    Transform Your Body, Elevate Your Life.
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis accusamus quis dicta laudantium qui quos, iusto autem consequuntur, nemo iure perspiciatis ducimus ipsum dolore vel maiores voluptatibus voluptate sapiente culpa.
                </p>
                <SearchBar/>
                <div className="boxes">
                    <div className="box">
                        <h1>16+</h1>
                        <h2>hundreds of gym</h2>
                    </div>
                    <div className="box">
                        <h1>16+</h1>
                        <h2>hundreds of gym</h2>
                    </div>
                    <div className="box">
                        <h1>16+</h1>
                        <h2>hundreds of gym</h2>
                    </div>
                </div>
            </div>
            
        </div>
        <div className="imgContainer">
            <img src="/gym1.jpg" alt="" />
        </div>
    </div>
  )
}

export default Homepage