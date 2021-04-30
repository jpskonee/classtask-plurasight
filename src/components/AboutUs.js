import React from 'react'
import CardProps from './about-comp/CardProps'
import img1 from "../asset/js.png"
import  img2 from "../asset/c#.png"
import img3 from "../asset/angular.png"
import img4 from "../asset/python.png"

const AboutUs = () => {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center"
        }}>
            
            <CardProps
                text="Javascript"
                numb="11"
                img={img1}
            />
            <CardProps
                text="Angular"
                numb="15"
                 img={img2}
            />
            <CardProps
                text="C#"
                numb="9"
                 img={img3}
            />
            <CardProps
                text="Pyhon"
                numb="8"
                 img={img4}
            />
        </div>
    )
}

export default AboutUs
