import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/fulls/SVGBoardSplash.png'
import thumb02 from '../assets/images/fulls/MusicBars.jpg'
import thumb03 from '../assets/images/fulls/battleship.jpg'
import thumb04 from '../assets/images/fulls/Discord.jpg'
// import thumb05 from '../assets/images/thumbs/05.jpg'
// import thumb06 from '../assets/images/thumbs/06.jpg'

// import full01 from '../assets/images/fulls/SVGBoardSplash.png'
// import full02 from '../assets/images/fulls/MusicBars.jpg'
// import full03 from '../assets/images/fulls/battleship.jpg'
// import full04 from '../assets/images/fulls/Discord.jpg'
// import full05 from '../assets/images/fulls/05.jpg'
// import full06 from '../assets/images/fulls/06.jpg'

const IMAGES = [
  {
    id: '1',
    source: 'https://svg-board.herokuapp.com/',
    thumbnail: thumb01,
    caption: 'SVG Board',
    description: 'An online multi-user whiteboard platform.',
  },
  {
    id: '2',
    source: 'https://github.com/APTricou/Read_The_Room',
    thumbnail: thumb02,
    caption: 'Read The Room',
    description: "An interactive playlist creator tied into Spotify's API.",
  },
  {
    id: '3',
    source: 'https://github.com/ProjectPineapple/Ananas2',
    thumbnail: thumb03,
    caption: 'SeaBay',
    description: 'A fictional ecommerce site with full Stripe functionality.',
  },
  {
    id: '4',
    source: 'https://github.com/APTricou/AnythingBot',
    thumbnail: thumb04,
    caption: 'Discord Bot',
    description: 'A functional Discord Bot with ever expanding capabilities.',
  },
  // {
  //   id: '5',
  //   source: full05,
  //   thumbnail: thumb05,
  //   caption: 'Sojourn TRC',
  //   description: 'A static website build with Gatsby and Netlify, with CMS.',
  // },
  // {
  //   id: '6',
  //   source: full06,
  //   thumbnail: thumb06,
  //   caption: 'Placeholder',
  //   description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  // },
]

class HomeIndex extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      text: '',
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    switch (e.target.name) {
      case 'name':
        this.setState({
          name: e.target.value,
          email: this.state.email,
          text: this.state.text,
        })
        break
      case 'message':
        this.setState({
          name: this.state.name,
          email: this.state.email,
          text: e.target.value,
        })
        break
      default:
        break
    }
  }

  render() {
    const siteTitle = 'Antanas Tricou - Developer'
    const siteDescription =
      'I work primarily in Javascript, React, Redux, Postgres, Express.js, HTML, CSS, and Node. I also in noSQL databases, Python, C#, Unity, Websockets, and React-Native. I enjoy learning and applying new technologies to find solutions. I like climbing, video games,traveling, and board games.'

    return (
      <Layout>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Helmet>

        <div id="main">
          <section id="one">
            <header className="major">
              <h2>
                I love to find problems and build solutions.
                <br />
                There are always more tools to be built.
              </h2>
            </header>
            <p>
              I work primarily in Javascript, React, Redux, Postgres,
              Express.js, HTML, CSS, and Node. I also have worked with noSQL
              databases, Python, C#, Unity, Websockets, and React-Native. I
              enjoy learning and applying new technologies to build and explore.
              <br />
              <br />I like climbing, video games, traveling, and board games.
              I'm a Cubs fan even though I grew up on the south side of Chicago.
              Sorry Sox fans.
            </p>
            {/* <ul className="actions">
              <li>
                <a href="#" className="button">
                  Learn More
                </a>
              </li>
            </ul> */}
          </section>

          <section id="two">
            <h2>Recent Work</h2>

            <Gallery
              images={IMAGES.map(
                ({ id, source, thumbnail, caption, description }) => ({
                  source,
                  thumbnail,
                  caption,
                  description,
                })
              )}
            />

            {/* <ul className="actions">
              <li>
                <a href="#" className="button">
                  Full Portfolio
                </a>
              </li>
            </ul> */}
          </section>

          <section id="three">
            <h2>Get In Touch</h2>
            <p>
              I am currently interested in entry level developer positions.
              While my background is primarily Javascript and React, I am
              flexible and interested in learning new languages and frameworks.
            </p>
            <div className="row">
              <div className="8u 12u$(small)">
                <form
                  name="form1"
                  method="post"
                  data-netlify-honeypot="bot-field"
                  data-netlify="true"
                >
                  <input type="hidden" name="bot-field" />
                  <div className="row uniform 50%">
                    <div className="12u 12u$(xsmall)">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name or Company"
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="12u">
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Message"
                        rows="4"
                        onChange={this.handleChange}
                      >
                        {this.state.text}
                      </textarea>
                    </div>
                  </div>
                  <input
                    style={{ marginTop: 10 }}
                    type="submit"
                    form="form1"
                    value="Send Message"
                  />
                </form>
              </div>
              <div className="4u 12u$(small)">
                <ul className="labeled-icons">
                  <li>
                    <h3 className="icon fa-home">
                      <span className="label">Address</span>
                    </h3>
                    3140 N Broadway APT 3F
                    <br />
                    Chicago, IL 60657
                    <br />
                    United States
                  </li>
                  <li>
                    <h3 className="icon fa-mobile">
                      <span className="label">Phone</span>
                    </h3>
                    708-259-0198
                  </li>
                  <li>
                    <h3 className="icon fa-envelope-o">
                      <span className="label">Email</span>
                    </h3>
                    <a
                      href={`mailto:APTricou@gmail.com?subject=Personal_Website_Contact&body=${this.text}`}
                    >
                      APTricou@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
