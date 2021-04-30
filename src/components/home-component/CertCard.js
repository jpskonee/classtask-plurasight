import React from 'react'


const CertCard = (props) => {
    return (
        <div style={{
                width: "400px",
                height: "500px",
                backgroundColor: "#212121",
                borderRadius: "10px",
                margin: "30px auto",
                padding: "20px",
                color: "white",
                textAlign: "left",
                boxShadow: "10px 10px 8px 10px #888888"
            }}>
            <div style={{
                display: "flex",
                justifyContent: "left",
                marginLeft: "5px",
                marginBottom:"30px"

            }}>
                <div> 
                     <img src={props.img}
                        height="25px"
                        width="25px"
                     />
                </div>
                <div style={{
                    marginLeft: "12px",
                    fontSize: "20px",

                }}> {props.text} </div>
            </div>
            <div style={{
                fontSize: "4.3vh",
                fontFamily: "Anton",
                display: "flex",
                justifyContent: "left",

            }}>
                {props.title}
            </div>
            <div style={{
                marginTop: "20px",
                fontSize: "15px",

            }}> {props.para} </div>
            <div style={{
                marginTop: "25px",
                fontSize: "20px",
                border: "2px solid #212121",
                boxShadow: "white, 0.2"
            }}> Learn More - </div>
        </div>
    )
}

export default CertCard
