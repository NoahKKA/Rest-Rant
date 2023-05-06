const React = require('react')
const Def = require('../deafult')

function comments_form (data){
    return (
        <form method='POST' action={`/places/${data.place.id}/comment`}>
          <div className="row">
            <div className='form-group col-sm-2'>
                <label htmlFor="author">Author</label>
                <input id='author' name='author' className="form-control"/>
            </div>
          </div>
          <div className="row">
            <div className='form-group col-sm-2'>
                <label htmlFor="content">Content</label>
                <input id='content' name='content' className="form-control"/>
            </div>
          </div>
          <div className='row'>
            <div className='form-group col-sm-2'>
                <label htmlFor="stars">Rating</label>
                <input type="range" min="1" max="5" id='stars' name='stars' step="0.5" required className="form-control"/>
            </div>
          </div>
            <div>
                <label htmlFor="rant">Rant?</label>
                <input type="checkbox" id='rant' name='rant'/>
            </div>
            <input type="submit" value='Submit' />
        </form>
    )
}

module.exports = comments_form