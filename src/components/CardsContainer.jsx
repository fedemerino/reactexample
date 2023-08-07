import { Card } from './Card'
const cards = [
    {
        img: 'autogestion.png',
        links: [
            {
                name: 'Autogestión',
                url: '/misdatos'
            },
            {
                name: 'Soporte',
                url: '/soporte'
            }
        ]
    },
    {
        img: 'workflow.png',
        links: [
            {
                name: 'Compulsas',
                url: '/compulsas'
            }
        ]
    },
    {
        img: 'reportes.png',
        links: [
            {
                name: 'Reportes de Proveedores',
                url: '/reportes'
            },
            {
                name: 'Alta/Modificación de Proveedores',
                url: '/altamodificacion'
            },
            {
                name: 'Consulta de Proveedores',
                url: '/consulta'
            }
        ]
    }
]
export const CardsContainer = () => {
    return (
        <div className='cardContainer'>
            {cards.map((card) => <Card card={card} key={card.img} />)}
        </div>
    )
}
