import { EMPTY_CITY } from '../../../constants'
import { City } from '../../../types/common'

export default function useCities(cities: (City|null)[], setValues: any) {
	const handleAddCity = () => {
		setValues({ cities: [...cities, EMPTY_CITY] })
	}

	const handleDeleteCity = (index: number) => {
		cities.splice(index, 1)
		setValues({ cities: [...cities] })
	}

	const handleUpdateCity = (index: number, value: City|null) => {
		cities[index] = value
		setValues({ cities: [...cities] })
	}

	return {
		cities,
		handleAddCity,
		handleDeleteCity,
		handleUpdateCity
	}
}