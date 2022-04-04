import data from '../public/data.json';

/**
 *  This is a simple way of showing data onto the front end by passing a static file onto the page
 *  Once we are satisfied with how we want the json to look we can go forward
 */

const Result = () => {

    return (
        <div>
        <h1>Query Results</h1>
            <div>
                <a>
                    <h3>{ data.title } </h3>
                    <p>Author: { data.author ? data.author : 'Not found'  }</p>
                    <p>Word Count: { data.word_count }</p>
                    <p>{ data.domain }</p>
                    <p>{ data.content }</p>
                </a>
            </div>
        </div>
    )

};

export default Result;