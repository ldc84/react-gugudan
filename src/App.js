import React from 'react';
import * as _ from 'lodash';
import styles from './styles.scss';

class Gugudan extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      test: 1
    }
    this.update.bind(this);
  }

  update() {
    this.setState({
      test: this.state.test + 1
    });
  }

  render() {
    const range = _.range(1, 10);
    return (
      <div className={styles.container}>
        test: {this.state.test}
        <div onClick={this.update.bind(this)}>click me</div>
        <h1 className={styles.pagetitle}>구구단을 외자~</h1>
        {
          _.map(range, (dan, i)=> {
            if(dan === 1) return
            return (
              <div className={styles.danbox} key={i}>
                <h2 className={styles.title}>{dan}단</h2>
                <ul>
                {
                  _.map(range, (n, j) => {
                    const result = dan * n;
                    return (
                      <li key={j}>{dan} * {n} = {result}</li>
                    )
                  })
                }
                </ul>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default Gugudan;