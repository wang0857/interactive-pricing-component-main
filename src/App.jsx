import { useState } from 'react'
import './scss/App.scss'
import Slider from './components/Slider'
import Switch from './components/Switch'
import checkMark from './assets/icon-check.svg'
import Button from './components/Button'
import Tag from './components/Tag'

function App() {
  const [isYearPlan, setIsYearPlan] = useState(false)
  
  function planHandler(plan) {
    setIsYearPlan(plan)
  }

  return (
    <>
      <header>
        <h1>Simple, traffic-based pricing</h1>
        <div className="calculator-slogan">
          <p>Sign-up for our 30-day trial.</p>
          <p>No credit card required.</p>
        </div>
      </header>
      <div className="calculator-container">
        <Slider isYearPlan={isYearPlan} />
        <div className="calculator-plan">
          <span className="calculator-plan-type">Monthly Billing</span>
          <Switch isYearPlan={isYearPlan} planHandler={planHandler} />
          <div className="calculator-plan-year">
            <span className="calculator-plan-type">Yearly Billing</span>
            <Tag />
          </div>
        </div>
        <div className="calculator-footer">
          <div className="calculator-footer-features">
            <div className="calculator-footer-features-item">
              <div className="calculator-footer-features-icon">
                <img src={checkMark} alt="check mark icon" />
              </div>
              <span>Unlimited websites</span>
            </div>
            <div className="calculator-footer-features-item">
              <div className="calculator-footer-features-icon">
                <img src={checkMark} alt="check mark icon" />
              </div>
              <span>100% data ownership</span>
            </div>
            <div className="calculator-footer-features-item">
              <div className="calculator-footer-features-icon">
                <img src={checkMark} alt="check mark icon" />
              </div>
              <span>Email reports</span>
            </div>
          </div>
          <div className="calculator-footer-btn">
            <Button>Start my trial</Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
