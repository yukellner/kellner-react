


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


        document.addEventListener("mousedown", this.removeevent);

    }

    removeevent = () => {

        if(this.state.isOn) {
            this.setState({ isOn: false })
            document.removeEventListener('mousemove', this.updatePos)
        }
        else {
            this.setState({ isOn: true })
            document.addEventListener('mousemove', this.updatePos)

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
                </div>




            </section>
        )
    }
}