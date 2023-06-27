import {City} from './types/common'
import dayjs from 'dayjs'

export const EMPTY_CITY: City = {
	name: '',
	latitude: 0,
	longitude: 0,
}
export const DATE_FORMAT = 'MM-DD-YYYY'

export const DEFINITIONS = [
	{
		key: 'cities',
		defaultValue: [EMPTY_CITY, EMPTY_CITY],
	},
	{
		key: 'passengers',
		defaultValue: 1,
	},
	{
		key: 'date',
		defaultValue: dayjs().format(DATE_FORMAT),
	}
]
