import React from 'react';

const NewPost = () =>{

    return(
        <>
            <form className="col s10 formNewPost" method="post" action='https://jsonplaceholder.typicode.com/posts'>
                <div className="row">
                <h3>NewPost</h3>
    
                <label for="title"><h5>Title:</h5>
                    <input id="title" type="text" className="validate" placeholder='Post title' checked/>
                    </label>
                    <label for="content"><h5>Content:</h5>
                    <textarea rows='10' cols='10' placeholder="Multi line text area" id="content" type="text area" className="validate" checked/>
                    </label>
                    <button type="reset">Chancel</button>
                    <button type="submit">Save</button>
                </div>
            </form>
        </>
    ) 
}

export default NewPost;