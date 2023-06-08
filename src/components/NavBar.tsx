import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
	<nav className="navbar">
		<NavLink to="/">Home</NavLink>
		<NavLink to="/new-estimate">New Estimate</NavLink>
		<NavLink to="/new-receipt">New Receipt</NavLink>
		<NavLink to="/pricing">Pricing</NavLink>
	</nav>
  )
}