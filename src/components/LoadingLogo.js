import React from 'react'


class LoadingLogo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            klass: `logo-letter-${this.uuidv4()}`
        }
    }

     uuidv4 = () => {
        return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
          (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(36)
        );
      }


    loadingAnimation = (klass) => {
        let capitalD = document.querySelector(`.capital-d-${this.props.size}`)
        capitalD.classList.add('loading')
        let letters = document.querySelectorAll(`.logo-letter-${klass}`)
        let i = 0;
        let interval = setInterval(() => {
            let klass = 'logo-up'
            let el = letters[i]
            el.classList.add(klass)
            setTimeout(()=>{ el.classList.remove(klass) }, 1000)
            i += 1
            if(i == letters.length) { i = 0; }
          }, 500)
          
          setTimeout(()=>{clearInterval(interval)}, 20000)   
    }

    componentDidMount() {
        this.loadingAnimation(this.state.klass)
    }

    render() {
        const klass = `logo-letter-${this.props.size} logo-letter-${this.state.klass}`
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

LoadingLogo.defaultProps = {
    size: 'small'
}


export default LoadingLogo;