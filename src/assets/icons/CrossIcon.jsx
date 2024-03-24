const CrossIcon = ({ fill_color }) => {
    return (
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_2_165)">
                <path d="M7.85333 7.14686L4.70667 4.00019L7.85333 0.853527C7.94833 0.758527 8 0.633527 8 0.500194C8 0.366861 7.94833 0.24186 7.85333 0.14686C7.65833 -0.0481397 7.34167 -0.0481397 7.14667 0.14686L4 3.29353L0.853333 0.14686C0.658333 -0.0481397 0.341667 -0.0481397 0.146667 0.14686C0.0516665 0.24186 0 0.366861 0 0.500194C0 0.633527 0.0516665 0.758527 0.146667 0.853527L3.29333 4.00019L0.146667 7.14686C0.0516665 7.24186 0 7.36686 0 7.50019C0 7.63353 0.0516665 7.75853 0.146667 7.85353C0.335 8.04186 0.665 8.04186 0.853333 7.85353L4 4.70686L7.14667 7.85353C7.335 8.04186 7.665 8.04186 7.85333 7.85353C7.94833 7.75853 8 7.63353 8 7.50019C8 7.36686 7.94833 7.24186 7.85333 7.14686Z" fill={fill_color ? fill_color : `#EBEBFA`} />
            </g>
            <defs>
                <clipPath id="clip0_2_165">
                    <rect width="8" height="8" fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
}

export default CrossIcon;