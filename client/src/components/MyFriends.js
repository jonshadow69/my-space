import React from 'react'
import axios from 'axios'
import { Card, Divider, Image, Button, Icon } from 'semantic-ui-react';

class MyFriends extends React.Component {
  state = { friends: [], };

  componentDidMount(){
    axios.get(`/api/my_friend`)
    .then(res => this.setState({ friends: res.data, }) );
  }

  deleteFriend = (id) => {
    axios.delete(`/api/friends/${id}`)
    .then(res => {
      const {friends, } = this.state;
      this.setState({ friends: friends.filter(d => d.id !== id), })
    })
  }

  addFriend = (id) => {
    axios.post(`/api/friends`)
    .then(res => {
        //right a function pathing the form
        //add post btn
      })
    };
  
  render() {
    const {friends, } = this.state;
    return(
      <Card.Group itemsPerRow={4}>
        { friends.map( friend =>
        <Card key={friend.id}>
          <Image src={friend.avatar}/>
          <Card.Content>
            <Divider />
              <Card.Header>
                {friend.name}
                <br />
                <br />
                <Button color="red inverted" onClick={() => this.deleteFriend(friend.id)}>
                  <Icon name="trash"/>
                  Unlike
                </Button>
                <Button color="blue inverted" onClick={() => this.addFriend(friend.id)}>
                  <Icon name="plus"/>
                   Add Post
                </Button>
              </Card.Header>
          </Card.Content>
        </Card>
          )}
      </Card.Group>
    )
  }
}

export default MyFriends;