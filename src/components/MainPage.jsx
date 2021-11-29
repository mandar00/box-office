import React from 'react'
import Nav from '../Nav'
import Title from './Title'

const MainPage=({children}) =>{
return(<>
    <Title 
        title="Box Office"
        subtitle="Are you looking for a movie or an actor "
    />
    <Nav/>
    {children}
</>)
}
export default MainPage