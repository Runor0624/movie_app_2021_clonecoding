import React from 'react';

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props; 
        if(location.state === undefined) {
            history.push('/');
        }
    }
    render() {
        const { location } = this.props;
        if (location.state) {
        return <span><p>{location.state.title}</p>
        <p>{location.state.year}</p>
        <p>{location.state.summary}</p>
        </span>;
        } else {
            return null;
        }
        }
    }

export default Detail;