/* eslint-disable import/no-anonymous-default-export */
import { getPosts } from '../../utils/mdx-utils';


const posts = getPosts(); //process.env.NODE_ENV === 'production' ? require('../../cache/data').posts : getSortedPostsData()

export default (req, res) => {
  const results = req.query.q ?
    posts.filter(post => 
      post.data?.title?.toLowerCase()?.includes(req.query.q?.toLowerCase()))
                        .map( (item) => ({id: item.filePath.replace(/\.mdx?$/, ''),
                                          title: item.data.title
                                        })) 
                        : []
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({ results }))

  return res
}