import React,{useState,useEffect} from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data'
import './index.css';

const Slider = () => {
    const [people,setPeople] = useState(data)
    const [index,setIndex] = useState(0)

    useEffect(() => {
        let lastIndex = people.length - 1;
        if (index < 0 ) {
            setIndex(lastIndex)
        }
        if (index >  lastIndex) {
            setIndex(0)
        }
    }, [index,people])

    //自动播放
    useEffect(() => {
        let timer = setInterval(() => {
            setIndex(index + 1)
        },5000)
        return () => {
            clearInterval(timer)
        }
    }, [index,people])
    return (
        <section className="section">
            <div className="title">
                <h2>
                    <span>/</span>
                    人员评价信息
                </h2>
            </div>
            <div className="section-center">
                {
                    people.map((person,personIndex) => {
                        const { id, image, name, title, quote } = person
                        let position = 'nextSlide'
                        if (personIndex === index) {
                            position = 'activeSlide'
                        }
                        if (personIndex === index - 1 || (index == 0 && personIndex === people.length - 1)) {
                            position = 'lastSlide'
                        }
                        return (
                            <article className={position} key={id}>
                                <img className="person-img" src={image} alt={name}/>
                                <h4>{name}</h4>
                                <p className="title">{title}</p>
                                <p className="title">{quote}</p>
                                <FaQuoteRight className="icon"/>
                            </article>
                        )
                    })
                }
                <button className="prev" onClick={() => setIndex(index - 1)}>
                    <FiChevronLeft/>
                </button>
                <button className="next" onClick={() => setIndex(index + 1)}>
                    <FiChevronRight/>
                </button>
            </div>
        </section>
    )
}

export default Slider
