import React from 'react'
import Truncate from 'react-truncate';
import Card from 'react-bootstrap/Card'
import '../../styles/EventIndexCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class EventIndexCard extends React.Component {
    constructor(props){
        super(props)
    }

    render() {

        const event = this.props.data
        const members = event.members
        const games = event.games
        const avatars = members.map((member)=> {
            return(<img src={member.picture_url} className="rounded-circle avatar-small"/>)
        })
        const gamePictures = games.map((game) =>{
            return(<img src={game.cover}/>)
        })
        return(
            <Card bg='dark' text='light' className="event-item-card mb-3">
                <Card.Header>
                    <div className="row">
                        <div className="col-md-6">{event.title}</div>
                        <div className="col-md-6">
                            <div className="float-right participant-avatars">
                                {avatars}
                            </div>
                        </div>
                    </div>
                </Card.Header>
                <Card.Body>
                    <div className="row">
                        <div className="col-md-6">
                            <p className="card-text">
                            <Truncate lines={3} ellipsis={<span> ...</span>}>
                                {event.description}
                            </Truncate>
                            </p>
                            <div className="item-date">
                                <FontAwesomeIcon icon="calendar-day" />
                                <small>{event.date}</small>
                            </div>
                            <div className="item-time">
                                <FontAwesomeIcon icon="clock" />
                                <small>{event.start_at}</small>
                                <FontAwesomeIcon icon="clock" />
                                <small>{event.ends_at}</small>
                            </div>
                        </div>
                        <div className="col-md-6">
                            {gamePictures}
                        </div>
                    </div>
                </Card.Body>
                <Card.Footer className="event-item-footer">

                </Card.Footer>
            </Card>
        )
    }
}

export default EventIndexCard;