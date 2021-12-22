import React from "react";

const CollectionButtons = ({category, id}) => {
  console.log(id)
  
  return(
    <div>
      <button>FAVORTIE</button>
      <button>PLAYED</button>
      <button>WISHLIST</button>
    </div>
  )

}


export default CollectionButtons