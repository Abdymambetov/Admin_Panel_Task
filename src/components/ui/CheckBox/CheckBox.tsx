import { Checkbox } from '@radix-ui/themes'
import cls from './CheckBox.module.css'
import { FC } from 'react'

interface ICheckBox {
	checked?: boolean
	onChange?: (checked: boolean) => void
	value: string
}

const CheckBox: FC<ICheckBox> = ({ checked, onChange, value }) => {
	return (
		<Checkbox
			value={value}
			checked={checked}
			onCheckedChange={onChange}
			className={cls.checkbox}
			defaultChecked
		/>
	)
}

export default CheckBox
