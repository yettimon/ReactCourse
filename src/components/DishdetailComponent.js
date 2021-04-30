import React, { Component } from 'react'
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap'

class DishDetail extends Component{
  
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            selectedDish : this.props.comments
        };
        console.log('Menu component counstructor is invoked');
    }

    renderDish(dish){
        if(dish != null){
            return(
                <div className="col-12 col-md-5 m-1">
                <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name}/>
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
                </Card>
                </div>
            )

        }
        else {
            return(
                <div></div>
            )

        }
    }
    renderComments(comments){
        const commentaries = comments.map(comment =>{
            return(
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>--{comment.author}</p>
                    <p>{new Intl.DateTimeFormat('en-US',{ 
                        year:'numeric',
                        month:'long',
                        day:'2-digit'}).format(new Date(comment.date))}
                        </p>
                </li>
            )
        })
        return(
            <div className="col-12 col-md-5 md-1">
                <h1>Comments</h1>
                <ul>{commentaries}</ul>
            </div>
        )
    }
    render(){
        const dish = this.props.dish
        console.log(dish);
        if (dish != null) {
        const dishItem = this.renderDish(dish);
        const dishComments = this.renderComments(dish.comments);
        return (
            <div className='row'>
                {dishItem}
                {dishComments}
            </div>
        )
    }
    else{
        return(
            <div></div>
        )
    }

}
}
export default DishDetail