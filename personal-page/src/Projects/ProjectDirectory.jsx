import React from 'react';
import Breadcrum from '../Navigation/Breadcrum';
const ProjectDirectory = () => {
    return (
        <div style={{ padding: '2rem', textAlign: 'center' }}>
            <Breadcrum segments={["Projects"]} />
            <h1>Project Directory</h1>
            <p>🚧 Work in progress. Check back soon! 🚧</p>
        </div>
    );
};

export default ProjectDirectory;