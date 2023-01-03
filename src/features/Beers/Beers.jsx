import React from 'react'

const Beers = () => {
    useEffect(() => {
        if (missionsStatus === 'idle') {
          dispatch(fetchMissions());
        }
      }, [missionsStatus, dispatch]);
  return (
    <div>
      
    </div>
  )
}

export default Beers
