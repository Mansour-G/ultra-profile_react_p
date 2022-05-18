
import React, { Component } from "react";
import axios from "axios";

import {
    SocialMedia,
    SocialIcon,
    Icon,
    SocialDesc,
    Span1,
    Span2
} from './style'


class Social extends Component {

    state = {
        social : []
    }

    componentDidMount = () => {
        axios.get('js/data.json').then( res => {this.setState({ social : (res.data.social)})} )
    }


    render(){

        const {social} = this.state;

        const socialList = social.map((socialItem) =>{
            return(
                <SocialIcon item={socialItem.id} key={socialItem.id}>
                <Icon className={socialItem.icon}></Icon>
                <SocialDesc>
                    <Span1>{socialItem.title}</Span1>
                    <Span2>{socialItem.body}</Span2>
                </SocialDesc>
            </SocialIcon>
            )
        })

        return (
    
            <SocialMedia>
            
            {socialList}

            </SocialMedia>
        );
    }
}

export default Social;
