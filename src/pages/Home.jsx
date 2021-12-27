import { Card } from "../components/Card"
import {posts} from "../data"


const Home = ()=>{
    return(
        <div className="home">
            {posts.map(e=>(
                <Card key={e.id} post = {e}/>
            ))}
        </div>
    )
}

export {Home}