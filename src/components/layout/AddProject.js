import React, { useState } from 'react'; 
import { firebase } from '../../firebase';
import { generatePushId } from '../../helpers';
import { useProjectsValue } from '../../context';

export const AddProject = ({ shouldShow = false}) => {
    const [show, setShow] = useState(shouldShow);
    const [projectName, setProjectName] = useState('');

    const projectId = generatePushId();
    const { projects, setProjects } = useProjectsValue();

    const AddProject = () => 
        projectName &&
        firebase  
            .firestore()
            .collection('projects')
            .add({
                projectId,
                name: projectName,
                userId: 'V3NmYV3NmYrGjEorGjEo',
            })
            .then(() => {
                setProjects([...projects]);
                setProjectName('');
                setShow(false);

            });

    return (
        <div className="add-project" data-testid="add-project">
            {show && (
                <div className="add-project__input">
                    <div className="add-project__input-area">
                        <input
                            value={projectName}
                            onChange={e => setProjectName(e.target.value)}
                            className="add-project__name"
                            data-testid="project-name"
                            type="text"
                            placeholder="&nbsp;"
                        />
                        <span className="add-project__placeholder">Name Your Project</span>
                        <span className="add-project__border"></span>
                    </div>
                    <button
                        className="add-project__submit"
                        type="button"
                        onClick={() => AddProject()}
                        data-testid="add-project-submit"
                    >
                        Add Project
                    </button>
                    <span
                        date-testid="hide-project-overlay"
                        className="add-project__cancel"
                        onClick={() => setShow(false)}
                    >
                        Cancel
                    </span>
                    
                </div>
            )}
            <div   
                className="add-project__action-holder"
                
                date-testid="hide-project-action"
                onClick={() => setShow(!show)}
            >
                <span className="add-project__plus">+</span>
                <span className="add-project__text">Add Project</span>
            </div>
        </div>
    )
};