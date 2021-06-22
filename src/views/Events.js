import React from 'react'
import { Paths } from '../config/Paths'

class Events extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            loadingDots: '',
        }
        this.props.fetchData(
            `${Paths.baseUrl}${Paths.communities}/${this.props.currentCommunity}/events`
        )
    }

    loadingAnimation = () => {
        // Just playing around - replace this with a proper spinner
        // const loadingInterval = setInterval(() => {
            
        // }, 1000);
        // setTimeout(() => {
        //     clearInterval(loadingInterval)
        // }, 10000);
        // this.setState((prevState, _var)=> {
        //     console.log('interval fired')
        //     return {
        //         loadingDots: prevState.loadingDots += '.'
        //     }
        // })
    }

    render(){

        const events = this.props.data.map((event)=>{
            return(<li>{event.title}</li>)
        })
        
        if(this.props.isLoading == true) {
            this.loadingAnimation()
            return(<h1>{this.state.loadingDots}</h1>)
        } else {
            return(<ul>{events}</ul>)
        }
        
    }
}

export default Events;