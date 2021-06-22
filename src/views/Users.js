import React from 'react';
import {Paths} from '../config/Paths';
import Table from 'react-bootstrap/Table'

class Users extends React.Component {
    constructor(props) {
        super(props)
        this.props.fetchData(`${Paths.baseUrl}${Paths.userUrl}`)
    }

    render() {
        const userRows = 
            this.props.data.map((user) => {
                return(
                    <tr key={`user-row-${user.id}`}>
                        <td key={`user-id-${user.id}`}>{user.id}</td>
                        <td key={`user-email-${user.email}`}>{user.email}</td>
                        <td key={`user-discord-id-${user.discord_id}`}>{user.discord_id}</td>
                    </tr>
                )
            })
        

        return(
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>email</th>
                    <th>Discord ID</th>
                    </tr>
                </thead>
                <tbody>
                    {userRows}
                </tbody>
            </Table>
        )
    }
}

export default Users;