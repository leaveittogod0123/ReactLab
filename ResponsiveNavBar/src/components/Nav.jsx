import React, { Component } from "react";
import styles from "../sass/Nav.module.scss";

export default class Nav extends Component {
  render() {
    return (
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <h4>The Nav</h4>
        </div>
        <ul className={styles.navLinks}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Work</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
        </ul>
      </nav>
    );
  }
}
