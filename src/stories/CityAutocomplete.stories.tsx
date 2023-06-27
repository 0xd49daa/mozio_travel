import type {Meta, StoryObj} from '@storybook/react';
import {Box} from '@mui/material'
import CityAutocomplete from '../components/CityAutocomplete/CityAutocomplete'

const meta: Meta<typeof CityAutocomplete> = {
	component: CityAutocomplete,
	decorators: [
		(Story) => <Box sx={{ width: '300px' }}><Story/></Box>
	],
};

export default meta;

type Story = StoryObj<typeof CityAutocomplete>;
export const Primary: Story = {
	args: {
		label: 'City of origin',
	}
};

export const Error: Story = {
	args: {
		label: 'City of origin',
		inError: true,
	}
};
export const Open: Story = {
	args: {
		label: 'City of origin',
		defaultOpen: true,
	}
};

export const Clearable: Story = {
	args: {
		label: 'City of destination',
		clearable: true,
	}
}
