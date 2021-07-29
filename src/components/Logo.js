import React from 'react'
import LoadingLogo from './LoadingLogo'
import '../styles/Logo.css';
import { connect } from 'react-redux';

class Logo extends React.Component {
    constructor(props){
        super(props)
    }

    anyModalOpen = () => {
        if(this.props.ignoreModals) { return false }
        let modal = document.querySelector('.modal-open')
        return modal != null
    }

    render() {
        const klass = `logo-letter-${this.props.size}`
        if(this.props.loading && !this.anyModalOpen()) {
            return(<LoadingLogo />)
        } else {
            return(
                <div id="logo-wrapper">
                    <span className={'capital-d-' + this.props.size}>D</span>
                    <span className={klass} key="e">e</span>
                    <span className={klass} key="v">v</span>
                    <span className={klass} key="2e">e</span>
                    <span className={klass} key="n">n</span>
                    <span className={klass} key="t">t</span>
                </div>
            )
        }
    }
}

Logo.defaultProps = {
    size: 'small'
}

const mapStateToProps = state => {
    return {
      loading: state.app.loading
    }
  } 
   
export default connect(mapStateToProps)(Logo);