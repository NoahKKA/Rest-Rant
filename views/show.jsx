const React = require('react')
const Def = require('./deafult')

function show (data) {
    return (
        <Def>
          <main>
            <h1>{ data.place.name }</h1>
            <div id='rating'>
                <h2>Rating</h2>
                <h3>Not Rated</h3>
            </div>
            <div id='description'>
                <h2>Description</h2>
                <h3>Located in {data.place.city}, {data.place.state} and serving {data.place.cuisines}.</h3>
            </div>
            <div id='comments'>
                <h2>Comments</h2>
                <h3>No Comments Yet!</h3>
            </div>
            <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
                Edit
            </a>  
            <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
                <button type="submit" className="btn btn-danger">
                    Delete
                </button>
            </form> 
          </main>
        </Def>
    )
}

module.exports = show

