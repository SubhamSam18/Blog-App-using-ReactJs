import React from 'react'
import {Icon} from 'react-icons-kit'
import {trash} from 'react-icons-kit/feather/trash'

export const View = ({blogs,deleteBlog}) => {
    
    return blogs.map(blog=>(
        
        <tr key={blog.blogdec}>
            <td>{blog.title}</td>
            <td>{blog.blogdec}</td>
            <td>{blog.author}</td>
            <td className='delete-btn' onClick={()=>deleteBlog(blog.blogdec)}>
                <Icon icon={trash}/>
            </td>           
        </tr>            
    
))
}
