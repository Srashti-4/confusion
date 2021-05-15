import React from 'react';
import { Link } from 'react-router-dom';
// import { Media } from 'reactstrap';
import { Breadcrumb, BreadcrumbItem, Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
// import DishDetail from './DishDetailComponent';

    function RenderMenuItem({ dish, onClick }) {
        return (
                <Card>
                     {/* onClick={() => onClick(dish.id)}> */}
                     <Link to={`/menu/${dish.id}`}>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                    </Link>
                </Card>
        );
    }

const Menu = (props) => {

    const menu = props.dishes.map((dish) => {
        return (
            <div className="col-12 col-md-5 m-1"  key={dish.id}>
                <RenderMenuItem dish={dish} onClick={props.onClick} />
            </div>
        );
    });

    return (
        <div className="container">
        <div className="row">
            <Breadcrumb>
                <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                <BreadcrumbItem active>Menu</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
                <h3>Menu</h3>
                <hr />
            </div>           
        </div>
            <div className="row">
                {menu}
            </div>
        </div>
    );
}

// class Menu extends Component {

//     constructor(props) {
//         super(props);

//         // this.state = {
//         //     selectedDish: null
//         // }
//         console.log('Menu Component constructor is invoked');
//     }

//     componentDidMount() {
//         console.log('Menu Component componentDidMount is invoked');
//     }

//     // renderDish(dish) {
//     //     if (dish != null)
//     //         return(
//     //             // <DishDetail dish={this.state.selectedDish} />
//     //             // <DishDetail dish={dish} />
//     //             // <Card>
//     //             //     <CardImg top src={dish.image} alt={dish.name} />
//     //             //     <CardBody>
//     //             //       <CardTitle>{dish.name}</CardTitle>
//     //             //       <CardText>{dish.description}</CardText>
//     //             //     </CardBody>
//     //             // </Card>
//     //         );
//     //     else
//     //         return(
//     //             <div></div>
//     //         );
//     // }

//     render() {

//         const menu = this.props.dishes.map((dish) => {
//             return (
//               <div key={dish.id} className="col-12 col-md-5 m-1">
//                 <Card onClick={() => this.props.onClick(dish.id)}>
//                     <CardImg width="100%" src={dish.image} alt={dish.name} />
//                     <CardImgOverlay>
//                         <CardTitle>{dish.name}</CardTitle>
//                     </CardImgOverlay>
//                 </Card>
//               </div>
//             );
//         });
//         console.log('Menu Component render is invoked');

//         return (
//             <div className="container">
//                 <div className="row">
//                     {menu}
//                 </div>
                
//                 {/* <div className="row"> */}
//                   {/* <div  className="col-12 col-md-5 m-1"> */}
//                   {/* <div> */}
//                     {/* {this.renderDish(this.state.selectedDish)} */}
//                   {/* </div> */}
//                 {/* </div> */}
//             </div>
//         );
//     }
// }

export default Menu;