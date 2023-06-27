import type {Meta, StoryObj} from '@storybook/react';
import {Box} from '@mui/material'
import CitiesSelector from '../components/CitiesSelector/CitiesSelector'
import { EMPTY_CITY } from '../constants';

const meta: Meta<typeof CitiesSelector> = {
	component: CitiesSelector,
	argTypes: {
		onAdd: { action: 'onAdd' },
	},
	args: {
		cities: [EMPTY_CITY, EMPTY_CITY, EMPTY_CITY],
	}
};

export default meta;

type Story = StoryObj<typeof CitiesSelector>;
export const Primary: Story = {
};