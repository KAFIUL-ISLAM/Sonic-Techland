import React from 'react';
import Footer from '../CommonComp/Footer';
import Header from '../CommonComp/Header';

const Blogs = () => {
    return (
        <div>
            <Header></Header>
            <div>
                <h1 className='text-4xl text-primary font-serif font-medium my-16 ml-12'>Some Common QnA</h1>
                <div className='text-left mt-10 mb-16 mx-24 font-serif text-slate-800'>
                    <h4 className='text-lg font-semibold'><span className='text-2xl text-slate-500 font-bold'>Q: </span>What are the different ways to manage a state in a React application?</h4>
                    <br />
                    <p>
                        <span className='text-2xl text-slate-500 font-bold'>Ans: </span>
                        There are four main types of state you need to properly manage React application: <br />
                        <br />
                        1. Local state- Local state is data we manage in one or another component. <br />
                        2. Global state- Global state is data we manage across multiple components. <br />
                        3. Server state- Data that comes from an external server that must be integrated with our UI state. <br />
                        4. URL state- Data that exists on our URLs, including the pathname and query parameters. <br />
                    </p>
                </div>
                <div className='text-left mt-10 mb-16 mx-24 font-serif text-slate-800'>
                    <h4 className='text-lg font-semibold'><span className='text-2xl text-slate-500 font-bold'>Q: </span>How does prototypical inheritance work?</h4>
                    <br />
                    <p>
                        <span className='text-2xl text-slate-500 font-bold'>Ans: </span>
                        The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.
                    </p>
                </div>
                <div className='text-left mt-10 mb-16 mx-24 font-serif text-slate-800'>
                    <h4 className='text-lg font-semibold'><span className='text-2xl text-slate-500 font-bold'>Q: </span>What is a unit test? Why should write unit tests?</h4>
                    <br />
                    <p>
                        <span className='text-2xl text-slate-500 font-bold'>Ans: </span>
                        Unit tests are typically automated tests written and run by software developers to ensure that a section of an application (known as the "unit") meets its design and behaves as intended. In procedural programming, a unit could be an entire module, but it is more commonly an individual function or procedure.
                    </p>
                </div>
                <div className='text-left mt-10 mb-16 mx-24 font-serif text-slate-800'>
                    <h4 className='text-lg font-semibold'><span className='text-2xl text-slate-500 font-bold'>Q: </span>How will you improve the performance of a React Application?</h4>
                    <br />
                    <p>
                        <span className='text-2xl text-slate-500 font-bold'>Ans: </span>
                        Optimizing performance in a React application <br />
                        <br />
                        1. Keeping component state local where necessary. <br />
                        2. Memoizing React components to prevent unnecessary re-renders. <br />
                        3. Code-splitting in React using dynamic import() <br />
                        4 .Windowing or list virtualization in React. <br />
                        5 .Lazy loading images in React. <br />
                    </p>
                </div>
                <div className='text-left mt-10 mb-16 mx-24 font-serif text-slate-800'>
                    <h4 className='text-lg font-semibold'><span className='text-2xl text-slate-500 font-bold'>Q: </span> How will you implement a search to find products from an array?</h4>
                    <br />
                    <p>
                        <span className='text-2xl text-slate-500 font-bold'>Ans: </span>
                        There is some way to find specific products from an array: <br />
                        <br />
                        1. Use filter if you want to find all items in an array that meet a specific condition. <br />
                        2. Use find if you want to check if that at least one item meets a specific condition. <br />
                        3. Use includes if you want to check if an array contains a particular value. <br />
                        4. Use indexOf if you want to find the index of a particular item in an array. <br />
                    </p>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blogs;