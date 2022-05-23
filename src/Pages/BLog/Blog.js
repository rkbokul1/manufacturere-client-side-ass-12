import React from 'react';

const Blog = () => {
    return (
        <div className='grid justify-center'>

            <h1 className='my-5 text-2xl font-bold text-primary-focus text-center'>Frequently Asked Question</h1>
            {/* 1 */}
            <div tabIndex="0" className="collapse my-2 lg:max-w-lg collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    <h1>How will you improve the performance of a React Application?</h1>
                </div>
                <div className="collapse-content">
                    <p>Optimizing application performance is key for developers who are mindful of keeping a user’s experience positive to keep them on an app and engaged.
                        Five importans things to Optiomizing best applications performance-
                    </p>
                    <p><small>
                        1. Keeping component state local where necessary <br />
                        2. Memoizing React components to prevent unnecessary re-renders <br />
                        3. Code-splitting in React using dynamic import() <br />
                        4. Windowing or list virtualization in React <br />
                        5. Lazy loading images in React.
                    </small></p>
                </div>
            </div>
            {/* 2 */}
            <div tabIndex="0" className="collapse my-2 lg:max-w-lg collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    <h1>What are the different ways to manage a state in a React application?</h1>
                </div>
                <div className="collapse-content">
                    <p>There are four main types of state you need to properly manage in your React apps:</p>

                    <p><small>
                        1. Local state. <br />
                        2. Global state. <br />
                        3.  Server state. <br />
                        4. URL state.
                    </small></p>
                </div>
            </div>
            {/* 3 */}
            <div tabIndex="0" className="collapse my-2 lg:max-w-lg collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    <h1>Why you do not set the state directly in React?</h1>
                </div>
                <div className="collapse-content">
                    <p>One should never update the state directly because of the following reasons:-
                    </p>
                    <p><small>
                        1. f you update it directly, calling the setState() afterward may just replace the update you made.<br />
                        2. When you directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.<br />
                        3. ou will lose control of the state across all components. <br />
                    </small></p>
                </div>
            </div>
            {/* 4 */}
            <div tabIndex="0" className="collapse my-2 lg:max-w-lg collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    <h1>What is a unit test? Why should write unit tests?</h1>
                </div>
                <div className="collapse-content">
                    <p>Optimizing application performance is key for developers who are mindful of keeping a user’s experience positive to keep them on an app and engaged.
                        Five importans things to Optiomizing best applications performance-
                    </p>
                    <p><small>
                        1. Keeping component state local where necessary <br />
                        2. Memoizing React components to prevent unnecessary re-renders <br />
                        3. Code-splitting in React using dynamic import() <br />
                        4. Windowing or list virtualization in React <br />
                        5. Lazy loading images in React.
                    </small></p>
                </div>
            </div>
            {/* 5 */}
            <div tabIndex="0" className="collapse my-2 lg:max-w-lg collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    <h1>How does prototypical inheritance work?</h1>
                </div>
                <div className="collapse-content">
                    <p>Optimizing application performance is key for developers who are mindful of keeping a user’s experience positive to keep them on an app and engaged.
                        Five importans things to Optiomizing best applications performance-
                    </p>
                    <p><small>
                        1. Keeping component state local where necessary <br />
                        2. Memoizing React components to prevent unnecessary re-renders <br />
                        3. Code-splitting in React using dynamic import() <br />
                        4. Windowing or list virtualization in React <br />
                        5. Lazy loading images in React.
                    </small></p>
                </div>
            </div>


        </div>
    );
};

export default Blog;