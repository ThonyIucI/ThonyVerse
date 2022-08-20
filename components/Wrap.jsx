import React from "react";
import styles from "../styles/Wrap.module.scss";
const urls = [
  {
    name: "primero",
    url: "https://images.unsplash.com/photo-1617478755490-e21232a5eeaf?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxNzU1NjM5NA&ixlib=rb-1.2.1&q=75&w=1920",
  },
  {
    name: "segundo",
    url: "https://images.unsplash.com/photo-1617128734662-66da6c1d3505?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxNzc3NTM3MA&ixlib=rb-1.2.1&q=75&w=1920",
  },
  {
    name: "tercero",
    url: "https://images.unsplash.com/photo-1617438817509-70e91ad264a5?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxNzU2MDk4Mg&ixlib=rb-1.2.1&q=75&w=1920",
  },
  {
    name: "cuarto",
    url: "https://images.unsplash.com/photo-1617412327653-c29093585207?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxNzU2MDgzMQ&ixlib=rb-1.2.1&q=75&w=1920",
  },
  {
    name: "quinto",
    url: "https://images.unsplash.com/photo-1617141636403-f511e2d5dc17?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxODAzMjc4Mw&ixlib=rb-1.2.1&q=75w=1920",
  },
];

function Wrap(props) {
  return (
    <div>
      <header>
        <div>Animated Sections</div>
        <div>
          <a href="https://codepen.io/BrianCross/pen/PoWapLP">
            Original By Brian
          </a>
        </div>
      </header>
      <section className={styles.first}>
        <div className={styles.outer}>
          <div className={styles.inner}>
            <div
              className={styles.bg}
              style={`background-image: url(${props.url})`}
            >
              <h2 className={styles.section - heading}>props.name</h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
function Sections() {
  return urls.map((e, i) => <Wrap key={i} {...e} />);
}
export default Sections;
