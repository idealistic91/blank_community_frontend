import React from 'react'
import { Paths } from '../config/Paths'
import Tab from 'react-bootstrap/Tab'
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import BasicLayout from '../layouts/BasicLayout'
import EventIndexCard from '../components/events/EventIndexCard'
import LoadingLogo from '../components/LoadingLogo'
import '../styles/Events.css'


class Events extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            key: 'live_events',
            events: []
        }
        this.fetch(this.state.key)
    }

    fetch = (scope) => {
        this.setState({events: []})
        this.setState({key: scope})
        this.props.fetchData(`${Paths.baseUrl}${Paths.communities}/${this.props.currentCommunity}/events?scope=${scope}`)
        this.setState({events: this.props.data})
    }

    buildEventCards = (events) => {
        events.map((e)=>{
            return(<div className="col-md-12 col-xl-6 col-xxl-4">
            <EventIndexCard data={e}/>
        </div>)
        })
    }

    render(){

        const events = this.props.data.map((event)=>{
            return(
                <div className="col-md-12 col-xl-6 col-xxl-4">
                    <EventIndexCard data={event}/>
                </div>
            )
        })

        const cardBodyStyle = () => {
           if(this.props.loading) {
                return({background: '#1C2023'})
           }
        }

        return(
            <>
                <BasicLayout>
                    <Tab.Container
                        id="controlled-tab-example"
                        defaultActiveKey='live_events'
                        className="mb-3"
                        bg="dark"
                        onSelect={(k) => this.fetch(k)}
                                    >
                    <BasicLayout.Sidebar id="left-sidebar">
                    <Nav variant="pills" className="flex-column">
                                    <Nav.Item>
                                    <Nav.Link eventKey="live_events">Live</Nav.Link>
                                        </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="upcoming_events">Bevorstehend</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="past_events">Vergangen</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                    </BasicLayout.Sidebar>
                    <BasicLayout.Center>
                        <div className="container">
                            <Card bg='dark' text='light' id="events-card">
                                    <Card.Header>

                                    </Card.Header>
                                    <Card.Body style={cardBodyStyle()}>
                                        <Tab.Content>
                                            <Tab.Pane eventKey="live_events">
                                                <div className="row">
                                                    {this.props.loading && 
                                                    <div id="loading-wrapper"><LoadingLogo size="big"/></div>
                                                    }
                                                    {!this.props.loading && events}
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="upcoming_events">
                                                <div className="row">
                                                    {this.props.loading && 
                                                    <div id="loading-wrapper"><LoadingLogo size="big"/></div>
                                                    }
                                                    {!this.props.loading && events}
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="past_events">
                                                <div className="row">
                                                    {this.props.loading && 
                                                    <div id="loading-wrapper"><LoadingLogo size="big"/></div>
                                                    }
                                                    {!this.props.loading && events}
                                                </div>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Card.Body>
                                
                            </Card>
                        </div>
                        
                    </BasicLayout.Center>
                    {/* <BasicLayout.Sidebar/> */}
                    </Tab.Container>
                </BasicLayout>
            </>
        ) 
    }
}

export default Events;