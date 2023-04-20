const React = require('react')
const Def = require('../deafult')

function indexPlaces(data){
    let placeFormatted = data.places.map((place) => {
        return (
            <div key={place.id}>
                <h2>{place.name}</h2>
                <img src={place.pic} alt={place.name}/>
            </div>
        )
    })
        return (
            <Def>
                <main>
                    <h1>PLACES INDEX PAGE</h1>
                    {placeFormatted}
                </main>
            </Def>
        )
}

module.exports = indexPlaces