import React from 'react';
import './css/footer.css';
const Footer = () => {
  return (
    <>
      <footer>
        <section className="links">
          <ul className="list-1">
            <li>Home</li>
            <li><a href="/books?sort=new">New Release</a></li>
            <li><a href="/books?sort=featured">Featured</a></li>
            <li><a href="?sort=bestseller">Bestseller</a></li>
            <li><a href="?sort=popular">Popular</a></li>
          </ul>
          <ul className="list-2">
            <li>Connect</li>
            <li><a href="https://github.com/nparashar150/">Github</a></li>
            <li><a href="https://instagram.com/nparashar150_/">Instagram</a></li>
            <li><a href="https://t.me/nparashar150/">Telegram</a></li>
            <li><a href="https://twitter.com/nparashar150/">Twitter</a></li>
          </ul>
          <ul className="list-3">
            <li>Famous Authors</li>
            <li><a href="/author?name=dan_brown">Dan Brown</a></li>
            <li><a href="/author?name=poulo_coelho">Poulo Coelho</a></li>
            <li><a href="/author?name=jk_rowling">JK Rowling</a></li>
            <li><a href="/author/">More...</a></li>
          </ul>
          <ul className="list-3">
            <li>Issues?</li>
            <li><a href="/issues?=report">Report Issue</a></li>
            <li><a href="/issues?=feedback">Feedback</a></li>
          </ul>
        </section>
        <div className="footer-footer">
          Sample Project created by <a href="https://github.com/nparashar150/">Naman Parashar</a>
        </div>
      </footer>
    </>
  )
}

export default Footer;
