import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

class ListItem extends React.Component {

    constructor(props) {
        super(props);

    }

    //turns boolean True/False into English "Yes"/"No"
    english(bool) {
        if (bool) {
            return "Yes"
        }
        else {
            return "No"
        }
    }



    render() {
        var button
        if (this.props.inCart == null) {
            button = <Button onClick={() => this.props.add(this.props.name, this.props.col, this.props.pop, this.props.img)}
                variant="success"><b>+</b></Button>
        }
        else {
            button = <Button onClick={() => this.props.remove(this.props.name)}
                variant="danger"><b>X</b></Button>
        }


        //if this item isn't in the cart and is being filtered against, don't display it
        if (!this.props.cartCard && this.props.capFilter!="all" && this.props.capFilter!=this.props.cap) {
            return null;
        }
        if (!this.props.cartCard && this.props.coastFilter!="all" && this.props.coastFilter!=this.props.coast) {
            return null;
        }


        //otherwise return the card
        return (
            <div>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.img} />
                    <Card.Body>
                        <Card.Title>{this.props.name}</Card.Title>
                        <ListGroup variant="flush">
                            <ListGroup.Item>Population: {((this.props.pop) * 1000).toLocaleString()}</ListGroup.Item>
                            <ListGroup.Item>Cost of Living Index: {this.props.col}</ListGroup.Item>
                            <ListGroup.Item>Capital: {this.english(this.props.cap)}</ListGroup.Item>
                            <ListGroup.Item>Coastal: {this.english(this.props.coast)}</ListGroup.Item>
                        </ListGroup>
                        {button}
                    </Card.Body>
                </Card>
            </div>
        )
    }
}







export default ListItem;