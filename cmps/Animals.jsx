


export class Animals extends React.Component {


    animalInfos = [
        { type: 'Malayan Tiger', count: 787 },
        { type: 'Mountain Gorilla', count: 212 },
        { type: 'Fin Whale', count: 28 },]



    render() {
        return (
            <section>

                <table>
                    <tbody>
                        {this.animalInfos.map((animal, idx) => (
                            <tr key={idx+300}>
                                <td key={idx} >{animal.type}</td>
                                <td key={idx+100} >{animal.count}</td>
                                <td key={idx+200} ><a href={`https://www.google.com/search?q=${animal.type}`}>search</a></td>
                            </tr>
                ))}
                </tbody>
                </table>
            </section>
        )
    }
}