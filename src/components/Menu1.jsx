import { Link } from 'react-router-dom'
import { ChevronsRight } from 'lucide-react'

export default function Menu1() {
    return (
        <ul class="list-group">
            <li class="list-group-item bg-primary-subtle" aria-current="true">Conteúdos UC1</li>
            <Link className="list-group-item list-group-item-action" to="/aulas">
                <ChevronsRight size={20} /> Conteúdo - Aulas de projeto
            </Link>
            <Link className="list-group-item list-group-item-action" to="/briefing">
                <ChevronsRight size={20} /> MobUrb - Briefing
            </Link>
            <Link className="list-group-item list-group-item-action" to="/requisitos">
                <ChevronsRight size={20} /> MobUrb - Requisitos
            </Link>
        </ul>
    )
}
