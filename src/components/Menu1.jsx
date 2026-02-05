import { Link } from 'react-router-dom'
import { ChevronsRight } from 'lucide-react'

export default function Menu1() {
    return (
        <ul class="list-group">
            <li class="list-group-item bg-primary-subtle" aria-current="true">Conteúdos UC1</li>
            <Link className="list-group-item list-group-item-action" to="/aulas">
                <ChevronsRight /> Conteúdo - Aulas de projeto
            </Link>
            <Link className="list-group-item list-group-item-action" to="/briefing">
                <ChevronsRight /> Briefing MobUrb
            </Link>
            <Link className="list-group-item list-group-item-action" to="/">
                <ChevronsRight /> Documentação MobUrb
            </Link>

        </ul>
    )
}
