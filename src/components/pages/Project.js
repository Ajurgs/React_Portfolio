import React from 'react';
const Styles ={
 cardImgTop:{
   width:"100%",
   height:"10vw",
 }
}
export default function Project({title,gitLink,deployLink,src}){
    return(
        <div className="col-12 col-lg-6 p-3 mt-5">
        <div className="card text-white">
            <a href={deployLink}>
              <img
                src={src}
                alt={title}
                className="card-img-top"
                style ={Styles.cardImgTop}
              />
            </a>
            <div className="card-body bg-dark">
              <h3 className="card-title">{title}</h3>
              <h4>
                <a href={gitLink} className="btn btn-secondary">Github Repo</a>
              </h4>
            </div>
          </div>
        </div>
    )

}