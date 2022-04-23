
export class CountDown extends React.Component {



    state = {
        sec: this.props.startFrom,
        color: ''
    }

    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState({ sec: this.state.sec - 1 })
            if (this.state.sec <= 6) this.setState({ color: 'red' })
            if (this.state.sec <= 0) {
                this.props.onDone()
                clearInterval(this.intervalId)

            }


        }, 1000)


        
    }





    render() {
        return (
            <section>

                <h3 className={this.state.color}> {this.state.sec}


                </h3>


            </section>
        )
    }
}