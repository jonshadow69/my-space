import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, } from 'react-router-dom'
import {Header, Image, Card, Button, Icon, } from 'semantic-ui-react';

const Home = () => {
  const [friends, setFriends] = useState([]);

  useEffect( () => {
    axios.get("/api/friends")
      .then( res => setFriends(res.data))
  }, []);

    const sample = () => {
      if (friends.length){
        const index = Math.floor(Math.random() * friends.length);
        return friends[index];
      } else {
        return null;
      }
    };
    const downVote = (id) =>{
      const newFriends = friends.filter(friend => friend.id !== id);
      setFriends(newFriends);
    };

    const upVote = (id) => {
      // debugger
      axios.put(`/api/friends/${id}`)
      .then(res => setFriends(friends.filter( friend => friend.id !== id)))
    };

    const friend = sample();
    if (friend) {
      return (
        
        <center><div>
          <br />
          <Header as="h1">Freindzy</Header>
          <br />
          <Card>
            <Image src={friend.avatar}/>
            <Card.Content>
              <Card.Header>
                  {friend.name}
              </Card.Header>
                <Card.Description>
                  {friend.amigo}
                </Card.Description>
                <Card.Meta>
                  {friend.registry}
                </Card.Meta>
            </Card.Content>
            <Card.Content extra>
              <Button color="red" icon basic onClick={() => downVote(friend.id)}>
                <Icon name="thumbs down"/>
              </Button>
              <Button color="green" icon basic onClick={() => upVote(friend.id)}>
                <Icon name="thumbs up"/>
              </Button>
            </Card.Content>
          </Card>
          <Button as={Link} to="my_friends" color="blue">
            My Friends
          </Button>
        </div></center>
      )
    } else {
      return <header as="h1" textAlign="center"> No More Friends</header>
    }
}

export default Home;