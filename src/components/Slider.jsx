import { useState, useEffect } from 'react'
import '../scss/Slider.scss'

function Slider({isYearPlan}) {
    const [pricing, setPricing] = useState(16)
    const [pageviews, setPageviews] = useState('100K')
    const [progress, setProgress] = useState(50)

    function changeValue(e) {
        const currentValue = e.target.value
        const maxValue = e.target.max

        setProgress(Math.floor(currentValue / maxValue * 100))
    }

    // Change the pricing when changing the range and switching to year plan
    useEffect(() => {
        if (isYearPlan) {
            if ( progress < 25) {
                setPricing(6)
                setPageviews('10K')
            } else if ( progress < 50 ) {
                setPricing(9)
                setPageviews('50K')
            } else if ( progress < 75 ) {
                setPricing(12)
                setPageviews('100K')
            } else if ( progress < 100 ) {
                setPricing(18)
                setPageviews('500K')
            } else if ( progress === 100 ) {
                setPricing(27)
                setPageviews('1M')
            }
        } else {
            if ( progress < 25) {
                setPricing(8)
                setPageviews('10K')
            } else if ( progress < 50 ) {
                setPricing(12)
                setPageviews('50K')
            } else if ( progress < 75 ) {
                setPricing(16)
                setPageviews('100K')
            } else if ( progress < 100 ) {
                setPricing(24)
                setPageviews('500K')
            } else if ( progress === 100 ) {
                setPricing(36)
                setPageviews('1M')
            }
        }
    }, [progress, isYearPlan])


    return (
        <div className="calculator-slider-container">
            <div className="calculator-slider-pageview">{pageviews} pageviews</div>
            <div className="calculator-slider-price">
                <span>${pricing}.00</span> / month
            </div>
            <div className="calculator-slider">
                <input
                    className="calculator-slider-input"
                    type="range"
                    min="0"
                    max="100"
                    onChange={changeValue}
                    style={
                        { background: `linear-gradient(to right, hsl(174, 77%, 80%) ${progress}%, hsl(224, 65%, 95%) ${progress}%)` }
                    }
                />
            </div>
        </div>
    )
}

export default Slider