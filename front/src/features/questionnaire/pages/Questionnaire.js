import { formStepModel } from '../models/form-step-model.js';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

export default function Questionnaire() {
    const navigate = useNavigate();
    const [formStepState/*, setFormStepState*/] = useState(formStepModel);
    let [step, setStep] = useState(0);

    const buildSearchRqst = (formStepState) => {
        let bodySearch = {};
        formStepState.forEach(s => {
            bodySearch[s.questionCode] = s.selectedResponseValue;
        });
        return bodySearch;
    };

    const navigateToResult = (formStepState) => {
        const searchRqst = buildSearchRqst(formStepState);
        navigate("/result", { state: searchRqst });
    };

    const saveStepResponseAndGoToTheNextStep = (response) => {
        formStepState[step].selectedResponseValue = response.value;
        step = step + 1;
        setStep(step);
        if (step === formStepState.length) {
            navigateToResult(formStepState);
        }
    };

    const renderResponse = (response) => {
        return <div key={response.value} className="response">
            <div className="img" style={{backgroundImage: `url(${response.imgSrc})`}}>
            </div>
            <button className="response-btn" onClick={() => saveStepResponseAndGoToTheNextStep(response)}>
                {response.label}
            </button>
        </div>
    };

    const currentStep = formStepState[step];

    return currentStep ? <div className="questionnaire-form-container">
        <h1 className="step-question">
            {currentStep.questionLabel}
        </h1>
        <div className="step-responses">
            {currentStep.responses.map(renderResponse)}
        </div>
    </div> : null;
}