import { useEffect, useState } from "react"
import haversine from 'haversine-distance'
import useSearchParamsValue from "../../search/hooks/useSearchParamsValue"

export const DEFINITIONS = [
	{
		key: 'cities',
		defaultValue: null,
	},
	{
		key: 'passengers',
		defaultValue: null,
	},
	{
		key: 'date',
		defaultValue: null,
	}
]

export default function useResult() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const [distances, setDistances] = useState<number[]>([])
    const [cities, setCities] = useState<any[]>([])

    const [values] = useSearchParamsValue(DEFINITIONS)

    useEffect(() => {
        function calculate() {
            setError(false)
            setLoading(true)


            if (!values.cities || !values.passengers || !values.date) {
                setError(true)
                setLoading(false)

                return
            }

            const cities = values.cities
            const distances: number[] = []
            let fail = false

            for (let i = 0; i < cities.length - 1; i++) {
                if ([cities[i].name, cities[i + 1].name].includes('Dijon')) {
                    fail = true
                }
                const distance = haversine(cities[i], cities[i + 1]) / 1000
                const fixed = distance.toFixed(2)
                distances.push(+fixed)
            }

            setCities(cities)
            setDistances(distances)

            setTimeout(() => {
                if (fail) {
                    setError(true)
                }
                setLoading(false)
            }, 1000)
        }

        calculate()
    }, [])

    return {
        loading,
        error,
        distances,
        cities,
        passengers: values.passengers,
        date: values.date,
    }
}