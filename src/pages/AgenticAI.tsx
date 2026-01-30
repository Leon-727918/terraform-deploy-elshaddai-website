import React from 'react';
import AgenticHero from '../../components/AgenticHero';
import AgenticFeatures from '../../components/AgenticFeatures';
import AgenticArchitecture from '../../components/AgenticArchitecture';
import AgenticIntegrations from '../../components/AgenticIntegrations';
import AgenticAIDetails from '../../components/AgenticAIDetails';

const AgenticAI: React.FC = () => {
    return (
        <div className="bg-[#020617] min-h-screen">
            <AgenticHero />
            <AgenticFeatures />
            <AgenticArchitecture />
            <AgenticIntegrations />
            {/* Existing deep dive section */}
            <AgenticAIDetails />
        </div>
    );
};

export default AgenticAI;
