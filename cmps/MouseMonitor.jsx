


export class MouseMonitor extends React.Component {


    state = {
        isOn: true,
        pos: {
            x: 0,
            y: 0
        }
    }


    componentDidMount() {

        this.addMouseListener()


    }


    addMouseListener() {
        if (this.state.isOn === true) document.addEventListener('mousemove', this.updatePos)
    }

    removeevent = () => {


        if(this.state.isOn) {
            this.setState({ isOn: false })
            document.removeEventListener('mousemove', this.updatePos)
            document.querySelector('.btn-mouse-ev').innerText = 'resume'
        }
        else {
            this.setState({ isOn: true })
            document.addEventListener('mousemove', this.updatePos)
            document.querySelector('.btn-mouse-ev').innerText = 'pause'

        }


    }

    updatePos(event) {

        var pageX = document.getElementById("x");
        var pageY = document.getElementById("y");
        pageX.innerText = event.pageX;
        pageY.innerText = event.pageY;


    }







    render() {

        return (

            <section>

                <div className="mouse-modal">
                    <h3   >x: <span id={'x'}></span></h3>
                    <h3   >y: <span id={'y'}></span></h3>
                    <button className={'btn-mouse-ev'} onClick ={this.removeevent}>pause</button>
                </div>




            </section>
        )
    }
}