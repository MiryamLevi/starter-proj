import { EmailIndex } from './EmailIndex'
import {Menu} from '../cmps/Menu'
export function Home() {
    return (
        <section className="home">
            <Menu/>
            <article className="menu-item-content"></article>
            <EmailIndex/>
        </section>
    )
}
