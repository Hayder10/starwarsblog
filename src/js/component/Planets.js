import React, { useState, useEffect, useContext } from 'react'
import { Context } from '../store/appContext'

function Planets() {
    const {store,actions} = useContext(Context)
    return (
        <>
            {!!store.planets && store.planets.map((planeta, i) => {
                return (
                    <div className="card" key={i} style={{ width: "18rem" }}>
                        <img src="https://i.kym-cdn.com/entries/icons/original/000/000/157/itsatrap.jpg" className="card-img-top"></img>
                        <div className="card-body">
                            <h5 className="card-title">{planeta.name}</h5>
                            <p className="card-text">
                                Population : {planeta.population} <br />
                                Climate : {planeta.climate} <br />
                                Gravity : {planeta.gravity}
                            </p>
                            <a href="#" className="btn btn-outline-primary">
                                Learn More!
                            </a>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default Planets