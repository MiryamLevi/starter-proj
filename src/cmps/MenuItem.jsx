import { RiInboxFill } from "react-icons/ri";
import { CiStar } from "react-icons/ci";


export function MenuItem({item})
{
    return (
        <article>
            {(item.name == 'Inbox' && <p><RiInboxFill /> Inbox</p>) ||
            (item.name == 'Starred' && <p><CiStar />Starred</p>)}
            {/* {item.name == '' && < />} */}
        </article>
    )
}