import data from '../public/data.json';

/**
 *  This is a simple way of showing data onto the front end by passing a static file onto the page
 *  Once we are satisfied with how we want the json to look we can go forward
 */

const Result = () => {

    return (
        <>
        <div className="container max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 ">

        <h1 className="text-3xl text-blue font-bold underline">Query Results</h1>
        <br />
            <div>
                <a>
                    <h3 className="text-2xl">{ data.title } </h3>
                    <p className="text-gray-dark">Author: { data.author ? data.author : 'Not found'  }</p>
                    <p>{ data.domain }</p>
                    <br />
                    <p>Word Count: { data.word_count }</p>
                    <hr />
                    <p>{ data.content }</p>
                </a>
            </div>
        </div>
        </>
    )

};

export default Result;