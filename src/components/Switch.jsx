import '../scss/Switch.scss'

function Switch ({isYearPlan, planHandler}) {

    function onChangePlan() {
        planHandler(!isYearPlan)
    }

    return (
        <div className="calculator-plan-switch" onClick={onChangePlan}>
            <span
                className={isYearPlan ? 'calculator-plan-switch-ball active' : 'calculator-plan-switch-ball'}
            ></span>
        </div>
    )
}

export default Switch