const NoteIcon = ({ fill_color }) => {
    return (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.48387 6.01355V6.96774C3.48387 7.82129 4.17871 8.51613 5.03226 8.51613H5.98645C6.60774 8.51613 7.19032 8.27419 7.62968 7.83484L11.6032 3.86129C11.8587 3.60581 12 3.26516 12 2.90323C12 1.30258 10.6974 0 9.09677 0C8.73484 0 8.39419 0.14129 8.13871 0.396774L4.16323 4.37032C3.72387 4.80968 3.48387 5.39226 3.48387 6.01355ZM4.64516 6.01355C4.64516 5.70387 4.76516 5.41161 4.98581 5.1929L9.01742 1.16129H9.09677C10.0568 1.16129 10.8387 1.94323 10.8387 2.90323V2.98258L6.8071 7.01419C6.58839 7.2329 6.29613 7.35484 5.98645 7.35484H5.03226C4.81936 7.35484 4.64516 7.18065 4.64516 6.96774V6.01355Z" fill={fill_color ? fill_color : `#64647D`} />
            <path d="M4.07419 0.228376C4.05097 0.228376 4.02774 0.228376 4.00452 0.232247C3.80323 0.257408 3.60194 0.284505 3.40065 0.317408C1.7671 0.582569 0.487742 1.84063 0.220645 3.45096C0.0754838 4.3258 0 5.21999 0 6.10838C0 6.99676 0.0735483 7.89096 0.220645 8.7658C0.487742 10.3664 1.74194 11.6206 3.34452 11.8877C4.07032 12.0077 4.87355 12.0039 5.64968 11.9981C5.95548 11.9961 6.25355 11.9981 6.54194 11.9981C7.26 12.0039 7.93742 12.0077 8.65742 11.8877C10.2658 11.6206 11.5239 10.3432 11.789 8.70967C11.8219 8.50838 11.851 8.30709 11.8742 8.10386C11.8935 7.94128 11.8452 7.78451 11.7348 7.66064C11.6245 7.53483 11.4639 7.46321 11.2974 7.46321C11.0052 7.46321 10.7574 7.6858 10.7206 7.97805C10.6955 8.17741 10.6665 8.37483 10.6335 8.57031C10.4477 9.68128 9.58839 10.5522 8.49484 10.7361C6.86129 11.0129 5.17161 11.0148 3.53226 10.7419C2.42129 10.5561 1.55032 9.68515 1.36452 8.57418C1.22903 7.76128 1.15935 6.93096 1.15935 6.10644C1.15935 5.28192 1.22903 4.43031 1.36839 3.60773C1.55226 2.51418 2.42323 1.65676 3.53419 1.47096C3.73161 1.43805 3.92903 1.40902 4.12645 1.38386C4.42065 1.34709 4.64323 1.09934 4.64323 0.807086C4.64323 0.638699 4.57161 0.479989 4.44581 0.369666C4.33936 0.274827 4.20968 0.22644 4.07226 0.22644L4.07419 0.228376Z" fill={fill_color ? fill_color : `#64647D`} />
        </svg>
    )
}

export default NoteIcon;