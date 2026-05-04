import { useState } from "react"
import initialArticles from '../data/articles'

export default function AppMain() {

    const [newAtricle, setNewArticle] = useState('')
    const [articles, setArticles] = useState(initialArticles)
    return (
        <>

            <div className="container">
                <div className="card p-3">
                    <input type="text" className="form-contro mb-2" value={newAtricle} onChange={e => setNewArticle(e.target.value)} />
                    <div className="d-flex justify-content-center">
                        <button className="text-uppercase btn btn-dark"><i className="bi bi-plus-circle"></i> aggiungi</button>
                    </div>
                    <hr />

                    <ul class="list-group">
                        {articles.map((article, i) =>
                            <li class="list-group-item" key={i}>{article}</li>
                        )}
                    </ul>

                </div>
            </div>
        </>



    )
}