import React from 'react'
import styled  from 'styled-components'
import { Link } from 'react-router-dom'

const Articles = ({ posts }) => {
    return (
        <MainContainer>
            {posts.map((article, key) => (
                <div className="container" key={key}>
                    <h2>{article.title}</h2>
                    <p>{article.article}</p>
                    <span className="badge badge-secondary p-2">{article.authorname}</span>
                    <div className="row my-5">
                        <div className="col-sm-2">
                            <Link to="/edit-article" className="btn btn-outline-success">
                                Edit Article
                            </Link>
                        </div>
                        <div className="col-sm-2">
                            <Link to="/delete-article" className="btn btn-outline-danger">
                                Delete Article
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </MainContainer>
    )
}

const MainContainer = styled.div`
    margin: 7rem 0;
`

export default Articles