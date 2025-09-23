import React from 'react';
import './FlagTest.css';

function FlagTest() {
    return (
        <div className="flag-test">
            <h3>Teste de Bandeiras:</h3>
            <div className="flag-test__container">
                <span className="flag-test__flag">🇧🇷</span>
                <span className="flag-test__flag">🇺🇸</span>
                <span className="flag-test__flag">🇫🇷</span>
                <span className="flag-test__flag">🇩🇪</span>
            </div>
            <p>Se você vê bandeiras coloridas acima, os emojis estão funcionando!</p>
        </div>
    );
}

export default FlagTest;
