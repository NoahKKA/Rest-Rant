const React = require('react')
const Def = require('./deafult')

function home () {
    return (
      <Def>
          <main>
              <h1>REST-Rant</h1>
              <a href="/places">
                <button className="btn-primary">Places Page</button>
              </a>
              <div id='homeContainer'>
                <img id="homePhoto" src="images/brenda-godinez-MsTOg6rhRVk-unsplash.jpg" alt="Chia Fruit Shake" />
                <div>
                  Photo by <a href="https://unsplash.com/@cravethebenefits">Brenda Godinez</a> on <a href="https://unsplash.com/">Unsplash</a>
                </div>
              </div>
              
          </main>
      </Def>
    )
  }
  

module.exports = home