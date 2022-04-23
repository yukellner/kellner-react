
export class WatcherApp extends React.Component {



    state = {
        watchers: ['w101', 'w102'],
        selectedWatcher: null
    }

    gUsers = [
        { id: 'w101', fullName: 'Puki Ba', movies: ['Rambo', 'Rocky'] },
        { id: 'w102', fullName: 'Shuki', movies: ['Tiatanic', 'Sky'] }

    ]



    componentDidMount() {

    }

    openModal(id) {

        var selectedUser = this.gUsers.find(user => {
            if (user.id === id) return user
        })

        var userModal = document.querySelector('.user-modal')
        userModal.classList.add('show-modal')

        userModal.innerHTML = `<h2>${selectedUser.fullName}</h3>`

        userModal.innerHTML += selectedUser.movies.map(movie => {
            return `<h3>${movie}</h3>`
        }).join('')


        userModal.innerHTML += `
        <button class="btn-close-modal"
         >X</button>`


        var btn = document.querySelector('.btn-close-modal')

        btn.onclick = function () {
            var userModal = document.querySelector('.user-modal')
            userModal.classList.remove('show-modal')
        }


        
    }

    deleteUser(id) {


        const index = this.gUsers.findIndex(user => {
            return user.id === id;
        });

        this.gUsers.splice(index, 1)

        var array = [...this.state.watchers];
        array.splice(index, 1);
        this.setState({ watchers: array });




    }

    onAddUser() {
        var fullNameUser = prompt('type full namw')
        var moviesUsers = prompt('add movies with comma separator')
        var index = this.gUsers.length
        var id = this.gUsers[index-1].id+1



        const newUser = {
            id: id,
            fullName: fullNameUser,
            movies: moviesUsers.split(',')
        }

        this.gUsers.push(newUser)

        var array = [...this.state.watchers];
        array.push(id);
        this.setState({ watchers: array });


    }









    render() {
        return (
            <section>
                <div className="user-modal">

                </div>
                <div className={'container'}>
                    <h2 className={'align'}>Watcher App</h2>
                    <button className="btn-onAdd align" onClick={() => {
                        this.onAddUser()}}>add user</button>

                    <div className={'users-container'}>
                        {this.gUsers.map((user, idx) => (


                            <div className='card-user'>
                                <img src={`img/${idx+1}.svg`} ></img>
                                <h3 key={user.id} >{user.fullName}</h3>
                                <button data-id={user.id} onClick={() => {
                                    this.openModal(user.id)
                                }} >select</button>
                                <button onClick={() => {
                                    this.deleteUser(user.id)


                                }}>X</button>


                            </div>



                        ))}

                    </div>


                </div>



            </section>
        )
    }
}