import '../sass/Button.scss'

// eslint-disable-next-line react/prop-types
const Button = ({ icon, handleClick }) => {
    return (
        <div className='button_box'>
            <button
                className="button"
                onClick={handleClick}>
                {icon}
            </button>
            <div className='button_shadow'> </div>

        </div>


    )
}

export { Button }