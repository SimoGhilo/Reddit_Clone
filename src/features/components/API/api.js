export const APIRoot = 'https://www.reddit.com/r';

//Fetch all posts for a specific subreddit 

export const getSubRedditPosts = async (subreddit) => {
    const response = await fetch(`${APIRoot}/${subreddit}.json`);
    const json = await response.json();

    return json.data.children.map((post) => post.data)
}

///Fetch all subreddits 

export const getSubreddits = async () => {
    const response = await fetch(`${APIRoot}/subreddits.json`);
    const json = await response.json();

    return json.data.children.map((subreddit) => subreddit.data);
}

///Fetch the comments for a subreddit

///???