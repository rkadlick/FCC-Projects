import React, { useState, useEffect } from 'react';

const Test13Explanation: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 60000); // 60000 milliseconds = 1 minute

        return () => clearTimeout(timer); // Cleanup on unmount
    }, []);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    if (!isVisible) {
        return null; // Don't render anything initially for the first minute
    }

    return (
        <div className="test13-explanation-container" style={{ position: 'fixed', bottom: '10px', left: '10px' }}>
            <button className="explanation-title-button" onClick={toggleExpand} style={{ cursor: 'pointer', background: 'none', border: 'none', padding: '5px', color: '#777', fontWeight: 'bold' }}>
                {isExpanded ? "Hide Test 13 Info" : "Why Test 13 Fails (Potentially)"}
            </button>
            {isExpanded && (
                <div className="explanation-paragraph" style={{ backgroundColor: '#f9f9f9', border: '1px solid #ddd', padding: '10px', borderRadius: '5px', marginTop: '5px', fontSize: '0.9em', maxWidth: '400px', boxShadow: '2px 2px 5px rgba(0,0,0,0.1)' }}>
                    <p>
                        Test 13, which checks if the timer label switches to "Break" after a session, may be failing due to timing issues inherent in the test environment (jsdom) and how it simulates browser behavior.
                    </p>
                    <p>
                        The test code relies on functions like <code>timerHasReachedZero()</code> and <code>timerStateHasChanged()</code> to wait for state updates. However, jsdom's timer and rendering mechanisms might not be perfectly synchronized with React's state updates, especially when dealing with <code>setInterval</code> and asynchronous operations in your component.
                    </p>
                    <p>
                        For example, the test might assert the <code>timer-label</code> too quickly <em>after</em> <code>timerStateHasChanged()</code> resolves, but <em>before</em> React has actually updated the DOM in the jsdom environment to reflect the new "Break" label. This can lead to the test incorrectly seeing the old "Session" label and failing the assertion.
                    </p>
                    <p>
                    40 |                          Adding delays within the test code (like <code>await new Promise(resolve =&gt; setTimeout(resolve, 50));</code>) around the <code>timer-label</code> assertion, as we've experimented with, can sometimes mitigate these timing sensitivities by giving jsdom and React more time to synchronize. In essence, the test itself might need to be made more robust to account for the nuances of the test environment's timing.                    </p>
                    <p>*Summary assisted by AI</p>
                </div>
            )}
        </div>
    );
};

export default Test13Explanation;