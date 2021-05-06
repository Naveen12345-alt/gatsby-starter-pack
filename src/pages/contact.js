import React from "react"
import Layout from "../components/layout/Layout"

const Contact = () => {
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want to Get In Touch?</h3>
            <p>
              I'm baby selvage cred migas scenester la croix synth. Squid hella
              live-edge lyft lumbersexual roof party man bun lomo dreamcatcher.
              Prism tumblr banh mi whatever distillery next level banjo PBR&B la
              croix pabst letterpress 8-bit yr actually godard. Salvia meh la
              croix hexagon gluten-free. Hella man bun sartorial iPhone.
            </p>
            <p>Dummy text? More like dummy thicc text, amirite?</p>
            <p>
              Actually fashion axe ramps, kale chips vegan jean shorts hashtag.
              Tousled crucifix semiotics snackwave selvage. Live-edge normcore
              pinterest leggings 90's. Knausgaard banjo leggings shabby chic
              whatever hammock shoreditch.
            </p>
          </article>
          <article>
            <form className="form contact-form">
              <div className="form-row">
                <label htmlFor="name">your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">your email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                submit
              </button>
            </form>
          </article>
        </section>
      </main>
    </Layout>
  )
}

export default Contact
