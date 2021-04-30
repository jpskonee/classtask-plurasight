import { Header } from 'antd/lib/layout/layout'
import React from 'react'

import { Link } from "react-router-dom";

const ProjectHeader = () => {
    return (
        <div>
            <Header style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly"
            }}>
                <div style={{
                    color: "white",
                    fontWeight: "bold",
                    textTransform: "uppercase"
                }}> <Link to="/" style={{color:"white"}}> Home </Link> </div>
                <div style={{
                    color: "white",
                    fontWeight: "bold",
                    textTransform: "uppercase"
                }}> <Link to="/aboutus"> About Us </Link> </div>
                <div style={{
                    color: "white",
                    fontWeight: "bold",
                    textTransform: "uppercase"
                }}>  <Link to="/feeds"> Feeds </Link></div>
            </Header>
        </div>
    )
}

export default ProjectHeader
