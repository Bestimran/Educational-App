import React from 'react';

const Blog = () => {
    return (
        <div className='mt-5 bg-info p-5 rounded'>
            <div  className='bg-success p-5 rounded'>
            <h3>What is CORS?</h3>
            <p> Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, ...</p>
            </div>
            <div  className='p-5'>
            <h3>Why we using firebase and what other option without firebase?</h3>
            <p> Firebase provides tools to grow your app and business, for startups & global enterprises. Get your app up and running quickly & securely with fully managed backend infrastructure. Customize Your App. Release Apps Confidently. Monitor App Performance.</p>
            </div>
            <div  className='bg-success p-5 rounded'>
            <h3>What does work private route?</h3>
            <p> Private Routes in React Router (also called Protected Routes) require a user being authorized to visit a route</p>
            </div>
            <div  className='bg-info p-5'>
            <h3>What is node and How does work Node?</h3>
            <p> Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return.</p>
            </div>
        </div>
    );
};

export default Blog;