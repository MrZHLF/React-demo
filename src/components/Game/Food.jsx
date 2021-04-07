import React from 'react'

const Food = ({food}) => {
    const stye = {
        left:`${food[0]}%`,
        top:`${food[1]}%`
    }
    return (
        <div className="snake-food" style={stye}>
            
        </div>
    )
}

export default Food
