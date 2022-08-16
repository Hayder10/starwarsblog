import React, { useState, useEffect, useContext } from 'react'
import { Context } from '../store/appContext';



function People() {
    const { store,actions } = useContext(Context);
    return (
        <>
            {!!store.people&&store.people.map((persona, i) => {
                return (
                    <div className="card" key = {i} style={{ width: "18rem" }}>
                        <img src="https://i.kym-cdn.com/entries/icons/original/000/000/157/itsatrap.jpg" className="card-img-top"></img>
                        <div className="card-body">
                            <h5 className="card-title">{persona.name}</h5>
                            <p className="card-text">
                                Mass : {persona.mass} <br />
                                Height : {persona.height} <br />
                                Birthyear : {persona.birth_year}
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

export default People