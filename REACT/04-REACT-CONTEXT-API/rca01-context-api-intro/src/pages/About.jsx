import { useContext } from "react"
import TopAbout from "../components/About/TopAbout"
import { UserContext } from "../contexts/UserContext"

function About() {
    const { users } = useContext(UserContext);
  return (
    <div className="row">
        <TopAbout />
        <article>
            <h2>About Page Section</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ex, facere perspiciatis quibusdam magni reiciendis.</p>
            <p>Cum, blanditiis nihil iste delectus dolore, illum fugit quo, tempora nemo pariatur quae magnam accusantium?</p>
            <p>Eligendi quibusdam magnam natus, incidunt aperiam quisquam enim veniam nemo dignissimos excepturi eum, dolores impedit.</p>
            <ul>
                {
                    users.map(user => <li key={user.id}>{user.firstname} {user.lastname.toUpperCase()}</li>)
                }
            </ul>
        </article>
    </div>
  )
}

export default About