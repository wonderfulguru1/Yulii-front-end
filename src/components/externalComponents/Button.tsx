import { LazyLoadImage } from 'react-lazy-load-image-component';
import { MouseEventHandler } from "react";

type Props = {
    title: string,
    leftIcon?: string | null,
    rightIcon?: string | null,
    handleClick?: MouseEventHandler,
    submitting?: boolean | false,
    type?: 'button' | 'submit',
    bgColor?: string,
    textColor?: string
 
}

const Button = ({ title, leftIcon, rightIcon, handleClick, submitting, type, bgColor, textColor }: Props) => (
    <button
        type={type || 'button'}
        disabled={submitting || false}
        className={`flexCenter gap-3 px-8 py-2 
        ${textColor ? textColor : 'text-white'} 
        ${submitting ? 'bg-black/50' : bgColor ? bgColor : 'bg-primary'} rounded-full text-md font-medium max-md:w-full`}
        onClick={handleClick}
    >
        {leftIcon && <LazyLoadImage src={leftIcon} width={14} height={14} alt="left icon" />}
        {title}
        {rightIcon && <LazyLoadImage src={rightIcon} width={14} height={14} alt="right icon" />}
    </button>
)

export default Button;