import React from 'react'

import ProjectHeader from '../ProjectHeader'
import CertCard from './CertCard'
import logo1 from "../../asset/logo1.png"
import logo2 from "../../asset/logo2.png"
import Sider from "../Nav-Bar/Sider"


const home = () => {
    return (
        
        <div >
            <Sider />
            <h1> Home page</h1>
            <div style={{
                display: "flex",
                justifyContent: "space-evenly",
                flexWrap: "wrap"
        }}>
                <CertCard
                    img={logo1}
                    text="CERTIFICATION DEEP"
                    title="Empower your teams to grow their skills and their careers"
                    para="Prepare your team for certification exams with our expert authored content and practice exams."
                />
                <CertCard
                    img={logo2}
                    text="DELIVERY MODULE"
                    title="Make lasting workflow improvements with insights from your Jira data"
                    para="Go beyond Jira data and get visibility into what’s happening within your user stories, tasks and bugs. Flow’s delivery module helps you better understand how your team is working and can make lasting improvements to your workflow."
                />
                <CertCard
                    img={logo1}
                    text="SANDBOXES"
                    title="Utilize a space for unrestricted exploration"
                    para="Sandboxes gives your team a safe environment to practice what they're learning from expert-authored courses."
                />
            </div>
        </div>
    )
}

export default home
