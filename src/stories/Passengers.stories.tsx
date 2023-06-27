import type {Meta, StoryObj} from '@storybook/react';
import PassengersSelector from '../components/PassengersSelector/PassengersSelector'
import Passengers from '../components/PassengersSelector/Passengers'

const meta: Meta<typeof Passengers> = {
	component: Passengers,
	argTypes: {
		onChange: { action: 'onChange' },
	},
};

export default meta;

type Story = StoryObj<typeof Passengers>;
export const Valid: Story = {
	args: {
		value: 1,
	}
};

export const NotValid: Story = {
	args: {
		value: 0,
	}
};