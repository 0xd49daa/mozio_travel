export default function usePassengers(setValues: any) {
	const handlePassengers = (value: number) => {
		setValues({ passengers: value })
	}

    return [
        handlePassengers
    ]
}
