import React from "react";


function PhotoDisplay(props) {
    console.log(props.photos);

    if (props.photos) {

        return (
            <div className="photo-display-container">
                <div className="row">
                    {props.photos.map(function (photos, index) {
                    return (
                        <div className="col-4" key={index}>
                        <a href={photos.url} target="_blank">
                        <img src={photos.src.landscape} alt={photos.alt} className="img-fluid"  />
                        </a>
                        </div>
                    );
                })}
                </div>
            </div>
        );
    } else {
        return null;
    }

    
}

export default PhotoDisplay