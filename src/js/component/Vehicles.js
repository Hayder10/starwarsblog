import React,{ useState, useEffect, useContext } from 'react'
import { Context } from '../store/appContext'

function Vehicles() {
    const {store,actions} = useContext(Context)
  return (
    <>
        {!!store.vehicles && store.vehicles.map((vehiculo,i) =>{
            return(
                <div className="card" key={i} style={{ width: "18rem" }}>
                        <img src="https://i.kym-cdn.com/entries/icons/original/000/000/157/itsatrap.jpg" className="card-img-top"></img>
                        <div className="card-body">
                            <h5 className="card-title">{vehiculo.name}</h5>
                            <p className="card-text">
                                Model : {vehiculo.model} <br />
                                Manufacturer : {vehiculo.manufacturer} <br />
                                Crew : {vehiculo.crew}
                            </p>
                            <div className='d-flex justify-content-between'>
                                <a href="#" className="btn btn-outline-primary">
                                    Learn More!
                                </a>
                                <button type='button' onClick={() => actions.addToFavorite(vehiculo.name)} className='btn btn-outline-warning'>
                                    <i className="fa-regular fa-heart"></i>
                                </button>

                            </div>
                        </div>
                    </div>
            )
        })}
    </>
  )
}

export default Vehicles