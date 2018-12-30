import React, { Component } from "react";
import Context from "./component/context.js";
import AddBooks from "./component/addBooks.js";
import ShowBooks from "./component/showBooks.js";
import SignIn from "./component/signIn";
import SignUp from "./component/signUp";
import { BrowserRouter, Route } from "react-router-dom";
import Nav from "./component/nav";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowing: false,
      book: []
    };
    fetch("https://safe-spire-61819.herokuapp.com/book")
      .then(res => res.json())
      .then(book => this.setState({ book }));
  }
  // componentDidMount() {
  //   fetch("/book")
  //     .then(res => res.json())
  //     .then(book => this.setState({ book }));
  // }
  render() {
    return (
      <BrowserRouter>
        <Context.Provider
          value={{
            value: this.state.book,
            action: {
              delet: userId => {
                const requestOptions = {
                  method: "DELETE"
                };
                fetch(
                  "https://safe-spire-61819.herokuapp.com/book/" + userId,
                  requestOptions
                )
                  .then(response => {
                    return response.json();
                  })
                  .then(
                    fetch("https://safe-spire-61819.herokuapp.com/book")
                      .then(res => res.json())
                      .then(book => this.setState({ book }))
                  );
              }
            }
          }}
        >
          <Nav />
          <Route exact path="/" component={ShowBooks} />
          <Route path="/Add" component={AddBooks} />
          <Route path="/SignIn" component={SignIn} />
          <Route path="/SignUp" component={SignUp} />
        </Context.Provider>
      </BrowserRouter>
    );
  }
}

export default App;
