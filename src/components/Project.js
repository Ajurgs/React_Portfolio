import React from 'react';

export default function Project({title,gitLink,deployLink,src}){
    return(
        <>
        <div className="project">
            <a href={deployLink}>
              <img
                src={src}
                alt={title}
              />
            </a>
            <div className="title">
              <h3>{title}</h3>
              <h4>
                <a href={gitLink}>Github Repo</a>
              </h4>
            </div>
          </div>
        </>
    )

}