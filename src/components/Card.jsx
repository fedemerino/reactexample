import { Paper } from '@mui/material'

export const Card = ({ card }) => {
    return (
        <Paper elevation={3} className='card'>
            <img src={card.img} alt="card" />
            <div className="links">
                {card.links.map((link) => {
                    return (
                        <a href={link.url} key={link.url}>
                            <p>{link.name}</p>
                        </a>
                    )
                })}
            </div>
        </Paper>
    )
}
