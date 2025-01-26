import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"

function TopAbout() {
    const { users } = useContext(UserContext);
  return (
    <>
        <article>
            <h2>Top About Component Section</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam et mollitia, a accusamus fugit culpa.</p>
            <p>Quos esse perferendis voluptatibus aliquam. Fugiat, voluptas? Officiis, eos illum! Commodi dignissimos dicta a quod!</p>
            <p>Iste explicabo dolorum incidunt nobis quidem! Enim, reprehenderit corporis! Quibusdam saepe ratione nulla assumenda ipsa.</p>
            <ul className="list-group">
                {
                    users.map(user => <li className="list-group-item" key={user.id}>{user.id} - {user.firstname} {user.lastname.toUpperCase()}</li>)
                }
            </ul>
        </article>
    </>
  )
}

export default TopAbout