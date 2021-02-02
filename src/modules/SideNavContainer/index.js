import {
  NavLink,
} from "react-router-dom";

const SideNavContainer = (props) => {
  const routes = props?.routes
  return (
  <div className="" style={{ display: "flex", overflow:"hidden", height:"100vh"}}>
    <aside className="side-nav">
        <ul className="nav-items top"/>
        <ul className="nav-items middle">
          {routes.map((route, index) => (
            <NavLink key={index} className={`nav-item icon-place-holder ${route.path}`}  to={`/${route.path}`}/>
          ))}
        </ul>
        <ul className="nav-items bottom"/>
    </aside>
    <div className="App App-header">
      {props.children}
    </div>
  </div>
  )
}

export default SideNavContainer;