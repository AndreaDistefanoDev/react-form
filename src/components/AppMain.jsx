import { useState } from "react"
import initialArticles from '../data/articles'

export default function AppMain() {

    const [newAtricle, setNewArticle] = useState('')
    const [articles, setArticles] = useState(initialArticles)
    function submit(e) {
        e.preventDefault()
        setArticles([...articles, newAtricle])
        setNewArticle('')

    }
    return (
        <>

            <div className="container">
                <div className="card p-3">
                    <form action="" onSubmit={submit}>
                        <input type="text" className="form-control mb-2" value={newAtricle} onChange={e => setNewArticle(e.target.value)} />
                        <div className="d-flex justify-content-center">
                            <button className="text-uppercase btn btn-dark"><i className="bi bi-plus-circle"></i> aggiungi</button>
                        </div>
                    </form>

                    <hr />

                    <ul className="list-group">
                        {articles.map((article, i) =>
                            <li className="list-group-item" key={i}>
                                {article}
                            </li>
                        )}
                    </ul>

                </div>
            </div>
        </>



    )
}