import './filter.scss'

function Filter(){
  return (
    <div className='filter'>
      <h1>Search results for <b>Kerala</b></h1>
      <div className="top">
        <div className="item">
          <label htmlFor="city">Location</label>
          <input type="text" id="city" name="city" placeholder='City Location' />
        </div>
      </div>
      <div className="bottom">
      <div className="item">
          <label htmlFor="minPrice">Min Price</label>
          <input type="text" id="minPrice" name="minPrice" placeholder='any' />
        </div>
      <div className="item">
          <label htmlFor="maxPrice">Max Price</label>
          <input type="text" id="maxPrice" name="maxPrice" placeholder='any' />
        </div>
        <button>
          <img src="/search.png" alt="" />
        </button>
      </div>
    </div>
  )
}

export default Filter