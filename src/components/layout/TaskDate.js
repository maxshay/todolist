import React from 'react';
import moment from 'moment';
import { FaSpaceShuttle, FaRegPaperPlane, FaSun } from 'react-icons/fa';

export const TaskDate = ({ setTaskDate, showTaskDate, setShowTaskDate}) => 

    showTaskDate && (
        <div className="task-date" data-tesid="task-date-overlay">
            <ul className="task-date__list">
                <li
                    onClick={() => {
                        setShowTaskDate(false);
                        setTaskDate(moment().format('DD/MM/YYYY'));
                    }}
                >
                    <span>
                        <FaSpaceShuttle />
                    </span>
                    <span>Today</span>
                </li>

                <li
                    onClick={() => {
                        setShowTaskDate(false);
                        setTaskDate(
                            moment()
                                .add(1, 'day')
                                .format('DD/MM/YYYY'));
                    }}
                    data-testid="task-date-tomorrow"
                >
                    <span>
                        <FaSun />
                    </span>
                    <span>Tomorrow</span>
                </li>

                <li
                    onClick={() => {
                        setShowTaskDate(false);
                        setTaskDate(
                            moment()
                                .add(7, 'day')
                                .format('DD/MM/YYYY'));
                    }}
                    data-testid="task-date-next-week"
                >
                    <span>
                        <FaRegPaperPlane />
                    </span>
                    <span>Next Week</span>
                </li>
            </ul>
        </div>
    );