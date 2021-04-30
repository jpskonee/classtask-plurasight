import React from 'react'

const CardProps = (props) => {
    return (
        <div style={{
            width: "350px",
            height: "200px",
            backgroundColor: "#212121",
            borderRadius: "10px",
            margin: "10px 0px 0px 10px",
            display: "flex",
            justifyContent: "space-between",
            padding: "10px"
        }}>
            <div style={{
                color: "white",
                margin: "auto 0px",
                textAlign: "left",
            }}>
                <div> Paths </div>
                <div style={{
                    fontSize: "30px"
                }}> {props.text} </div>
                <div > {props.numb} Courses </div>
                <div>  Take A Look </div>
            </div>
            <div>
                <img src={props.img} width="80px" height="80px" objectFit="cover" alt="Just an image"/>
            </div>
        </div>
    )
}

export default CardProps
