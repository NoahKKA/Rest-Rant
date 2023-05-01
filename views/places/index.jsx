const React = require('react')
const Def = require('../deafult')

function indexPlaces(data){
    let placeFormatted = data.places.map((place) => {
        return (
          <div className="col-sm-6">
            <h2>
              <a href={`/places/${place.id}`} >
                {place.name}
              </a>
            </h2>
            <p className="text-center">
              {place.cuisines}
            </p>
            <img src={place.pic} alt={place.name} />
            <p className="text-center">
              Located in {place.city}, {place.state}
            </p>
          </div>
        )
      })
      
        return (
            <Def>
                <main>
                    <h1>Places to Rave About</h1>
                    <a href="/"><button className="btn-primary">Home</button></a>
                    <div className='row'>
                    {placeFormatted}
                    </div>
                </main>
            </Def>
        )
}

module.exports = indexPlaces