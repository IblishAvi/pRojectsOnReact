import { useState } from "react";
function Cards({ id, image, name, info, price,RemoveHandler }) {
  const [readmore, setReadmore] = useState(false);
  const description = readmore?info:`${info.substring(0, 50)}...`;
  function ReadmoreHandler(){
    setReadmore(!readmore)
  }
  return (
    

    <div className="Card">
      <img src={image} className="Image" />
      <div className='tour-info'>
        <div className='tour-detail'>
          <h4 className="tour-Price">₹{price}</h4>
          <h4 className="tour-name">{name}</h4>
        </div>
        <div className='description'>
          {description}
          {<span className="Read-more" onClick={ReadmoreHandler}>{readmore ? `Show Less` : `Read More`} </span>}
        </div>
      </div>

      <button className='btn' onClick={() =>RemoveHandler(id)}>Not Interested </button>
    </div>
  )
}

export default Cards
