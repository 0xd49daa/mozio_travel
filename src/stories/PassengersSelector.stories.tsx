import type {Meta, StoryObj} from '@storybook/react';
import PassengersSelector from '../components/PassengersSelector/PassengersSelector'

const meta: Meta<typeof PassengersSelector> = {
	component: PassengersSelector,
	argTypes: {
		onUpClick: { action: 'onUpClick' },
		onDownClick: { action: 'onDownClick' },
	},
};

export default meta;

type Story = StoryObj<typeof PassengersSelector>;
export const Primary: Story = {
	args: {
		value: 10,
	}
};