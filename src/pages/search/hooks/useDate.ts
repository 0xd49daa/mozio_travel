export default function useDate(setValues: any) {
	const handleDate = (value: string) => {
		setValues({ date: value })
	}

    return [
        handleDate
    ]
}
