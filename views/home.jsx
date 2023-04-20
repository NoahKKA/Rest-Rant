const React = require('react')
const Def = require('./deafult')

function home () {
    return (
      <Def>
          <main>
              <h1>HOME</h1>
              <div>
                <img id="homePhoto" src="images/brenda-godinez-MsTOg6rhRVk-unsplash.jpg" alt="Chia Fruit Shake" />
                <div>
                  Photo by <a href="https://unsplash.com/@cravethebenefits">Brenda Godinez</a> on <a href="https://unsplash.com/">Unsplash</a>
                </div>
              </div>
              <a href="/places">
                <button className="btn-primary">Places Page</button>
              </a>
          </main>
      </Def>
    )
  }
  

module.exports = home