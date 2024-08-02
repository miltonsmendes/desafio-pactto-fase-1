import { StyleButton } from "./styles";

interface GeneralButtonProps {
    color: string;
    text: string;
  }


export function GeneralButton({color, text}: GeneralButtonProps) {

    return (
        <div>
            <StyleButton color={color}>{text}</StyleButton>
        </div>
    )
  }