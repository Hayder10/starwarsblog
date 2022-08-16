import React, { useState, useEffect, useContext } from 'react'
import { Context } from '../store/appContext';



function People() {
    const { store, actions } = useContext(Context);
    return (
        <>
        <div className='container'>
        <div className='card-group m-2 d-flex flex-nowrap' style={{overflowX: 'scroll'}}>
            {!!store.people && store.people.map((persona, i) => {
                return (
                        <div className="card" key={i} style={{ width: "18rem" }}>
                            <img src="https://i.kym-cdn.com/entries/icons/original/000/000/157/itsatrap.jpg" className="card-img-top"></img>
                            <div className="card-body">
                                <h5 className="card-title">{persona.name}</h5>
                                <p className="card-text">
                                    Mass : {persona.mass} <br />
                                    Height : {persona.height} <br />
                                    Birthyear : {persona.birth_year}
                                </p>
                                <div className='d-flex justify-content-between'>
                                    <a href="#" className="btn btn-outline-primary">
                                        Learn More!
                                    </a>
                                    <button type='button' onClick={() => actions.addToFavorite(persona.name)} className='btn btn-outline-warning'>
                                        <i className="fa-regular fa-heart"></i>
                                    </button>

                                </div>

                            </div>
                        </div>
                )
            })}
        </div>
        </div>
        </>
    )
}

export default People