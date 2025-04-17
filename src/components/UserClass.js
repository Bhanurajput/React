import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state = {
        };
        console.log(this.props.name, "Constructor");
    };

    componentDidMount(){
        console.log(this.props.name,"component did mount");
    }
    render(){
        console.log(this.props.name,"render");
        const {name, location} = this.props;
        return (
            <div className="user-card">
                <h1>Count1 : {this.state.count1}</h1>
                <h1>Count2 : {this.state.count2}</h1>
                <button 
                    onClick={()=>{
                        this.setState({
                            count1: this.state.count1 + 1,
                            count2: this.state.count2 + 1,
                        });
                    }}>
                    Count Increase
                </button>
                <h2>Name : {name}</h2>
                <h3>Location : {location}</h3>
                <h4>Contact : bhanu9991 </h4>
            </div>
        );
    };
}

export default UserClass;
