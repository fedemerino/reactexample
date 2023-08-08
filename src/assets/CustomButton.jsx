import { Button} from "@mui/material"
export const CustomButton = ({ innerText, color, onClick, type, variant, bg,bgHover,disabled }) => {
  
  return (
    <Button disabled={disabled} type={type} onClick={onClick} variant={variant} sx={{
      background: bg ? bg : 'transparent',
      'fontFamily': '"Montserrat", sans-serif',
      'fontWeight': '400',
      color: color,
      border: '1px solid ' + color,
      borderRadius: '3px',
      marginTop: '0rem',
      padding: '0.75rem 1.3rem 0.75rem 1.3rem',
      'min-width': 0,
      '&:hover': {
        border: '1px solid ' + color,
        background: bgHover ? bgHover:null
      }
    }}>{innerText}</Button>
  )
}

