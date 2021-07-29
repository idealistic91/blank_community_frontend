import React from 'react'

class BasicLayout extends React.Component {
    constructor(props) {
        super(props)
    }

    static Sidebar = class Sidebar extends React.Component {
        constructor(props) {
            super(props)
        }
        render() {
            return(
                <div className="col-lg-2 col-md-2" id={this.props.id}>
                    {this.props.children}
                </div>
            )
        }
    }
    
    static Center = class Center extends React.Component {
        constructor(props) {
            super(props)
        }
        render() {
            return(
                <div className="col-lg-10 col-md-10 col-sm-12 col-10">
                    {this.props.children}
                </div>
            )
        }
    }

    render() {
        return(
            <div className="row">
                {this.props.children}
            </div>
        )
        
    }
}

export default BasicLayout;