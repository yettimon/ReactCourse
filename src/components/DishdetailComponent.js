import React from 'react'
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap'


    function RenderDish({dish}){
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
    
    function RenderComments({comments}){
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
    const DishDetail= (props) => {
        const dish = props.dish
        //console.log(dish);
        if (dish != null) {
        const dishItem = <RenderDish dish = {props.dish}/>
        const dishComments = <RenderComments comments={props.dish.comments}/>
        return (
            <div className = "container">
            <div className= "row">
                {dishItem}
                {dishComments}
            </div>
            </div>
        )
    }
    else{
        return(
            <div></div>
        )
    }

}
export default DishDetail