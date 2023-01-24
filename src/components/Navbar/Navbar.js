import React from 'react'
import "./Navbar.css"
import KapitalBankLogo from "../assets/images/kapital.svg";

const Navbar = () => {
  return (
    <nav id="nav1">
		<div className="ortalama">
			<div className="nav_sekil">
				<img src={KapitalBankLogo} alt="Logo"/>
			</div>
			<div className="navbar">
				<ul>
					<li className="fiziki">
						<a href="#">Fiziki sexsler ucun</a>
					</li>
					<li>
						<a href="#">Biznes ucun</a>
					</li>
					<li>
						<a href="#">Xidmet sebekesi </a>
					</li>
					<li>
						<a href="#">EN</a>
					</li>
					<li>
						<a href="#">RU</a>
					</li>
					<li>
						<a href="#">
							<i className="fa-solid fa-magnifying-glass"></i>
						</a>
					</li>
				</ul>
				

			</div>
			<div className="media_icon">
				<div className="header_birbank">
					<a href="#">birbank</a>
				</div>
				<div className=""></div>
				 <input type="checkbox" id="icon" />
				<label htmlFor="icon"></label>
			</div>
		</div>
	</nav>
  )
}

export default Navbar