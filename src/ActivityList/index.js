import React, {Component} from 'react';

class ActivityList extends Component {
  constructor(){
  super();

  this.state = {
    activities: []
  }
}
  async componentDidMount() {
    try {
      const res = await fetch('http://localhost:8000/api/activities/');
      const activities = await res.json();
      this.setState({
        activities
      })

    } catch(err) {
      return(err)
    }
  }
  render() {
    return(
      <div>
        {this.state.activities.map(item =>(
          <div key={item.key}>
            <h1>{item.name}</h1>
            <h2>{item.photo_url}</h2>
          </div>
        ))}
      </div>
    )
  }
}

export default ActivityList;
