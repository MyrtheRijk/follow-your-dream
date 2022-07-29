import { Link, useMatch, useResolvedPath } from "react-router-dom";
import './Navbar.css';

export default function Navbar(): JSX.Element {
    return (
        <nav className="nav">
            <Link to="/" className="site-title">Follow Your Dream</Link>
            <ul>
                <Link to="/dreams">Dreams</Link>
                <Link to="/info">Info</Link>
                <Link to="/reviews">Reviews</Link>
                <Link to="/contact">Contact</Link>
            </ul>
        </nav>
    )
}

// type Customlinkprop = {
//     to: string;
//     children: string;
// };

// function CustomLink: React.FunctionComponent<CustomLinkprop> = ({ to, children, ...props}): JSX.Element {
//     const resolvedPath = useResolvedPath(to)
//     const isActive = useMatch({ path: resolvedPath.pathname, end: true })
//     return (
//         <li className={isActive ? "active" : ""}>
//             <Link to={to} {...props}>{children}</Link>
//         </li>
//     )
// }




// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Offcanvas from 'react-bootstrap/Offcanvas';


// export default class NavBarComp extends Component {
//     render() {
//         return (
//             <> 
//               {[false, 'sm', 'md', 'lg', 'xl', 'xxl'].map((expand) => (
//                 <Navbar bg="light" expand={expand} className="mb-3">
//                   <Container fluid>
//                     <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
//                     <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
//                     <Navbar.Offcanvas
//                       id={`offcanvasNavbar-expand-${expand}`}
//                       aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
//                       placement="end"
//                     >
//                       <Offcanvas.Header closeButton>
//                         <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
//                           Offcanvas
//                         </Offcanvas.Title>
//                       </Offcanvas.Header>
//                       <Offcanvas.Body>
//                         <Nav className="justify-content-end flex-grow-1 pe-3">
//                           <Nav.Link href="#action1">Home</Nav.Link>
//                           <Nav.Link href="#action2">Link</Nav.Link>
//                         </Nav>
//                       </Offcanvas.Body>
//                     </Navbar.Offcanvas>
//                   </Container>
//                 </Navbar>
//               ))}
//             </>
//           );
//     }
// }