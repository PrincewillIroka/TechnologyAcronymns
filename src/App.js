import React, { Component } from 'react'
import './App.css'
import styled from 'styled-components'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    return (
      <Wrapper>
        <div className="App">
          <div className="container">
            <header>
              <span>TechnologyAcronymns</span>
              <nav>
                <ul>
                  <li>Suggest an Acronymn</li>
                  <li>About</li>
                  <li>Developed by Princewill Iroka</li>
                </ul>
              </nav>
            </header>
            <section>
              <div>
                <div class="typewriter">
                  <h1>CI/CD</h1>
                </div>
              </div>
            </section>
          </div>
        </div>
      </Wrapper>
    )
  }
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

const Wrapper = styled.div`
  .App {
    background: url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')
      no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    height: 100vh;

    .container {
      height: 100%;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.1);
      display: flex;
      flex-direction: column;

      header {
        display: flex;
        flex-direction: row;
        padding: 20px;

        > span {
          font-family: 'Verdana';
          color: #bcd234;
          font-size: 22px;
        }

        nav {
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
          width: 100%;
          > ul {
            display: flex;
            color: #fff;
            list-style-type: none;
            font-family: 'Arial';
            align-items: center;
            li:nth-child(1) {
              margin-right: 50px;
              font-size: 17px;
              background-color: #bcd234;
              padding: 10px 15px;
              border-radius: 3px;
              font-weight: bold;
            }
            li:nth-child(2) {
              margin-right: 50px;
            }
          }
        }
      }

      section {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        > div:nth-child(1) {
          height: 300px;
          width: 800px;
          background-color: rgba(253, 253, 253, 0.1);
          border-radius: 5px;
          padding: 15px;

          .typewriter h1 {
            overflow: hidden;
            border-right: 0.15em solid orange;
            white-space: nowrap;
            margin: 0 auto;
            letter-spacing: 0.15em;
            animation: typing 3.5s steps(40, end),
              blink-caret 0.75s step-end infinite;
            color: #fff;
            display: block;
          }

          @keyframes typing {
            from {
              width: 0;
            }
            to {
              width: 20%;
            }
          }

          @keyframes blink-caret {
            from,
            to {
              border-color: transparent;
            }
            50% {
              border-color: orange;
            }
          }
        }
      }
    }
  }
`
