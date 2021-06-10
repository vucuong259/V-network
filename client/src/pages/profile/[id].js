import React from 'react'
import Info from '../../components/profile/Info'
import Posts from '../../components/profile/Posts'
import {useSelector} from 'react-redux'
import loadIcon from '../../images/loading.gif'


const Profile = () => {
    const {profile} = useSelector(state => state)
    return (
        <div className="profile">
            {
                profile.loading
                ? <img src={loadIcon} alt="Loading" />:
                <Info />
            }
            
            <Posts />
        </div>
    )
}

export default Profile
