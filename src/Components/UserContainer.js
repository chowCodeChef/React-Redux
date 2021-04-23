import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchUsers} from '../Redux/User/userActions'

function UserContainer(props) {

    useEffect(() => {
        props.fetchUsers()
    }, [])

    return (
        <div>
           {
              props.userData.loading? (<h2>Loading...</h2>) :
              props.userData.error? (<h2> {props.userData.error} </h2>) :
              (
                <div> 
                    <h2> UserList </h2>
                    <div>
                        {
                            props.userData && props.userData.users
                            && props.userData.users.map(
                                user => <p>{user.name}</p>
                            )
                        } 
                    </div>
                </div>
                  
              )
           }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        userData: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => {
            dispatch(fetchUsers())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)
