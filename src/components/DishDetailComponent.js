import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderDish({dish}) {
    return(
        <div className="col-12 col-md-5 m-1">
        <Card>
            <CardImg width="100%" top src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle><h5>{dish.name}</h5></CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
        </div>
    );
}

function RenderComments({comments}) {
    if (comments!=null)
            return (
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className='list-unstyled'>
                        {comments.map(function(commentt) {
                            return(
                                <li key={commentt.id}>
                                    <p>{commentt.comment}</p>
                                    <p>--{commentt.author}, {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(commentt.date)))}</p>
                                </li>
                            );
                         })}
                    </ul>
                </div>
            );
        else
            return (<div></div>);
}

const DishDetail = (props) => {
    if (props.dish != null)
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>           
                </div>
                <div className="row">
                    <RenderDish dish={props.dish}></RenderDish>
                    <RenderComments comments={props.comments} />
                </div>
            </div>
        );
    else
        return(<div></div>);
}

// class DishDetail extends Component {

//     // constructor(props) {
//     //     super(props);
//     //     console.log('DishDetailComponent constructor is invoked');
//     // }

//     componentDidMount() {
//         console.log('DishDetail Component componentDidMount is invoked');
//     }

//     componentDidUpdate() {
//         console.log('DishDetail Component componentDidUpdate is invoked');
//     }


//     renderDish(dish) {
//         console.log('DishDetail Component renderDish is invoked');
//             return(
//                 <div className="col-12 col-md-5 m-1">
//                 <Card>
//                     <CardImg width="100%" top src={dish.image} alt={dish.name} />
//                     <CardBody>
//                       <CardTitle><h5>{dish.name}</h5></CardTitle>
//                       <CardText>{dish.description}</CardText>
//                     </CardBody>
//                 </Card>
//                 </div>
//             );
//     }
    
//     renderComments(comments) {
//         console.log('DishDetail Component renderComments is invoked');
//         // const comment = comments.map((commentt) => {
//         //     return(
//         //         <li key={commentt.id}>
//         //             <p>{commentt.comment}</p>
//         //             <p>--{commentt.author}, {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(commentt.date)))}</p>
//         //         </li>
//         //     );
//         // });

//         if (comments!=null)
//             return (
//                 <div className="col-12 col-md-5 m-1">
//                     <h4>Comments</h4>
//                     <ul className='list-unstyled'>
//                     {/* {comment} */}
//                         {comments.map(function(commentt) {
//                             return(
//                                 <li key={commentt.id}>
//                                     <p>{commentt.comment}</p>
//                                     <p>--{commentt.author}, {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(commentt.date)))}</p>
//                                 </li>
//                             );
//                          })}
//                     </ul>
//                 </div>
//             );
//         else
//             return (<div></div>);
//     }

//     render() {
//         console.log('DishDetail Component render is invoked');
//         if (this.props.dish != null)
//             return (
//                 <div className="container">
//                     <div className="row">
//                         {this.renderDish(this.props.dish)}
//                         {this.renderComments(this.props.dish.comments)}
//                     </div>
//                 </div>
//             );
//         else
//             return(<div></div>);
//         // return(
//         //     <div className="container">
//         //     <div className="row">
//         //         <div  className="col-12 col-md-5 m-1">
//         //             <Card>
//         //                 <CardText>
//         //                     {this.renderDish(this.props.dish)}
//         //                 </CardText>
//         //             </Card>
//         //         </div>
                
//         //         <div  className="col-12 col-md-5 m-1">
//         //             {this.renderComments(this.props.dish.comments)}
//         //         </div>        
//         //     </div>
//         //     </div>
//         // );
//     }

// }

export default DishDetail;