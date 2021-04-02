import React from 'react'
import Tour from './Tour'
const Tours = ({tours,removeTour}) => {
    console.log(tours,'tours');
    return (
        <section>
            <div className="title">
                <h2>热门旅游景点排行</h2>
                <div className="underline"></div>
            </div>
            <div>
                {
                    tours.map(tour => {
                        return  <Tour removeTour={removeTour} key={tour.id} { ...tour }/>
                    })
                }
            </div>
        </section>

    )
}

export default Tours
