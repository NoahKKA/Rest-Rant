const React = require('react')
const Def = require('./deafult')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <a href="/"><button className="btn-primary">Home</button></a>
              <div>
                <img id='error404Picture' src="images/karthegan-padmanaban-nYWlpZ_FErc-unsplash.jpg" alt="Baby pitbull" />
                  <div>
                    Photo by <a href="https://unsplash.com/@gixxerkidd">karthegan Padmanaban</a>on<a href="https://unsplash.com/">Unsplash</a>
                  </div>
              </div>
          </main>
      </Def>
    )
  }
  

module.exports = error404