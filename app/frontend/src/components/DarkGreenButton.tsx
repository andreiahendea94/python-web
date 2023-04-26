import Button from 'react-bootstrap/Button';
import '../assets/DarkGreenButton.css'

interface ButtonProps {
  children?: any,
  className?: string,
  type?: "button" | "submit" | "reset" | undefined
}

function DarkGreenButton({children, className=undefined, type}: ButtonProps): JSX.Element {
  return (
    <Button
      variant="darkGreen"
      size="lg"
      className={className}
      type={type}>
      {children}
    </Button>
  );
}

export default DarkGreenButton;