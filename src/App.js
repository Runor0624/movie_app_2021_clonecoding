import React from "react";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [], //영화 데이터 들어올곳
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false});
    }, 6000);
  }
  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? 'Loading...' : 'We are ready!'}</div>;
  }
}
export default App;
