import User from "./User"
import UserClass from "./UserClass";
import React from "react";

// const About = () =>{
//     return (
//         <div>
//             <h1> AboutUs Page</h1>
//             <h2>Welecome to the Namaste Reatc Seriec</h2>
//             <User name={"Bhanu Singh (function)"} />
//             <UserClass name={"Bhanu Singh (class)"} location ={"Noida (class)"}/>
//         </div>
//     );
// };

class About extends React.Component {
    constructor(Props){
        super(Props);

        console.log("Parent Consructor");
    };

    componentDidMount(){
        console.log("Parent component did mount");
    };

    render (){
        console.log("parent render")
        return (
            <div>
                <h1> AboutUs Page</h1>
                <h1> AboutUs Page</h1>
                <h1> AboutUs Page</h1>
                <h2>Welecome to the Namaste Reatc Seriec</h2>
                {/* <User name={"Bhanu Singh (function)"} /> */}
                <UserClass name={"First (class)"} location ={"Noida (class)"}/>
                <UserClass name={"Second (class)"} location ={"Chandigarh (class)"}/>
            </div>
        );
    };
};

export default About;