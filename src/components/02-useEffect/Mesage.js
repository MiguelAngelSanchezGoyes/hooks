import React, { useEffect, useState } from 'react';

export const Mesage = () => {

    const [coords, setCoords] = useState({x:0, y:0});

    const {x, y} = coords

    useEffect(() => {

        const mouseMuve = (e)=>{
            const coors = {x: e.x, y:e.y};
            setCoords(coors)
        }

      window.addEventListener ('mousemove', mouseMuve);
    
      return () => {
        window.removeEventListener('mousemove', mouseMuve);
      };
    }, []);
    


  return (
      <div>
          <h3>Holaaaaaaaaaaa Mundoooooooo</h3>
          <p>
              x:{x} y:{y}
          </p>
      </div>
  )
};
