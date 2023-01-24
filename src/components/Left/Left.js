import React from 'react'
import "./Left.css"
import komp from "../../assets/images/komp.webp"


const Left = () => {
  return (
    <div>
        <div className="sec6_sol">
			<div className="ortalama  ortalama_sec6">
				<div className="orta_sol1">
					<div className="cem">
						<div className="online">
							<p>Onlayn kredit ödənişi</p>
						</div>
						<div className="bank">
							<p>Banka gəlmədən və növbələrdə vaxt itirmədən kartınızla 4 addıma kredit borcunuzun ödənişi.</p>
						</div>
					</div>
					<div className="odenis">
						<a href="#">Ödəniş et</a>
						<i className="fa-solid fa-right-long"></i>
					</div>

				</div>
				<div className="orta_sag1">
					<img src= {komp} alt = "Komp"/>
				</div>

			</div>
		</div>
    </div>
  )
}

export default Left