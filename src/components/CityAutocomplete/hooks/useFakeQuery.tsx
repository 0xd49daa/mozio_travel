import {useCallback, useRef, useState} from 'react'
import cities from '../../../assets/cities.json'
import {City} from '../../../types/common'

async function delay(timeout: number) {
	return new Promise((resolve) => setTimeout(resolve, timeout))
}

const MAX_DELAY = 1000

async function fakeFetch(search: string, limit = 5): Promise<City[]> {
	await delay(Math.floor(Math.random() * MAX_DELAY))

	if (search.toLowerCase() === 'fail') {
		throw new Error('Failed to fetch')
	}

	let data = cities.map((item: any[]): City => ({
		name: item[0],
		latitude: item[1],
		longitude: item[2]
	} as City));

	data = data.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))

	return data.slice(0, limit)
}

export default function useFakeQuery() {
	const [loading, setLoading] = useState(false)
	const [data, setData] = useState([] as City[])
	const [error, setError] = useState(false)

	const prevSearch = useRef<string|null>(null)

	const fetch = useCallback(async (search: string) => {
		if (search === prevSearch.current) {
			return
		}

		prevSearch.current = search

		setError(false)
		setLoading(true)

		try {
			const response = await fakeFetch(search);
			setData(response)
			setLoading(false)
		}
		catch(e) {
			setError(true)
			setLoading(false)
		}
	}, [])

	return {
		loading,
		fetch,
		data,
		error
	}
}