import {Animals} from '../cmps/Animals.jsx'
import {SeasonClock} from '../cmps/SeasonClock.jsx'
import {CountDown} from '../cmps/CountDown.jsx'
import {WatcherApp} from '../cmps/WatcherApp.jsx'
import {MouseMonitor} from '../cmps/MouseMonitor.jsx'


export class Home extends React.Component {

    render() {
        return (
            <section>
                {/* <h2>Home Sweet Home</h2>
                <Animals/>
                <h2>season clock</h2>
                <SeasonClock/>
                <h3>countdown</h3>
                <CountDown startFrom={10} onDone={()=>{ console.log('Done!'); }} />
                <h3>watcher app</h3>
                <WatcherApp/> */}
                <h3>mouse-monitor</h3> 
                <MouseMonitor/>
            </section>
        )
    }
}