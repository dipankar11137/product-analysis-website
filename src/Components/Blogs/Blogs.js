import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='container'>
            <h1 className='m-3 fw-bold'><u>Question & Answer</u></h1>
            <div className='shadow-lg blog-answer w-75 rounded-3 mt-5'>
                <h3>1. What is context Api</h3>
                <p>The Context API is a reactive structure that enables you to exchange unique details and facilitate prop-drilling solutions from all levels of your application.The React Context API has been around as an experimental feature for some time but has finally become safer to use in production. In this article, Boris Yordanov, developer of Toptal Freelance JavaScript, introduces us to the API and explains it with two basic web store apps, one made with Context API and one without it.This new API solves a major problem - prop drilling. Even if you are not familiar with this term, it probably happened to you if you are working on a React.js app. Prop drilling is the processing of data from component A to component Z that goes through multiple layers of mediating reaction components.</p>
            </div>
            <div className='shadow-lg blog-answer w-75 rounded-3 mt-5'>
                <h3>2. What is the Sematic tag</h3>
                <p>Semantic HTML or semantic markup is HTML that identifies the meaning of a web page rather than just the presentation. For example, a (p) tag indicates that the bound text is a paragraph. This is both semantic and representational because people know what paragraphs are and how browsers need to display them.

                    Conversely, tags such as (b) and (i) are not semantic. They only determine what the text should look like (bold or italic), and do not pay extra for markup.</p>
            </div>
            <div className='shadow-lg blog-answer w-75 rounded-3 mt-5'>
                <h3>3. Difference Between Inline Block and Inline Blocks Elements</h3>
                <p><span className='fs-5 fw-bold'>What is a inline Block Element?</span><br />
                    A inline block element is an HTML element that expands the width of the container, such as a paragraph, an image, or a code snippet below. It should be noted that while having block and inline elements, these terms define only "type" as the element in question, not the CSS style associated with it. <br />

                    <span className='fs-5 fw-bold'>What is an inline blogs element?</span><br />
                    Think of an inline element as something that does not move other elements around. Such as the boldness of a (strong) tag or the obliqueness of a (em) tag. These flow in the context of the document, as opposed to a block element that is the context of the document.
                </p>
            </div>
            <div className='p-5'>

            </div>
        </div>
    );
};

export default Blogs;