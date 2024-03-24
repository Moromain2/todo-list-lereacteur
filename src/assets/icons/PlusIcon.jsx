const PlusIcon = ({ fill_color }) => {
    return (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_2_114)">
                <path d="M12 6.00055C12 5.68119 11.7387 5.4199 11.4194 5.4199H6.58064V0.581194C6.58064 0.26184 6.31935 0.000549316 6 0.000549316C5.68064 0.000549316 5.41935 0.26184 5.41935 0.581194V5.4199H0.580645C0.26129 5.4199 0 5.68119 0 6.00055C0 6.3199 0.26129 6.58119 0.580645 6.58119H5.41935V11.4199C5.41935 11.7393 5.68064 12.0005 6 12.0005C6.31935 12.0005 6.58064 11.7393 6.58064 11.4199V6.58119H11.4194C11.7387 6.58119 12 6.3199 12 6.00055Z" fill={fill_color ? fill_color : `#EBEBFA`} />
            </g>
            <defs>
                <clipPath id="clip0_2_114">
                    <rect width="12" height="12" fill="white" transform="translate(0 0.000549316)" />
                </clipPath>
            </defs>
        </svg>
    )
}

export default PlusIcon;