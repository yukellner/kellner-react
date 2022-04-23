


export class SeasonClock extends React.Component {


    state = {
        clock: new Date(),
        isDark: true
    }


    logSomething = () => {
        
    }


     myDayName = () => {
        
        return r
    }

    getSeason = () => {


        const dayDetails = {
            day: 'sunday',
            season: 'winter',
            month: 'jan'
        }


        const { clock } = this.state
        const month = clock.getMonth() + 1

        dayDetails.month = clock.toLocaleString('default', { month: 'long' })

        var a = new Date();
        var weekdays = new Array(7);
        weekdays[0] = "Sunday";
        weekdays[1] = "Monday";
        weekdays[2] = "Tuesday";
        weekdays[3] = "Wednesday";
        weekdays[4] = "Thursday";
        weekdays[5] = "Friday";
        weekdays[6] = "Saturday";
        dayDetails.day = weekdays[a.getDay()];



        

        if (3 <= month <= 5) {
            dayDetails.season = 'spring';
        }

        else if (6 <= month <= 8) {
            dayDetails.season = 'summer';
        }

        else if (9 <= month <= 11) {
            dayDetails.season = 'fall';
        }

        else dayDetails.season = 'winter';



        return dayDetails

    }



    getClassName = () => {

        if (this.state.isDark === true) {
            
            return 'light'

        }
        else {
            return 'dark'

        }

    }

    updateClass = () => {
        if (this.state.isDark) this.setState({ isDark: false })
        else this.setState({ isDark: true })
    }







    render() {
        const { clock } = this.state;

        return (

            <section>



                <h2>season</h2>

                <table>

                    {<tbody>
                        <tr>
                            <td className={this.getClassName()} onClick={() => {
                                this.updateClass()
                            }} >
                                <h3>{this.getSeason().month}({this.getSeason().season})</h3>
                                <img src={`img/${this.getSeason().season}.PNG`} ></img>
                                <h3>{this.getSeason().day}</h3>

                            </td>

                        </tr>
                    </tbody>}

                </table>
            </section>
        )
    }
}