import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import {fetchUsers} from '../redux'

function UserContainer({userData,fetchUsers}) {
    
    useEffect(() => {
       
        fetchUsers();

    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    

    return userData.isLoading ? 
    (
        <h2> Loading</h2>
    )
    : userData.error ? (
        <h2>{userData.error}</h2>
    )
    : (
        <div>
            <h2>UserList</h2>
            <div>
                {
                    userData && userData.users && userData.users.map(user => <p>{user.name}</p>)
                }
            </div>
        </div>
        
    )
}

const mapStateToProps = state => {
    return{
        userData : state.users
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers : () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)( UserContainer)
