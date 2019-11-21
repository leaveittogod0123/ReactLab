import React, { Component } from "react";
import styles from "../sass/Nav.module.scss";

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.navLinksRef = React.createRef();
    this.navLinksLiRef = [
      React.createRef(),
      React.createRef(),
      React.createRef(),
      React.createRef()
    ];
    this.state = {
      navLinkList: ["Home", "About", "Work", "Projects"]
    };
  }

  burgerOnClick = () => {
    this.navLinksRef.current.classList.toggle(styles.navActive);

    this.state.navLinkList.map((el, index) => {
      this.navLinksLiRef[index].current.classList.toggle(styles.navLinksFade);
    });
  };

  render() {
    const navLinkListTag = this.state.navLinkList.map((el, index) => {
      return (
        <li key={`${index}${el}`} ref={this.navLinksLiRef[index]}>
          <a href="#">{el}</a>
        </li>
      );
    });

    return (
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <h4>The Nav</h4>
        </div>
        <ul className={styles.navLinks} ref={this.navLinksRef}>
          {navLinkListTag}
        </ul>
        <div
          className={styles.burger}
          onClick={this.burgerOnClick}
          onKeyDown={this.burgerOnClick}
        >
          <div className="line1" />
          <div className="line2" />
          <div className="line3" />
        </div>
      </nav>
    );
  }
}
