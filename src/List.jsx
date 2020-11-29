import React from 'react';
import ListItem from "./ListItem";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import CardColumns from 'react-bootstrap/CardColumns';
import CardDeck from 'react-bootstrap/CardDeck';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown'

class FilteredList extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            cap: "all",
            coast: "all",
            sortby: "none",
            inCart: {}
        }

        this.handleFilter = this.handleFilter.bind(this);
        this.handleSort = this.handleSort.bind(this);
        this.addToCart = this.addToCart.bind(this);
        this.removeFromCart = this.removeFromCart.bind(this);
        this.clearCart = this.clearCart.bind(this);

    }


    //handle filtering
    handleFilter(category, value) {
        if (category == "cap") {
            this.state.cap = value
        }
        else {
            this.state.coast = value
        }
        this.setState((state, props) => { return {}; })
    }



    //handle sorting
    handleSort(category) {
        this.state.sortby = category
        this.setState((state, props) => { return {}; })
    }

    //reset all filters and sorts to default
    reset() {
        this.state.sortby="none"
        this.state.cap="all"
        this.state.coast="all"
        this.setState((state, props) => { return {}; })
    }

    //add to cart
    addToCart(name, col, pop, img) {
        this.state.inCart[name] = { name: name, col: col, pop: pop, img: img }
        this.setState((state, props) => { return {}; })
    }

    //remove from cart
    removeFromCart(name) {
        this.state.inCart[name] = null
        this.setState((state, props) => { return {}; })
    }

    //clear cart
    clearCart() {
        this.state.inCart = {}
        this.setState((state, props) => { return {}; })
    }

    //get average cost of living for the cart
    getAverageCol(cartList) {
        var total=0
        var num=0
        console.log(cartList)
        for (var item of cartList) {
            console.log(item)
            total=total+item.col
            num=num+1
        }
        if (num==0) {
            return 0
        }
        return Math.round(total/num)
    }

    render() {
        //check if list needs to be sorted
        var currList
        if (this.state.sortby == "pop") {
            currList = this.props.list.sort((a, b) => b.pop - a.pop)
        }
        else if (this.state.sortby == "col") {
            currList = this.props.list.sort((a, b) => b.col - a.col)
        }
        else {
            currList = this.props.list
        }

        //makes a list of everything in the cart
        var cartDict = this.state.inCart
        var cartList = []
        for (var item in cartDict) {
            var entry=cartDict[item]
            if (entry != null) {
                entry.cartCard=true
                cartList.push(entry)
            }
        }

        //render a list item
        const renderItem = (props) => {
            return (<ListItem name={props.name} pop={props.pop}
                col={props.col} img={props.img} cap={props.cap}
                coast={props.coast} add={this.addToCart}
                remove={this.removeFromCart} inCart={cartDict[props.name]}
                capFilter={this.state.cap} coastFilter={this.state.coast}
                cartCard={props.cartCard}>

            </ListItem>)
        }


        return (
            <div>
                <hr />
                <Navbar>


                        <Nav.Link onClick={() => this.handleSort("pop")}>Sort by population</Nav.Link>
                        <Nav.Link onClick={() => this.handleSort("col")}>Sort by cost of living</Nav.Link>
                        <NavDropdown title="Filter by capital city">
                            <NavDropdown.Item onClick={() => this.handleFilter("cap", true)}>
                                Only capitals</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => this.handleFilter("cap", false)}>
                                No capitals</NavDropdown.Item>

                        </NavDropdown>
                        <NavDropdown title="Filter by coastal">
                            <NavDropdown.Item onClick={() => this.handleFilter("coast", true)}>
                                Only coastal</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => this.handleFilter("coast", false)}>
                                Not coastal</NavDropdown.Item>

                        </NavDropdown>

                        <Nav.Link variant="danger" onClick={() => this.reset()}>Reset all</Nav.Link>



                </Navbar>
                <hr />

                <Container fluid>
                    <Row>
                        <Col>
                            <CardDeck>
                                {currList.map(renderItem)}
                            </CardDeck>
                        </Col>


                        <hr />
                        <Col>
                            <h3>Cart</h3>
                                <p><b>Average Cost of Living: {this.getAverageCol(cartList)}</b></p>
                            <Button onClick={this.clearCart}
                                variant="danger">Clear all</Button>
                            <CardDeck>
                                {cartList.map(renderItem)}
                            </CardDeck>
                        </Col>
                    </Row>
                </Container>
            </div>
        )

    }




















}

export default FilteredList;